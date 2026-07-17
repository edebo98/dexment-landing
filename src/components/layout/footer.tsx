import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Budget control", href: "#benefits" },
      { label: "Documents & approvals", href: "#benefits" },
      { label: "Progress visibility", href: "#benefits" },
      { label: "How it works", href: "#how-it-works" },
    ],
  },
  {
    title: "Who it's for",
    links: [
      { label: "Homeowners", href: "#who-its-for" },
      { label: "Contractors", href: "#who-its-for" },
      { label: "Developers", href: "#who-its-for" },
      { label: "Project teams", href: "#who-its-for" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Join the waitlist", href: "#waitlist" },
      { label: "Contact", href: "mailto:hello@dexment.com" },
    ],
  },
];

const social = [
  { label: "LinkedIn", href: "#" },
  { label: "X (Twitter)", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-950/8 bg-paper-soft dark:border-white/10 dark:bg-ink-950">
      <Container className="flex flex-col gap-16 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4">
            <Logo />
            <p className="max-w-[32ch] text-[0.9375rem] leading-relaxed text-ink-500 dark:text-ink-400">
              The construction intelligence platform for building with confidence.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-[0.8125rem] font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.9375rem] text-ink-600 transition-colors hover:text-ink-950 dark:text-ink-300 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 border-t border-ink-950/8 pt-8 md:flex-row dark:border-white/10">
          <p className="text-sm text-ink-500 dark:text-ink-500">
            &copy; {new Date().getFullYear()} Dexment. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm text-ink-500 transition-colors hover:text-ink-950 dark:hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
