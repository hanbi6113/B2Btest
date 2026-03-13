// app/page.tsx
import Link from "next/link";

const concepts = [
  { id: 1, href: "/concept-1" },
  { id: 2, href: "/concept-2" },
  { id: 3, href: "/concept-3" },
  { id: 4, href: "/concept-4" },
  { id: 5, href: "/concept-5" },
  { id: 6, href: "/concept-6" },
  { id: 7, href: "/concept-7" },
  { id: 8, href: "/concept-8" },
  { id: 9, href: "/concept-9" },
  // { id: 10, href: "/concept-10" },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6">
      <div className="w-full max-w-2xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {concepts.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center text-lg font-medium text-white transition hover:border-white/25 hover:bg-white/10"
            >
              시안 {item.id}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}