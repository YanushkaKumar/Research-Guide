import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { LeadsTable } from "@/components/site/leads-table";

export const metadata: Metadata = {
  title: "Admin | Leads Dashboard",
  description: "Review and manage incoming project inquiries from Firebase Firestore.",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen text-[color:var(--text-primary)]">
      <Navbar />
      <main className="section-shell py-16 md:py-20">
        <div className="mesh-border rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 md:p-10">
          <p className="inline-flex rounded-full border border-[color:var(--line)] bg-[color:var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[color:var(--accent)]">
            Internal Dashboard
          </p>
          <h1 className="text-6xl leading-[0.9] md:text-7xl" style={{ fontFamily: "var(--font-display), serif" }}>
            Signal Console
          </h1>
          <p className="mt-3 text-[color:var(--text-muted)]">Submitted inquiries from Firestore are listed below.</p>
          <div className="mt-8">
            <LeadsTable />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
