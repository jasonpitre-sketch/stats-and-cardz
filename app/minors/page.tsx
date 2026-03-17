"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { players } from "@/data/players"

const minorStatuses = ["Low-A", "High-A", "AA", "AAA"] as const

function getGroup(position: string) {
  if (position.includes("P")) return "Pitchers"
  if (position === "C") return "Catchers"
  if (["1B", "2B", "3B", "SS", "IF", "2B/3B"].includes(position)) return "Infielders"
  if (position === "OF") return "Outfielders"
  return "All Players"
}

export default function MinorsPage() {
  const [filter, setFilter] = useState("All Players")

  const minorPlayers = useMemo(() => {
    const base = players.filter((player) =>
      minorStatuses.includes((player.status ?? "Draft") as (typeof minorStatuses)[number])
    )

    if (filter === "All Players") return base
    if (filter === "Pitchers") return base.filter((p) => p.position.includes("P"))
    if (filter === "Catchers") return base.filter((p) => p.position === "C")
    if (filter === "Infielders")
      return base.filter((p) => ["1B", "2B", "3B", "SS", "IF", "2B/3B"].includes(p.position))
    if (filter === "Outfielders") return base.filter((p) => p.position === "OF")

    return base
  }, [filter])

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ marginBottom: "16px" }}>Minor League Players</h1>

      <div style={{ marginBottom: "16px" }}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: "8px" }}>
          <option>All Players</option>
          <option>Pitchers</option>
          <option>Infielders</option>
          <option>Outfielders</option>
          <option>Catchers</option>
        </select>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={th}>Player</th>
            <th style={th}>Draft</th>
            <th style={th}>Status</th>
            <th style={th}>Age</th>
            <th style={th}>Pos</th>
            <th style={th}>Hand</th>
            <th style={th}>Team</th>
            <th style={th}>G</th>
            <th style={th}>AVG</th>
            <th style={th}>HR</th>
            <th style={th}>RBI</th>
            <th style={th}>OBP</th>
            <th style={th}>OPS</th>
            <th style={th}>ERA</th>
            <th style={th}>WHIP</th>
            <th style={th}>K</th>
          </tr>
        </thead>

        <tbody>
          {minorPlayers.map((player) => {
            const stats = player.stats?.[0]

            return (
              <tr key={player.slug}>
                <td style={td}>
                  <Link href={`/player/${player.slug}`}>{player.name}</Link>
                </td>
                <td style={td}>
                  {player.draftYear && player.draftRound
                    ? `${player.draftYear} / ${player.draftRound}`
                    : "-"}
                </td>
                <td style={td}>{player.status ?? "-"}</td>
                <td style={td}>{player.age}</td>
                <td style={td}>{player.position}</td>
                <td style={td}>
                  {player.bats ?? "-"} / {player.throws ?? "-"}
                </td>
                <td style={td}>{stats?.team ?? player.team}</td>
                <td style={td}>{stats?.games ?? "-"}</td>
                <td style={td}>{stats?.avg ?? "-"}</td>
                <td style={td}>{stats?.hr ?? "-"}</td>
                <td style={td}>{stats?.rbi ?? "-"}</td>
                <td style={td}>{stats?.obp ?? "-"}</td>
                <td style={td}>{stats?.ops ?? "-"}</td>
                <td style={td}>{stats?.era ?? "-"}</td>
                <td style={td}>{stats?.whip ?? "-"}</td>
                <td style={td}>{stats?.strikeouts ?? "-"}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px",
  borderBottom: "1px solid #ccc",
  whiteSpace: "nowrap",
}

const td: React.CSSProperties = {
  padding: "10px",
  borderBottom: "1px solid #eee",
  whiteSpace: "nowrap",
}