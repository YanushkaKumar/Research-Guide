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
    return <p className="text-sm text-[color:var(--text-muted)]">Loading leads...</p>;
  }

  if (error) {
    return <p className="text-sm text-red-300/90">{error}</p>;
  }

  if (!leads.length) {
    return <p className="text-sm text-[color:var(--text-muted)]">No leads submitted yet.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-[color:var(--line)] bg-[#101631]">
      <table className="min-w-full text-left text-sm text-[color:var(--text-primary)]">
        <thead className="border-b border-[color:var(--line)] bg-[color:var(--accent-soft)] text-xs uppercase tracking-[0.09em] text-[color:var(--accent)]">
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
            <tr key={lead.id} className="border-b border-[color:var(--line)]/80 align-top last:border-b-0">
              <td className="px-4 py-3 text-[color:var(--text-muted)]">{lead.createdAt}</td>
              <td className="px-4 py-3">{lead.name}</td>
              <td className="px-4 py-3">{lead.whatsapp}</td>
              <td className="px-4 py-3">{lead.projectType}</td>
              <td className="px-4 py-3 text-[color:var(--text-muted)]">{lead.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
