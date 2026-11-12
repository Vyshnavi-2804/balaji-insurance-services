import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Balaji Financial & Insurance Services", template: "%s | Balaji Financial & Insurance Services" },
  description: "Personalised assistance for LIC life and term insurance, Star Health, Care Health and selected general insurance needs."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}