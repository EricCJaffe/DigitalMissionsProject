import { ReactNode } from "react";

export function Hero({ title, subtitle, actions }: { title: string; subtitle: string; actions?: ReactNode }) {
  return (
    <section className="bg-gradient-to-r from-navy-900 via-blue-700 to-navy-900 text-white">
      <div className="section py-20">
        <h1 className="max-w-4xl text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-4xl text-lg text-blue-100">{subtitle}</p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}

export function BadgeRow({ items }: { items: string[] }) {
  return (
    <div className="section py-8">
      <div className="grid gap-3 md:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="card text-center text-sm font-semibold">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section">
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function CardGrid({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="card">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-slate-700">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
