import { Hero, Section } from "@/components/page";

export default function BlogPost({params}:{params:{slug:string}}){return <main><Hero title={params.slug.replace(/-/g," ")} subtitle="Mission-aligned technology insight"/><Section title="Article"><p>This is a placeholder for CMS-backed TipTap content rendered from Supabase.</p></Section></main>}
