import { useEffect, useState } from "react";
import { fetchSummaryMock } from "../../api/analytics.api";
import useSocket from "../../hooks/useSocket";
import "./dashboard.css";

const SummaryCards = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  useSocket((data) => {
    setAnimate(true);

    setSummary((prev) =>
      prev
        ? {
            ...prev,
            liveOccupancy: data.occupancy,
          }
        : prev
    );

    setLastUpdated(new Date().toLocaleTimeString());

    setTimeout(() => setAnimate(false), 300);
  });

  useEffect(() => {
    const loadSummary = async () => {
      try {
        setLoading(true);
        const res = await fetchSummaryMock();
        setSummary(res);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (err) {
        console.error("Summary API failed:", err);
      } finally {
        setLoading(false);
      }
    };

    loadSummary();
  }, []);

  useEffect(() => {
    if (!summary) return;

    const interval = setInterval(() => {
      setAnimate(true);

      setSummary((prev) => ({
        ...prev,
        liveOccupancy: prev.liveOccupancy + Math.floor(Math.random() * 5),
      }));

      setLastUpdated(new Date().toLocaleTimeString());

      setTimeout(() => setAnimate(false), 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [summary]);

  if (loading || !summary) {
    return <p>Loading summary...</p>;
  }

  const cards = [
    {
      title: "Live Occupancy",
      value: summary.liveOccupancy,
      change: summary.changes.occupancy,
      positive: true,
      live: true,
    },
    {
      title: "Today’s Footfall",
      value: summary.footfall,
      change: summary.changes.footfall,
      positive: false,
    },
    {
      title: "Avg Dwell Time",
      value: summary.avgDwellTime,
      change: summary.changes.dwell,
      positive: true,
    },
  ];

  return (
    <div className="summary-grid">
      {cards.map((card, idx) => (
        <div key={idx} className="summary-card">
          <p className="card-title">
            {card.title}
            {card.live && <span className="live-badge">LIVE</span>}
          </p>

          <h3 className={`card-value ${animate && card.live ? "flash" : ""}`}>
            {card.value}
          </h3>

          <p
            className={`card-change ${
              card.positive ? "positive" : "negative"
            }`}
          >
            {card.change} than yesterday
          </p>

          {card.live && (
            <p className="updated-time">
              Last updated: {lastUpdated || "—"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
