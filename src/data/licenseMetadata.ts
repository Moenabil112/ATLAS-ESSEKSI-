export type LicenseAccessLevel = "Controlled" | "Internal" | "Restricted";

export type LicenseFeatureProperties = {
  licenseId: string;
  siteName: string;
  licenseType: string;
  role: string;
  status: string;
  accessLevel: LicenseAccessLevel | string;
  sourceFile?: string;
  parentPermit?: string;
  areaKm2?: number;
  validFrom?: string;
  validTo?: string;
  company?: string;
  pdfUrl?: string;
  sourceCRS?: string;
  notes?: string;
  relatedAnchor?: string;
};

export type LicenseFeature = GeoJSON.Feature<
  GeoJSON.Geometry,
  LicenseFeatureProperties
>;

export type LicenseFeatureCollection = GeoJSON.FeatureCollection<
  GeoJSON.Geometry,
  LicenseFeatureProperties
>;

export const licenseMapConfig = {
  geojsonUrl: "/data/atlas-licenses.geojson",
  isseksiLicenseId: "LE 353294",
  isseksiPdfUrl: "/licenses/isseksi-exploitation-license.pdf",
  defaultCenter: {
    latitude: 32.201925,
    longitude: -6.254217
  },
  defaultZoom: 9
};

export const licenseStyleColors = {
  isseksiFill: "#B87333",
  isseksiStroke: "#D4924A",
  portfolioFill: "#2E4A3E",
  portfolioStroke: "#4A3728",
  selectedStroke: "#F0EDE8"
};
