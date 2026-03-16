import Link from "next/link"
import { players } from "@/data/player"

export default function DraftTable() {

  function getTalent(player: any) {
    // placeholder until scouting data connects
    if (player.age <= 18) return "Raw"
    if (player.age === 19 || player.age === 20) return "Developing"
    if (player.age === 21) return "Advanced"
    if (player.age >= 22) return "Elite"
    return "-"
  }

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>

      <thead style={{ background: "black", color: "white" }}>
        <tr>
          <th style={{ padding: "10px" }}>Pick</th>
          <th style={{ padding: "10px" }}>Photo</th>
          <th style={{ padding: "10px" }}>Player</th>
          <th style={{ padding: "10px" }}>Pos</th>
          <th style={{ padding: "10px" }}>Age</th>
          <th style={{ padding: "10px" }}>School</th>
          <th style={{ padding: "10px" }}>Talent</th>
        </tr>
      </thead>

      <tbody>

        {players.map((player) => (
         <tr key={player.slug} className="draft-row">

            <td style={{ padding: "10px" }}>
              {player.rank}
            </td>

            <td style={{ padding: "10px" }}>
              <img
                src={`/${player.slug}.jpg`}
                alt={player.name}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "6px",
                  objectFit: "cover"
                }}
              />
            </td>

            <td style={{ padding: "10px", fontWeight: "600" }}>
              <Link
                href={`/player/${player.slug}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer"
                }}
              >
                {player.name}
              </Link>
            </td>

            <td style={{ padding: "10px" }}>
              {player.position}
            </td>

            <td style={{ padding: "10px" }}>
              {player.age}
            </td>

            <td style={{ padding: "10px" }}>
              {player.school}
            </td>

            <td style={{ padding: "10px", fontWeight: "600" }}>
              {getTalent(player)}
            </td>

          </tr>
        ))}

      </tbody>

    </table>
  )
}