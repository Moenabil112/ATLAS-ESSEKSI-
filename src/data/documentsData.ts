export type DocumentFamilyId = "meeting" | "transaction" | "governance";

export type DocumentCard = {
  id: string;
  titleKey: string;
  purposeKey: string;
  family: DocumentFamilyId;
  statusKey: string;
  accessKey: string;
  /** Branded PDF for in-room preview (served from /public/documents). */
  pdfUrl?: string;
  /** Original DOCX for download. */
  docxUrl?: string;
  /** Board-only material excluded from the partner distribution set. */
  internal?: boolean;
};

export type DocumentFamily = {
  id: DocumentFamilyId;
  titleKey: string;
  documents: DocumentCard[];
};

const controlled = "documents.status.controlled";
const toPrepare = "documents.status.toPrepare";
const access = "documents.access.controlled";

/** Helper for the partner-distribution documents that have real files. */
function filed(id: string, family: DocumentFamilyId): DocumentCard {
  return {
    id,
    titleKey: `doc.${id}`,
    purposeKey: `docPurpose.${id}`,
    family,
    statusKey: controlled,
    accessKey: access,
    pdfUrl: `/documents/${id}.pdf`,
    docxUrl: `/documents/${id}.docx`,
  };
}

export const documentFamilies: DocumentFamily[] = [
  {
    id: "meeting",
    titleKey: "docFamily.meeting",
    documents: [
      filed("executiveOffer", "meeting"),
      filed("meetingPack", "meeting"),
      filed("investorQA", "meeting"),
      filed("shortOfferStatement", "meeting"),
    ],
  },
  {
    id: "transaction",
    titleKey: "docFamily.transaction",
    documents: [
      filed("loi", "transaction"),
      filed("termSheet", "transaction"),
      filed("useOfFundsSchedule", "transaction"),
      filed("paymentProtocol", "transaction"),
      {
        id: "shaOutline",
        titleKey: "doc.shaOutline",
        purposeKey: "docPurpose.shaOutline",
        family: "transaction",
        statusKey: toPrepare,
        accessKey: access,
      },
    ],
  },
  {
    id: "governance",
    titleKey: "docFamily.governance",
    documents: [
      filed("governanceNote", "governance"),
      filed("quarterlyTemplate", "governance"),
      filed("dataRoomIndex", "governance"),
      {
        id: "boardMemo",
        titleKey: "doc.boardMemo",
        purposeKey: "docPurpose.boardMemo",
        family: "governance",
        statusKey: controlled,
        accessKey: access,
        internal: true,
      },
    ],
  },
];
