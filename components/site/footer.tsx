export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d1a]/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} YK Project Lab. Product-grade final year project engineering.</p>
        <p className="rounded-full border border-blue-300/20 bg-blue-500/15 px-4 py-1.5 text-blue-100">WhatsApp: +94 72 238 2901</p>
      </div>
    </footer>
  );
}
