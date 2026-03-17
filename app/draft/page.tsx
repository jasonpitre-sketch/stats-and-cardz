import Link from "next/link"
import { players } from "@/data/players"

export default function DraftPage() {

  const draftPlayers = [...players].sort((a, b) => a.rank - b.rank)

  return (
    <div style={{ padding: "40px" }}>

      <h1>MLB Draft Tracker</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px"
        }}
      >
        <thead>
          <tr>
            <th>Pick</th>
            <th>Team</th>
            <th>Player</th>
            <th>Age</th>
            <th>Position</th>
            <th>School</th>
            <th>Talent</th>
          </tr>
        </thead>

        <tbody>

          {draftPlayers.map((player) => (

            <tr key={player.slug} style={{ borderBottom: "1px solid #ddd" }}>

              <td>{player.rank}</td>

              <td>{player.team}</td>

              <td>
                <Link href={`/player/${player.slug}`}>
                  {player.name}
                </Link>
              </td>

              <td>{player.age}</td>

              <td>{player.position}</td>

              <td>{player.school}</td>

              <td>{player.talent}</td>

            </tr>

          ))}

        </tbody>
      </table>

    </div>
  )
}