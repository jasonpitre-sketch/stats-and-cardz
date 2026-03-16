import Link from "next/link"
import { players } from "@/data/players"

export default function PlayerDirectory() {
  return (
    <div style={{ padding: 20 }}>

      <h1>Player Profiles</h1>

      {players.map((player) => (
        <div key={player.slug}>

          <Link href={`/player/${player.slug}`}>
            {player.name}
          </Link>

        </div>
      ))}

    </div>
  )
}