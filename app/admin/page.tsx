import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { LeadsTable } from "@/components/site/leads-table";

export const metadata: Metadata = {
  title: "Admin | Leads Dashboard",
  description: "Review submitted leads from Firebase Firestore.",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen text-zinc-100">
      <Navbar />
      <main className="section-shell py-16 md:py-20">
        <div className="soft-panel p-6 md:p-10">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Admin Dashboard</h1>
          <p className="mt-3 text-zinc-300">Submitted leads from Firestore are listed below.</p>
          <div className="mt-8">
            <LeadsTable />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
