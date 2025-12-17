import { useEffect, useState } from "react";
import { fetchCrowdEntries } from "../../api/entries.api";
import "./entries.css";

const PAGE_SIZE = 10;

const EntriesTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadEntries = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetchCrowdEntries(page, PAGE_SIZE);

      setData(res.data || []);
      setTotalPages(res.totalPages || 1);
    } catch {
      setError("Failed to load entries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEntries();
  }, [page]);

  return (
    <div className="entries-card">
      {loading && <p>Loading entries...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <table className="entries-table">
            <thead>
              <tr>
                <th>Visitor Name</th>
                <th>Gender</th>
                <th>Entry Time</th>
                <th>Exit Time</th>
                <th>Dwell Time</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.visitorName}</td>
                  <td>
                    <span className={`gender ${row.gender?.toLowerCase()}`}>
                      {row.gender}
                    </span>
                  </td>
                  <td>{row.entryTime}</td>
                  <td>{row.exitTime}</td>
                  <td>{row.dwellTime}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Prev
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EntriesTable;
