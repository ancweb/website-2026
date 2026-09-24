import "./globals.css";

export const metadata = {
  verification: {
    google: "pXhPc7pZ99SO53K8YiQeaL6IRPYAAg18wZxNZdYickE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}