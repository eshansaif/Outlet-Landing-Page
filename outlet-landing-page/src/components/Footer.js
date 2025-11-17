import Image from "next/image";

const navigation = [
  { label: "About Outlet Expense", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
];

const compliance = ["SOC 2", "ISO 27001", "PCI-DSS"];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61555243875890",
    icon: (
      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.402.597 24 1.325 24H12.82V14.692H9.69V11.14h3.13V8.412c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.465.099 2.798.143v3.24H17.42c-1.763 0-2.104.838-2.104 2.065v2.712h4.208l-.548 3.552h-3.66V24h7.16c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.402 0 22.675 0z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/outlet-expense/",
    icon: (
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.23c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.23h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.87-1.17 2.2-1.5 3.5-1.5 2.49 0 4.5 2.01 4.5 4.5v5.5z" />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.977.24 2.438.512.54.312.918.73 1.33 1.33.272.462.456 1.268.512 2.438.058 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.977-.512 2.438-.312.54-.73.918-1.33 1.33-.462.272-1.268.456-2.438.512-1.267.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.977-.24-2.438-.512-.54-.312-.918-.73-1.33-1.33-.272-.462-.456-1.268-.512-2.438-.058-1.267-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.977.512-2.438.312-.54.73-.918 1.33-1.33.462-.272 1.268-.456 2.438-.512 1.267-.058 1.646-.07 4.85-.07z" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#010617] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(20,184,166,0.15),_rgba(1,6,23,0))]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:px-0">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm space-y-4">
            <Image
              src="/Final-logo.png"
              alt="Outlet Expense"
              height={50}
              width={180}
              className="rounded-xl bg-white p-2"
            />
            <p className="text-sm text-white/70">
              The control tower for modern POS teams. Unify inventory, payments,
              and fulfillment across every touchpoint with proactive automation.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-white/60">
              {compliance.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-wrap gap-10 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Platform
              </p>
              <ul className="mt-4 space-y-3 text-white/80">
                {navigation.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/privacy" className="transition hover:text-white">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Contact
              </p>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>
                  <span className="text-white/60">Email</span>
                  <p className="text-white">squadinnovators@gmail.com</p>
                </li>
                <li>
                  <span className="text-white/60">Phone</span>
                  <p className="text-white">+880 1677-182084</p>
                </li>
                <li>
                  <span className="text-white/60">Support</span>
                  <p className="text-white">Mon–Fri, 9am–6pm BST</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Social
              </p>
              <div className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/40 hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-6 text-center text-xs text-white/60 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Squad Innovators. All rights reserved.
          </p>
          <p>Built for retail teams chasing the future of POS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
