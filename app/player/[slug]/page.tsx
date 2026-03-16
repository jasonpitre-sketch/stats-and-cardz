import { players } from "@/data/players"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PlayerPage({ params }: Props) {

  const { slug } = await params

  const player = players.find((p) => p.slug === slug)

  if (!player) {
    return notFound()
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{player.name}</h1>

      <p>Position: {player.position}</p>
      <p>Age: {player.age}</p>
      <p>School: {player.school}</p>
    </div>
  )
}