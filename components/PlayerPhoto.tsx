type Props = {
  slug: string
  name: string
}

export default function PlayerPhoto({ slug, name }: Props) {
  return (
    <img
      src={`/${slug}.jpg`}
      alt={name}
      width={36}
      height={36}
      style={{
        borderRadius: "50%",
        objectFit: "cover"
      }}
    />
  )
}