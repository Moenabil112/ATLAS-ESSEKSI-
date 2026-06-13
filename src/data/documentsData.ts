export type DocumentFamilyId = "meeting" | "transaction" | "governance";

export type DocumentCard = {
  id: string;
  titleKey: string;
  purposeKey: string;
  family: DocumentFamilyId;
  statusKey: string;
  accessKey: string;
};

export type DocumentFamily = {
  id: DocumentFamilyId;
  titleKey: string;
  documents: DocumentCard[];
};

export const documentFamilies: DocumentFamily[] = [
  {
    id: "meeting",
    titleKey: "docFamily.meeting",
    documents: [
      {
        id: "executiveOffer",
        titleKey: "doc.executiveOffer",
        purposeKey: "docPurpose.executiveOffer",
        family: "meeting",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      },
      {
        id: "meetingPack",
        titleKey: "doc.meetingPack",
        purposeKey: "docPurpose.meetingPack",
        family: "meeting",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      },
      {
        id: "investorQA",
        titleKey: "doc.investorQA",
        purposeKey: "docPurpose.investorQA",
        family: "meeting",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      }
    ]
  },
  {
    id: "transaction",
    titleKey: "docFamily.transaction",
    documents: [
      {
        id: "loi",
        titleKey: "doc.loi",
        purposeKey: "docPurpose.loi",
        family: "transaction",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      },
      {
        id: "termSheet",
        titleKey: "doc.termSheet",
        purposeKey: "docPurpose.termSheet",
        family: "transaction",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      },
      {
        id: "paymentProtocol",
        titleKey: "doc.paymentProtocol",
        purposeKey: "docPurpose.paymentProtocol",
        family: "transaction",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      },
      {
        id: "shaOutline",
        titleKey: "doc.shaOutline",
        purposeKey: "docPurpose.shaOutline",
        family: "transaction",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      }
    ]
  },
  {
    id: "governance",
    titleKey: "docFamily.governance",
    documents: [
      {
        id: "quarterlyTemplate",
        titleKey: "doc.quarterlyTemplate",
        purposeKey: "docPurpose.quarterlyTemplate",
        family: "governance",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      },
      {
        id: "dataRoomIndex",
        titleKey: "doc.dataRoomIndex",
        purposeKey: "docPurpose.dataRoomIndex",
        family: "governance",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      },
      {
        id: "boardMemo",
        titleKey: "doc.boardMemo",
        purposeKey: "docPurpose.boardMemo",
        family: "governance",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      },
      {
        id: "governanceNote",
        titleKey: "doc.governanceNote",
        purposeKey: "docPurpose.governanceNote",
        family: "governance",
        statusKey: "documents.status.toPrepare",
        accessKey: "documents.access.controlled"
      }
    ]
  }
];
