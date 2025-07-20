// app/components/UsageMonitor.tsx
"use client";

import { useState, useEffect } from "react";

type Usage = {
  memory_usage: number;
  cpu_usage: number;
  requests: number;
};

export default function UsageMonitor() {
  const [usage, setUsage] = useState<Usage | null>(null);

  useEffect(() => {
    // Cloud Monitoringからメトリクス取得
    const fetchUsage = async () => {
      try {
        const response = await fetch("/api/usage");
        const data = await response.json();
        setUsage(data);
      } catch (error) {
        console.error("Failed to fetch usage:", error);
      }
    };

    fetchUsage();
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded">
      <h3 className="font-bold mb-2">今月の使用量</h3>
      {usage && (
        <div className="space-y-2">
          <div>メモリ: {usage.memory_usage}GiB秒 / 360,000GiB秒</div>
          <div>CPU: {usage.cpu_usage}vCPU秒 / 180,000vCPU秒</div>
          <div>リクエスト: {usage.requests} / 2,000,000</div>
        </div>
      )}
    </div>
  );
}
