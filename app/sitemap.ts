import type { MetadataRoute } from "next";

const routes=["","about","contact","our-process","results","grants","blog","services/automation","services/custom-apps","services/ai-training","services/vcio","industries/churches","industries/nonprofits","industries/faith-business"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route)=>({url:`https://digitalmissionsproject.org/${route}`,lastModified:new Date()}));
}
