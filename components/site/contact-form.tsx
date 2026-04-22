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
  projectType: "Machine Learning" as ProjectType,
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
      setMessage("Your request has been submitted. I will contact you on WhatsApp soon.");
    } catch {
      setMessage("Submission failed. Please verify Firebase config and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-[#070f24]/70 p-6 md:p-8">
      <div className="space-y-2">
        <label className="text-sm text-zinc-200">Name</label>
        <Input
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Your full name"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-zinc-200">WhatsApp Number</label>
        <Input
          required
          value={form.whatsapp}
          onChange={(event) => setForm((prev) => ({ ...prev, whatsapp: event.target.value }))}
          placeholder="e.g. 947xxxxxxxx"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-zinc-200">Project Type</label>
        <select
          className="h-11 w-full rounded-xl border border-white/15 bg-[#0a1228] px-3 text-sm text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          value={form.projectType}
          onChange={(event) => setForm((prev) => ({ ...prev, projectType: event.target.value as ProjectType }))}
        >
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-[#111827]">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-zinc-200">Description</label>
        <Textarea
          required
          value={form.description}
          onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
          placeholder="Tell me your project scope, deadline, and expected outcomes"
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Submit Request"}
      </Button>

      {message && <p className="text-sm text-cyan-100">{message}</p>}
    </form>
  );
}
