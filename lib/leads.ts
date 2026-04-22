import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { LeadInput, LeadRecord } from "@/types/lead";

export async function submitLead(input: LeadInput) {
  await addDoc(collection(db, "leads"), {
    ...input,
    createdAt: serverTimestamp(),
  });
}

export async function getLeads(): Promise<LeadRecord[]> {
  const ref = query(collection(db, "leads"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(ref);

  return snapshot.docs.map((doc) => {
    const data = doc.data() as Record<string, unknown> & { createdAt?: { toDate?: () => Date } };
    return {
      id: doc.id,
      name: String(data.name ?? ""),
      whatsapp: String(data.whatsapp ?? ""),
      projectType: String(data.projectType ?? ""),
      description: String(data.description ?? ""),
      createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toLocaleString() : "-",
    } as LeadRecord;
  });
}
