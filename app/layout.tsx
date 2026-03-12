import "./globals.css";

export const metadata = {
  title: "Vision3 Business Concepts",
  description: "business.vision3.ai 비즈니스 페이지 시안 1~7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-neutral-950 text-white antialiased">{children}</body>
    </html>
  );
}