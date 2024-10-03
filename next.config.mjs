/** @type {import("next").NextConfig} */
const nextConfig = {
 images: {
  dangerouslyAllowSVG: true,
  remotePatterns: [
   { hostname: "api.dicebear.com" }
  ]
 }
};

export default nextConfig;
