import Link from "next/link"
import { players } from "@/data/player"

export default function DraftPage() {

  function getTalent(age: number) {
    if (age <= 18) return "Raw"
    if (age <= 20) return "Developing"
    if (age <= 21) return "Advanced"
    return "Elite"
  }

  function talentColor(talent: string) {
    if (talent === "Raw") return "#777"
    if (talent === "Developing") return "#2d7ef7"
    if (talent === "Advanced") return "#ff8c00"
    if (talent === "Elite") return "#c9a227"
    return "#999"
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Draft Tracker</h1>

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

          {players.map((player) => {

            const talent = getTalent(player.age)

            return (
              <tr
                key={player.slug}
                style={{
                  borderBottom: "1px solid #ddd"
                }}
                className="draft-row"
              >

                <td style={{ padding: "10px" }}>
                  {player.rank}
                </td>

                <td style={{ padding: "10px" }}>
                  <img
                    src={`/${player.slug}.jpg`}
                    alt={player.name}
                    width={40}
                    height={40}
                    style={{ borderRadius: "6px" }}
                  />
                </td>

                <td style={{ padding: "10px", fontWeight: "600" }}>
                  <Link href={`/player/${player.slug}`}>
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

                <td style={{ padding: "10px" }}>
                  <span
                    style={{
                      background: talentColor(talent),
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "600"
                    }}
                  >
                    {talent}
                  </span>
                </td>

              </tr>
            )

          })}

        </tbody>

      </table>

    </div>
  )
}