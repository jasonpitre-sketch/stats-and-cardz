import { notFound } from "next/navigation"
import { players } from "../../../data/players"

type Props = {
  params: { slug: string }
}

export default function PlayerPage({ params }: Props) {
  const player = players.find((p) => p.slug === params.slug)

  if (!player) {
    return notFound()
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{player.name}</h1>
      <p>Position: {player.position}</p>
      <p>School: {player.school}</p>
      <p>Age: {player.age}</p>
    </div>
  )
}