import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap
} from "react-leaflet";
import type { Layer } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { useTranslation } from "../i18n/useTranslation";
import {
  licenseMapConfig,
  licenseStyleColors,
  type LicenseFeature,
  type LicenseFeatureCollection
} from "../data/licenseMetadata";
import LicenseSidePanel from "./LicenseSidePanel";
import PdfViewerModal from "./PdfViewerModal";

function FitBounds({ features }: { features: LicenseFeature[] }) {
  const map = useMap();

  useEffect(() => {
    if (!features.length) return;

    const group = L.geoJSON({
      type: "FeatureCollection",
      features
    } as GeoJSON.FeatureCollection);

    const bounds = group.getBounds();

    if (bounds.isValid()) {
      map.fitBounds(bounds, {
        padding: [32, 32],
        maxZoom: 11
      });
    }
  }, [features, map]);

  return null;
}

function getFeatureStyle(feature: LicenseFeature, selectedId?: string) {
  const isIsseksi =
    feature.properties.licenseId === licenseMapConfig.isseksiLicenseId;
  const isSelected = selectedId === feature.properties.licenseId;

  return {
    color: isSelected
      ? licenseStyleColors.selectedStroke
      : isIsseksi
        ? licenseStyleColors.isseksiStroke
        : licenseStyleColors.portfolioStroke,
    weight: isSelected ? 3 : isIsseksi ? 2.5 : 1.5,
    fillColor: isIsseksi
      ? licenseStyleColors.isseksiFill
      : licenseStyleColors.portfolioFill,
    fillOpacity: isSelected ? 0.55 : isIsseksi ? 0.42 : 0.25
  };
}

export default function EvidenceMap() {
  const { t, direction } = useTranslation();

  const [features, setFeatures] = useState<LicenseFeature[]>([]);
  const [selectedFeature, setSelectedFeature] =
    useState<LicenseFeature | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const selectedId = selectedFeature?.properties.licenseId;

  useEffect(() => {
    let cancelled = false;

    async function loadGeojson() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(licenseMapConfig.geojsonUrl);

        if (!response.ok) {
          throw new Error("Failed to load GeoJSON");
        }

        const data = (await response.json()) as LicenseFeatureCollection;

        if (!cancelled) {
          setFeatures(data.features || []);

          const isseksi = data.features.find(
            (feature) =>
              feature.properties.licenseId ===
              licenseMapConfig.isseksiLicenseId
          );

          if (isseksi) {
            setSelectedFeature(isseksi);
          }
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadGeojson();

    return () => {
      cancelled = true;
    };
  }, []);

  const collection = useMemo(
    () => ({
      type: "FeatureCollection" as const,
      features
    }),
    [features]
  );

  const onEachFeature = (feature: LicenseFeature, layer: Layer) => {
    layer.bindTooltip(feature.properties.licenseId, {
      sticky: true,
      direction: "top",
      className: "license-tooltip"
    });

    layer.on({
      click: () => {
        setSelectedFeature(feature);
      },
      mouseover: (event) => {
        const target = event.target;
        target.setStyle({
          weight: 3,
          fillOpacity: 0.5
        });
      },
      mouseout: (event) => {
        const target = event.target;
        target.setStyle(getFeatureStyle(feature, selectedId));
      }
    });
  };

  if (loading) {
    return <div className="map-state">{t("evidence.loading")}</div>;
  }

  if (error) {
    return <div className="map-state map-state-error">{t("evidence.error")}</div>;
  }

  return (
    <div className="evidence-map-grid" dir={direction}>
      <div className="evidence-map-card">
        <MapContainer
          center={[
            licenseMapConfig.defaultCenter.latitude,
            licenseMapConfig.defaultCenter.longitude
          ]}
          zoom={licenseMapConfig.defaultZoom}
          scrollWheelZoom={false}
          className="license-map"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <GeoJSON
            key={selectedId || "licenses"}
            data={collection}
            style={(feature) =>
              getFeatureStyle(feature as LicenseFeature, selectedId)
            }
            onEachFeature={(feature, layer) =>
              onEachFeature(feature as LicenseFeature, layer)
            }
          />

          <FitBounds features={features} />
        </MapContainer>
      </div>

      <LicenseSidePanel
        selectedFeature={selectedFeature}
        onOpenPdf={(url) => setPdfUrl(url)}
      />

      <PdfViewerModal
        isOpen={Boolean(pdfUrl)}
        pdfUrl={pdfUrl}
        title={selectedFeature?.properties.siteName}
        onClose={() => setPdfUrl(null)}
      />
    </div>
  );
}
