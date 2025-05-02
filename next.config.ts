import type { NextConfig } from "next";
import type { RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"], // Add MDX support
// });

module.exports = withMDX({
  webpack(config: NextConfig) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"], // Add MDX support
});
