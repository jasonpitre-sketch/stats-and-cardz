import Link from "next/link"
import { players } from "@/data/players"

export default function MinorsPage() {

  const minorPlayers = players.filter(
    (p) => p.level === "A" || p.level === "AA" || p.level === "AAA"
  )

  return (
    <div>

      <h1>Minor League Players</h1>

      <select>
        <option>All Players</option>
        <option>Pitchers</option>
        <option>Infielders</option>
        <option>Outfielders</option>
        <option>Catchers</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Draft</th>
            <th>Age</th>
            <th>Pos</th>
            <th>Hand</th>
            <th>Team</th>

            <th>G</th>
            <th>AVG</th>
            <th>HR</th>
            <th>RBI</th>
            <th>OBP</th>
            <th>OPS</th>

            <th>ERA</th>
            <th>WHIP</th>
            <th>K</th>
          </tr>
        </thead>

        <tbody>
          {minorPlayers.map((player) => {

            const stats = player.stats?.[0]

            return (
              <tr key={player.slug}>

                <td>
                  <Link href={`/player/${player.slug}`}>
                    {player.name}
                  </Link>
                </td>

                <td>
                  {player.draftYear
                    ? `${player.draftYear} / ${player.draftRound}`
                    : "-"}
                </td>

                <td>{player.age}</td>
                <td>{player.position}</td>
                <td>{player.bats}/{player.throws}</td>
                <td>{player.minorTeam ?? "-"}</td>

                <td>{stats?.games ?? "-"}</td>
                <td>{stats?.avg ?? "-"}</td>
                <td>{stats?.hr ?? "-"}</td>
                <td>{stats?.rbi ?? "-"}</td>
                <td>{stats?.obp ?? "-"}</td>
                <td>{stats?.ops ?? "-"}</td>

                <td>{stats?.era ?? "-"}</td>
                <td>{stats?.whip ?? "-"}</td>
                <td>{stats?.strikeouts ?? "-"}</td>

              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}