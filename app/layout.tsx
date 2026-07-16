import type { Metadata } from "next";
import "./globals.css";

const title = "이창섭 · CS Lee | Field Notes";
const description = "이창섭 · CS Lee — 인도 제조공장 설립과 운영, 해외 법인과 조직 관리 현장에서 배운 경험을 기록합니다.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cslee.net/"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description: "인도 제조공장 설립과 운영 현장에서 배운 경험을 실용적인 기록으로 나눕니다.", url: "/", siteName: "CS Lee Field Notes", locale: "ko_KR", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "이창섭 CS Lee — Field Notes from India Manufacturing" }] },
  twitter: { card: "summary_large_image", title, description: "인도 제조공장 설립과 운영 현장에서 배운 경험을 실용적인 기록으로 나눕니다.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
