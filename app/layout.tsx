import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{ fontFamily: "Arial", margin: 0 }}>

        <nav style={nav}>
          <Link href="/">Dashboard</Link>
          <Link href="/draft">Draft Tracker</Link>
          <Link href="/minors">Minor Leagues</Link>
          <Link href="/majors">Major Leagues</Link>
          <Link href="/player">Player Profiles</Link>
        </nav>

        <main style={{ padding: "30px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}

const nav = {
  display: "flex",
  gap: "30px",
  padding: "15px 30px",
  borderBottom: "1px solid #ddd",
  fontWeight: "bold",
  background: "#fafafa"
};
