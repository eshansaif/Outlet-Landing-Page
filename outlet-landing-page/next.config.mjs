import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization globally
  },
};

export default nextConfig;
