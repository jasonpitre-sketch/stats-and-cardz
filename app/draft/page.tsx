import Link from "next/link"
import { players } from "@/data/players"

export default function DraftPage() {
  return (
    <div>
      <h1>MLB Draft Tracker</h1>

      <table>
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
          {players.map((player, index) => (
            <tr key={player.slug}>
              <td>{index + 1}</td>
              <td>{player.team || "-"}</td>

              <td>
                <Link href={`/player/${player.slug}`}>
                  {player.name}
                </Link>
              </td>

              <td>{player.age}</td>
              <td>{player.position}</td>
              <td>{player.school}</td>
              <td>{player.talent || "Elite"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}