import Link from "next/link";
import { siteConfig } from "@/lib/site";

const services = [
  ["Workflow Automation", "/services/automation"],
  ["Custom Apps & Websites", "/services/custom-apps"],
  ["AI Training & Workshops", "/services/ai-training"],
  ["vCIO Services", "/services/vcio"]
] as const;

const organizations = [
  ["Churches & Houses of Worship", "/industries/churches"],
  ["Nonprofits & Associations", "/industries/nonprofits"],
  ["Faith-Based Businesses", "/industries/faith-business"]
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-bold text-blue-700">
          Digital Missions Project
        </Link>
        <div className="hidden items-center gap-5 text-sm md:flex">
          {services.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          {organizations.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          <Link href="/our-process">Our Process</Link>
          <Link href="/results">Results</Link>
          <Link href="/grants">Grants</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="rounded-lg bg-blue-600 px-4 py-2 text-white">Schedule a Call</Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-200">
      <div className="section grid gap-8 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold">Digital Missions Project</p>
          <p className="mt-2 text-sm">Empowering mission-driven organizations with accessible technology.</p>
          <p className="mt-2 text-sm">A division of Foundation Stone Advisors</p>
          <p className="mt-3 text-sm">{siteConfig.phone}<br />{siteConfig.email}</p>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          {services.map(([label, href]) => <Link key={href} href={href} className="mt-2 block text-sm">{label}</Link>)}
        </div>
        <div>
          <p className="font-semibold">Organizations</p>
          {organizations.map(([label, href]) => <Link key={href} href={href} className="mt-2 block text-sm">{label}</Link>)}
          <Link href="/grants" className="mt-2 block text-sm">Grant Application</Link>
        </div>
        <div>
          <p className="font-semibold">Company</p>
          {[["Our Process","/our-process"],["About","/about"],["Results","/results"],["Blog","/blog"],["Contact","/contact"]].map(([label,href]) => (
            <Link key={href} href={href} className="mt-2 block text-sm">{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function CTA({ title }: { title: string }) {
  return (
    <section className="section">
      <div className="rounded-2xl bg-gradient-to-r from-navy-900 via-blue-700 to-navy-900 p-8 text-center text-white">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-3">Free discovery call · No obligation · Discounted rates for all partner organizations</p>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-lg bg-white px-5 py-2 font-semibold text-blue-700">Schedule Your Discovery Call</Link>
          <a href={`tel:${siteConfig.phone}`} className="rounded-lg border border-white px-5 py-2">Or call {siteConfig.phone}</a>
        </div>
      </div>
    </section>
  );
}
