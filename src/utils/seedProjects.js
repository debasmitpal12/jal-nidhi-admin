export const seedProjects = () => {
  if (!localStorage.getItem("myProjects")) {
    const sample = [
      {
        name: "Mangrove Restoration – Goa",
        location: "Panaji, Goa",
        area: 120,
        lat: 15.4909,
        lon: 73.8278,
        aiScore: 92,
        status: "Pending",
        verification: {
          imageCheck: "Pass",
          docsCheck: "Pass",
          anomalyCheck: "None",
          locationCheck: "Pass",
        },
      },
      {
        name: "Wetland Revival – Sundarbans",
        location: "Sundarbans, WB",
        area: 85,
        lat: 21.9497,
        lon: 88.83,
        aiScore: 81,
        status: "Approved",
        verification: {
          imageCheck: "Pass",
          docsCheck: "Pass",
          anomalyCheck: "Minor",
          locationCheck: "Pass",
        },
      },
      {
        name: "Coral Reef Recovery – Andaman",
        location: "Andaman Islands",
        area: 60,
        lat: 11.7401,
        lon: 92.6586,
        aiScore: 68,
        status: "Rejected",
        verification: {
          imageCheck: "Fail",
          docsCheck: "Pass",
          anomalyCheck: "High",
          locationCheck: "Fail",
        },
      },
    ];
    localStorage.setItem("myProjects", JSON.stringify(sample));
  }
};
