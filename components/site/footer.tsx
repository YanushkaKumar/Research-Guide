export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[#090c1b]">
      <div className="section-shell flex flex-col gap-4 py-10 text-xs uppercase tracking-[0.12em] text-[color:var(--text-muted)] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Quantum Build Lab - All Rights Reserved</p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/YanushkaKumar" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--accent)]">
            Github
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--accent)]">
            LinkedIn
          </a>
          <a href="mailto:yanushkakumar.work@gmail.com" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--accent)]">
            Email
          </a>
          <a href="https://wa.me/94722382901" target="_blank" rel="noreferrer" className="transition hover:text-[color:var(--accent)]">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
