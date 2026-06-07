/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Add this line
  images: {
    qualities: [75, 90],
    unoptimized: true, // Add this line for static export
  },
  devIndicators: false,
};

export default nextConfig;


