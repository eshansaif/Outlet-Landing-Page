import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: path.resolve(__dirname) },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "www.brothersmobilebd.com",
      "picsum.photos",
      "i.ibb.co.com",
      "www.fb.com",
      "www.youtube.com",
      "www.outletexpense.xyz",
      "taibamart.com",
      "www.perfectgadgetbd.com",
      "squadinnovators.com",
    ],
  },
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
