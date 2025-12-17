export const fetchCrowdEntries = async (page, limit) => {
  return {
    data: Array.from({ length: limit }).map((_, i) => ({
      visitorName: `Visitor ${(page - 1) * limit + i + 1}`,
      gender: i % 2 === 0 ? "Male" : "Female",
      entryTime: "10:00 AM",
      exitTime: "10:30 AM",
      dwellTime: "30 min",
    })),
    totalPages: 5,
  };
};
