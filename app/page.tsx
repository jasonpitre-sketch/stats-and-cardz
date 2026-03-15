import Link from "next/link"

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        Stats & Cards
      </h1>

      <p style={{ marginBottom: "40px", color: "#666" }}>
        Track MLB prospects, draft rankings, and rising stars.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          maxWidth: "900px"
        }}
      >

        {/* Draft Tracker */}
        <Link href="/draft">
          <div style={boxStyle}>
            <h2>MLB Draft Tracker</h2>
            <p>Top 100 MLB draft prospects</p>
          </div>
        </Link>

        {/* Hot Prospects */}
        <div style={boxStyle}>
          <h2>Hot Prospects 🔥</h2>
          <p>Minor leaguers trending upward</p>
        </div>

        {/* Minor League Watch */}
        <div style={boxStyle}>
          <h2>Minor League Watch</h2>
          <p>Players climbing the farm system</p>
        </div>

        {/* MLB Breakouts */}
        <div style={boxStyle}>
          <h2>MLB Breakouts</h2>
          <p>Prospects now producing in MLB</p>
        </div>

      </div>
    </main>
  )
}

const boxStyle = {
  border: "1px solid #ddd",
  padding: "30px",
  borderRadius: "10px",
  background: "#fafafa",
  cursor: "pointer",
  transition: "0.2s",
}