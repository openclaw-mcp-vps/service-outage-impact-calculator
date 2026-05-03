import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Service Outage Impact Calculator",
  description: "Calculate business impact of cloud service outages. Estimate revenue loss and SLA breach costs during cloud provider outages."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="95896886-5d99-4d2c-8561-a7858eae489b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
