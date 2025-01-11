import { Document, Packer, Paragraph, TextRun } from "docx";

// Generate Declaration Document with Exact Formatting
export const generateDeclarationDocx = (formData) => {
  const { NN, CNAME, CANO } = formData;

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440, // 1 inch
              bottom: 1440, // 1 inch
              left: 1440, // 1 inch
              right: 1440, // 1 inch
            },
          },
        },
        children: [
          // Title
          new Paragraph({
            children: [
              new TextRun({
                text: "DECLARATION CUM UNDERTAKING FOR NET METERING CONNECTION FOR RENEWABLE ENERGY",
                bold: true,
                size: 28, // 14pt font size
              }),
            ],
            alignment: "center",
            spacing: { after: 300 },
          }),

          // Application Form Number
          new Paragraph({
            children: [
              new TextRun({ text: "Application Form Number ", bold: true }),
              new TextRun({ text: NN || "{{NN}}" }),
            ],
            spacing: { after: 200 },
          }),

          // Consumer Name
          new Paragraph({
            children: [
              new TextRun({
                text: "I/We (company/partnership firm/proprietor) ",
                bold: true,
              }),
              new TextRun({ text: CNAME || "{{CNAME}}" }),
            ],
            spacing: { after: 200 },
          }),

          // Electricity Connection CA No
          new Paragraph({
            children: [
              new TextRun({ text: "having electricity connection CA No ", bold: true }),
              new TextRun({ text: CANO || "{{CANO}}" }),
              new TextRun({
                text: " as registered consumer of TPDDL at (Address of premises as per Tata Power Delhi Distribution Limited’s record) do hereby solemnly affirm and declare/undertake as under:",
              }),
            ],
            spacing: { after: 300 },
          }),

          // Numbered List
          ...createNumberedList([
            "That I/We have requested Tata Power Delhi Distribution Limited, (hereinafter referred to as TPDDL) to provide net meter connectivity at the abovementioned premises in my name.",
            "I/We am/are the owner of / co-owner of / legal heir/lawful occupant of aforesaid premises and have due authority and permission to use aforesaid premises (Herein after referred to as the “Premises”) to install the renewable energy system.",
            "I/We have submitted the application to install the renewable Energy system at above mentioned premises. The NOC from the other co–owner / Will or Succession certificate in proof of legal heirship /proof of lawful occupancy is enclosed with the application form. (Please delete if not applicable).",
            "I/We undertake that ownership/lawful possession of the roof/land where solar PV system is to be installed lies with me and I am responsible for any objection raised by the residents living vertically below the said property/premises.",
            "I/We understand that once this application is approved, the same is valid for 30 days.",
            "I/We agree to pay the application fee Rs. 500/-(Rupee five Hundred) along with this application, as per the Guidelines under (Net Metering for Renewable Energy) Regulations, 2014.",
            "I/We am/are aware of my right to exercise option as provided in clause 3 (4) (a) of Guidelines under DERC (Net Metering for Renewable Energy) Regulations, 2014. I/we agree that on feasibility analysis, if it is found feasible for TPDDL to provide connectivity for the applied capacity or a reduced capacity under clause 3(4)(a) of Guidelines under DERC (Net Metering for Renewable Energy) Regulations, 2014, I will submit the registration form along with requisite fee, SLD charges, meter cost and all other documents required by TPDDL for further processing.",
            "I/we have complied with all requirements under all statute and applicable laws for the time being in force and I shall be held responsible and legally liable for any issue arising out of any such noncompliance.",
            "I/We have all the applicable/requisite documents and can be inspected by TPDDL at any time.",
            "I/We shall provide a legible and certified copy of any of applicable/requisite documents to TPDDL pursuant to order/request of any government agency, judicial forum or any other authority seeking such information.",
            "My/Our industry/trade has not been declared to be releasing obnoxious hazardous/pollutant by any government agency and that no orders of any Court or judicial authority would be breached by running of my industry/trade in the premises wherein net metering connectivity is applied. TPDDL shall be indemnified against any loss accrued by me on this account.",
            "I/We shall indemnify TPDDL against all proceedings, claims, demands, costs, damages, expenses that TPDDL may incur by reason of a Renewable Energy System installed at my premises.",
            "I/We shall indemnify and hold harmless TPDDL, in case of occurrence of any untoward incident or injury caused on account of any fault in electrical work in the premises, and TPDDL shall not be liable for any mishap or incident occurring at the premises to the applicant on account of any faulty/defective/inferior quality wiring or due to noncompliance of safety laws and regulations, at the premises for which the net meter is being applied.",
            "I/We shall abide by all the provisions of the Electricity Act, 2003, all applicable laws, conditions of Supply/Tariff Orders and any other Rules or Regulations as may be notified by the Delhi Electricity Regulatory Commission, and as applicable from time to time.",
            "I/We agree that TPDDL has permission to access the Renewable energy system installed at my/our premises for assessment of connection requirement to TPDDL Distribution System during anytime of Project life.",
            "I/We agree that I/We shall provide requisite space to TPDDL for installation of Net Meter and Solar Meter as per their requirement and TPDDL will have un-encumbered access to these meters installed at my/our premises failing which electricity supply to my/our premises can be disconnected.",
            "I/We undertake that the Renewable energy system installed at my/our premises will be technically suitable for synchronization with TPDDL supply voltage level at my premises (1-Phase/3-Phase) and rated Frequency (50 hz +-5%), in compliance to Delhi Electricity Regulatory Commission (Net Metering for Renewable Energy) Regulations, 2014.",
            "I/We clearly understand that the capacity of Renewable energy system installed at my/our premises is as per the feasibility ascertained by TPDDL and I/we undertake not to carry out any alteration/modification to the capacity of Renewable energy system connected with net metering.",
            "I/We have clearly understood that if any of the above statement is found to be false or incorrect or on receipt of any objection from the concerned competent land owning/Law enforcing agency or co-owner of the premises, or in the event of any default, noncompliance of statutory provisions and in the event of a legally binding directive by Statutory Authority(ies) to effect such an order, the Net metering system can be disconnected and the meter/service line can be removed by TPDDL without any further notice to me.",
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
      children: [
        new TextRun({
          text: `${index + 1}. `,
          bold: true,
        }),
        new TextRun({
          text,
        }),
      ],
      spacing: { after: 200 },
      indent: { left: 720 }, // Indent numbered items
    });
  });
}; 
