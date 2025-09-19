"use client";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const SEOProvider = () => {
  return <DefaultSeo {...SEO} />;
};
export default SEOProvider;
