import Link from "next/link"

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Stats & Cards</h1>
      <p>The future hub for baseball prospect investing.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <Link href="/draft">
          <div style={card}>
            <h2>Draft Tracker</h2>
            <p>Follow the latest MLB draft rankings and prospect profiles.</p>
          </div>
        </Link>

        <div style={card}>
          <h2>Hot Prospects</h2>
          <p>Players trending up across college and the minor leagues.</p>
        </div>

        <div style={card}>
          <h2>Minor League Breakouts</h2>
          <p>Top performing prospects moving toward the majors.</p>
        </div>

        <div style={card}>
          <h2>MLB Impact</h2>
          <p>Young MLB players affecting the sports card market.</p>
        </div>
      </div>
    </main>
  )
}

const card = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "25px",
  cursor: "pointer",
}