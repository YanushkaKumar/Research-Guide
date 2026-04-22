"use client";

import { useEffect, useState } from "react";
import { getLeads } from "@/lib/leads";
import type { LeadRecord } from "@/types/lead";

export function LeadsTable() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const result = await getLeads();
        setLeads(result);
      } catch {
        setError("Unable to load leads. Check Firebase configuration and Firestore rules.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return <p className="text-sm text-zinc-300">Loading leads...</p>;
  }

  if (error) {
    return <p className="text-sm text-red-300">{error}</p>;
  }

  if (!leads.length) {
    return <p className="text-sm text-zinc-300">No leads submitted yet.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#070f24]/80">
      <table className="min-w-full text-left text-sm text-zinc-200">
        <thead className="border-b border-white/10 bg-cyan-400/10 text-xs uppercase tracking-[0.09em] text-cyan-100">
          <tr>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">WhatsApp</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-white/5 align-top">
              <td className="px-4 py-3 text-zinc-400">{lead.createdAt}</td>
              <td className="px-4 py-3">{lead.name}</td>
              <td className="px-4 py-3">{lead.whatsapp}</td>
              <td className="px-4 py-3">{lead.projectType}</td>
              <td className="px-4 py-3 text-zinc-300">{lead.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
