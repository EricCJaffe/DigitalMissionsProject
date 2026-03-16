import Link from "next/link";
import { Hero, Section } from "@/components/page";

const posts=[{slug:"ai-in-ministry",title:"AI in Ministry: Where to Start",excerpt:"A practical guide for ministry teams."},{slug:"nonprofit-automation",title:"Automation for Nonprofit Reporting",excerpt:"Reduce reporting time while improving compliance."}];

export default function BlogPage(){return <main><Hero title="Digital Missions Blog" subtitle="Technology insights for churches, nonprofits, and mission-driven teams."/><Section title="Latest Posts"><div className="grid gap-4 md:grid-cols-2">{posts.map(p=><article className="card" key={p.slug}><h3 className="text-xl font-semibold">{p.title}</h3><p className="mt-2">{p.excerpt}</p><Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-primary-700">Read more →</Link></article>)}</div></Section></main>}
