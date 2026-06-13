import fs from "fs";
import path from "path";
import { DOMParser } from "@xmldom/xmldom";
import { kml } from "@tmcw/togeojson";

const inputPath = path.resolve("source-data/Permis ATLAS Mining.kml");
const outputPath = path.resolve("public/data/atlas-licenses.geojson");

const raw = fs.readFileSync(inputPath, "utf8");

// Some KML files may contain xsi:schemaLocation without a namespace declaration.
// Remove it to avoid XML parse issues.
const cleaned = raw.replace(/\s+xsi:schemaLocation="[^"]*"/g, "");

const doc = new DOMParser().parseFromString(cleaned, "text/xml");
const geojson = kml(doc);

const normalizedFeatures = geojson.features.map((feature) => {
  const rawName =
    feature.properties?.name ||
    feature.properties?.Name ||
    feature.properties?.NAME ||
    "Unknown";

  const licenseId = normalizeLicenseId(rawName);

  return {
    ...feature,
    properties: {
      licenseId,
      siteName: licenseId,
      licenseType: "Research Permit / Portfolio License",
      role:
        licenseId === "PR3538744"
          ? "Parent / Portfolio License"
          : "Portfolio License",
      status: "Portfolio Evidence",
      accessLevel: "Controlled",
      sourceFile: "Permis ATLAS Mining.kml",
      relatedAnchor: licenseId === "PR3538744" ? "LE 353294" : undefined
    }
  };
});

const isseksiFeature = {
  type: "Feature",
  properties: {
    licenseId: "LE 353294",
    siteName: "Isseksi",
    licenseType: "Exploitation License",
    parentPermit: "PR3538744",
    role: "Production Anchor",
    status: "Controlled Evidence",
    areaKm2: 15.36,
    validFrom: "2024-10-03",
    validTo: "2034-10-02",
    company: "SOUDAN IMPORT-EXPORT",
    pdfUrl: "/licenses/isseksi-exploitation-license.pdf",
    accessLevel: "Controlled",
    sourceFile: "Atlas Isseksi licence.pdf",
    sourceCRS: "Assumed EPSG:26191 / Merchich Nord Maroc",
    notes:
      "Approximate WGS84 conversion for controlled interactive evidence display; GIS review recommended."
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-6.279894, 32.223395],
        [-6.237453, 32.223692],
        [-6.23718, 32.194822],
        [-6.245655, 32.194764],
        [-6.245586, 32.187557],
        [-6.279536, 32.187318],
        [-6.279894, 32.223395]
      ]
    ]
  }
};

const output = {
  type: "FeatureCollection",
  name: "atlas-isseksi-license-portfolio",
  features: [...normalizedFeatures, isseksiFeature]
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`Created ${outputPath}`);
console.log(`Features: ${output.features.length}`);

function normalizeLicenseId(name) {
  return String(name).replace(/\s+/g, "").toUpperCase();
}
