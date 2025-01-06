import { Document, Packer, Paragraph, TextRun } from "docx";

export const generateDeclarationDocx = (formData) => {
  const { NN, CNAME, CANO } = formData;

  const doc = new Document({
    sections: [
      {
        children: [
          // Title
          new Paragraph({
            children: [
              new TextRun({
                text: "DECLARATION CUM UNDERTAKING FOR NET METERING CONNECTION FOR RENEWABLE ENERGY",
                bold: true,
                size: 28, // Match the font size exactly (14 pt)
              }),
            ],
            alignment: "center",
            spacing: { after: 300 },
          }),

          // Application Form Number
          new Paragraph({
            children: [
              new TextRun({ text: "Application Form Number: ", bold: true }),
              new TextRun({ text: NN || "{{NN}}" }),
            ],
            spacing: { after: 200 },
          }),

          // Consumer Name
          new Paragraph({
            children: [
              new TextRun({
                text: "I/We (company/partnership firm/proprietor): ",
                bold: true,
              }),
              new TextRun({ text: CNAME || "{{CNAME}}" }),
            ],
            spacing: { after: 200 },
          }),

          // Electricity Connection CA No
          new Paragraph({
            children: [
              new TextRun({
                text: "Electricity Connection CA No: ",
                bold: true,
              }),
              new TextRun({ text: CANO || "{{CANO}}" }),
            ],
            spacing: { after: 200 },
          }),

          // Introduction Paragraph
          new Paragraph({
            text: "As registered consumer of TPDDL at (Address of premises as per Tata Power Delhi Distribution Limited’s record), do hereby solemnly affirm and declare/undertake as under:",
            spacing: { after: 300 },
          }),

          // Numbered List Items
          ...createNumberedList([
            "That I/We have requested Tata Power Delhi Distribution Limited (hereinafter referred to as TPDDL) to provide net meter connectivity at the abovementioned premises in my name.",
            "I/We am/are the owner of / co-owner of / legal heir/lawful occupant of aforesaid premises and have due authority and permission to use aforesaid premises (Herein after referred to as the “Premises”) to install the renewable energy system.",
            "I/We have submitted the application to install the renewable Energy system at above mentioned premises. The NOC from the other co–owner / Will or Succession certificate in proof of legal heirship /proof of lawful occupancy is enclosed with the application form. (Please delete if not applicable).",
            "I/We undertake that ownership/lawful possession of the roof/land where solar PV system is to be installed lies with me and I am responsible for any objection raised by the residents living vertically below the said property/premises.",
            "I/We understand that once this application is approved, the same is valid for 30 days.",
            "I/We agree to pay the application fee Rs. 500/- (Rupee five Hundred) along with this application, as per the Guidelines under (Net Metering for Renewable Energy) Regulations, 2014.",
            "I/we have complied with all requirements under all statute and applicable laws for the time being in force and I shall be held responsible and legally liable for any issue arising out of any such noncompliance.",
            "I/We have all the applicable /requisite documents and can be inspected by TPDDL at any time.",
            "I/We shall indemnify TPDDL against all proceedings, claims, demands, costs, damages, expenses that TPDDL may incur by reason of a Renewable Energy System installed at my premises.",
            "I/We shall indemnify and hold harmless TPDDL in case of occurrence of any untoward incident or/and injury caused on account of any fault in electrical work in the premises.",
          ]),

          // Certified by Notary
          new Paragraph({
            text: "Certified by Notary",
            spacing: { before: 300, after: 200 },
          }),

          // Signature and Date
          new Paragraph({
            text: "Signature of Registered Consumer:",
            spacing: { after: 200 },
          }),
          new Paragraph({
            text: "Date:",
          }),
        ],
      },
    ],
  });

  return Packer.toBlob(doc);
};

// Helper function to create a numbered list
const createNumberedList = (items) => {
  return items.map((text, index) => {
    return new Paragraph({
      text: `${index + 1}. ${text}`,
      spacing: { after: 200 },
    });
  });
};
