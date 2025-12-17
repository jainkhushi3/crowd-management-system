import api from "./axios";

export const fetchDwellTime = async () => {
  const res = await api.post("/analytics/dwell");
  return res.data;
};

export const fetchFootfall = async () => {
  const res = await api.post("/analytics/footfall");
  return res.data;
};

export const fetchLiveOccupancy = async () => {
  const res = await api.post("/analytics/occupancy");
  return res.data;
};

export const fetchSummaryMock = async () => {
  return {
    liveOccupancy: 734,
    footfall: 2436,
    avgDwellTime: "08m 30s",
    changes: {
      occupancy: "+10%",
      footfall: "-10%",
      dwell: "+6%",
    },
  };
};

