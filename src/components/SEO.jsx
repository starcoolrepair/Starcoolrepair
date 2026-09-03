import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { businessData } from "../data/businessData";

export default function SEO({ title, description, schemaData }) {
  const location = useLocation();
  const canonicalUrl = `${businessData.website}${location.pathname}`;

  useEffect(() => {
    // Set Title
    document.title = title || `${businessData.name} | ${businessData.tagline}`;

    // Set Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content =
      description ||
      "Professional doorstep AC, Washing Machine, Refrigerator, and Microwave repair across Navi Mumbai. ₹149 visit & inspection charge. 6+ years experience.";

    // Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Set Open Graph tags
    const ogTags = [
      { property: "og:title", content: title || businessData.name },
      { property: "og:description", content: metaDesc.content },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: businessData.name },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Handle Page-specific JSON-LD Schema
    let scriptTag = document.getElementById("page-structured-data");
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "page-structured-data";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalUrl, schemaData]);

  return null;
}
