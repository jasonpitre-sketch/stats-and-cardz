import Link from "next/link"

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Baseball Prospect Tracker</h1>

      <p>Select a section:</p>

      <ul>
        <li>
          <Link href="/draft">Draft Tracker</Link>
        </li>

        <li>
          <Link href="/player">Player Profiles</Link>
        </li>

        <li>
          <Link href="/minors">Minor Leagues</Link>
        </li>

        <li>
          <Link href="/majors">Major Leagues</Link>
        </li>
      </ul>
    </div>
  )
}