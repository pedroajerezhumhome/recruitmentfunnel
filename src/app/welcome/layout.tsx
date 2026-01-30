import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to HUM | HUM Home",
  description:
    "Welcome to the HUM family. Complete your onboarding to get started with your Home Operating System.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
