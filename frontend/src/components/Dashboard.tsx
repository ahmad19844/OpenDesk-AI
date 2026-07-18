import { useEffect, useState } from "react";
import StatusCard from "./StatusCard";
import { getSystemInfo } from "../services/systemService";
import type { SystemInfo } from "../types/system";

export default function Dashboard() {
  const [system, setSystem] = useState<SystemInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getSystemInfo();
        setSystem(data);
      } catch (err) {
        console.error(err);
        setError("Unable to connect to backend");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!system) {
    return <h2>No system information available.</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>OpenDesk AI</h1>

      <StatusCard title="Backend Status" value="🟢 Online" />
      <StatusCard title="Application" value={system.application} />
      <StatusCard title="Version" value={system.version} />
      <StatusCard title="Python" value={system.python} />
      <StatusCard title="Platform" value={system.platform} />
    </div>
  );
}
