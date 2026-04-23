"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/leads";
import { projectTypes } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ProjectType } from "@/types/lead";

const initialState = {
  name: "",
  whatsapp: "",
  projectType: "Business Website" as ProjectType,
  description: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await submitLead(form);
      setForm(initialState);
      setMessage("Thanks. Your request has been submitted and I will reach out on WhatsApp soon.");
    } catch {
      setMessage("Submission failed. Please verify Firebase config and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mesh-border space-y-5 rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-6 md:p-8">
      <div className="space-y-2">
        <label className="text-sm uppercase tracking-[0.08em] text-[color:var(--text-muted)]">Name</label>
        <Input
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm uppercase tracking-[0.08em] text-[color:var(--text-muted)]">WhatsApp Number</label>
        <Input
          required
          value={form.whatsapp}
          onChange={(event) => setForm((prev) => ({ ...prev, whatsapp: event.target.value }))}
          placeholder="e.g. 9477xxxxxxx"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm uppercase tracking-[0.08em] text-[color:var(--text-muted)]">Service Needed</label>
        <select
          className="h-11 w-full rounded-xl border border-[color:var(--line)] bg-[#121836] px-3 text-sm text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/70"
          value={form.projectType}
          onChange={(event) => setForm((prev) => ({ ...prev, projectType: event.target.value as ProjectType }))}
        >
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-[#121836]">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm uppercase tracking-[0.08em] text-[color:var(--text-muted)]">Description</label>
        <Textarea
          required
          value={form.description}
          onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
          placeholder="Tell me your scope, deadline, and expected outcomes"
        />
      </div>

      <Button type="submit" className="cut-button w-full" disabled={loading}>
        {loading ? "Submitting..." : "Submit Request"}
      </Button>

      {message && <p className="text-sm text-[color:var(--accent)]">{message}</p>}
    </form>
  );
}
