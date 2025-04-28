"use client";
import { useEffect, useState } from "react";

export default function BackendEventLogViewer() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Poll backend for event logs every 2s
    let timer: NodeJS.Timeout;
    async function fetchLogs() {
      try {
        const res = await fetch("/api/backend-logs");
        if (res.ok) {
          const data = await res.json();
          setLogs(data.logs || []);
        }
      } catch (e) {
        setLogs(["[UI] Failed to fetch logs: " + (e as Error).message]);
      }
      timer = setTimeout(fetchLogs, 2000);
    }
    fetchLogs();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', background: '#161b22', color: '#fff', padding: 24, borderRadius: 8, fontFamily: 'monospace', minHeight: 320 }}>
      <h2>Backend Event Indexer Logs (Live)</h2>
      <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: 14, marginTop: 16 }}>
        {logs.length === 0 ? 'No logs yet.' : logs.join('\n')}
      </pre>
    </div>
  );
}
