import type { Metadata } from "next";

const baseUrl = "https://humhome.co";

export const metadata: Metadata = {
  title: "House Manager Services | Your Home on Autopilot | HUM Home",
  description:
    "A dedicated House Manager who runs your home end-to-end. Systems, staffing, resets, and support. No managing. No thinking.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "House Manager Services | Your Home on Autopilot | HUM Home",
    description:
      "A dedicated House Manager who runs your home end-to-end. Systems, staffing, resets, and support. No managing. No thinking.",
    siteName: "HUM Home",
    images: [
      {
        url: `${baseUrl}/hum-logo.jpg`,
        width: 1200,
        height: 630,
        alt: "HUM Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Manager Services | Your Home on Autopilot | HUM Home",
    description:
      "A dedicated House Manager who runs your home end-to-end. Systems, staffing, resets, and support. No managing. No thinking.",
    images: [`${baseUrl}/hum-logo.jpg`],
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
