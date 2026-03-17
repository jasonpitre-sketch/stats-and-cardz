"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { useParams } from "next/navigation"
import { players } from "@/data/players"

const careerStages = [
  "Draft",
  "Low-A",
  "High-A",
  "AA",
  "AAA",
  "MLB Rookie",
  "MLB",
  "All-Star",
  "MVP",
  "HOF",
]

export default function PlayerPage() {
  const params = useParams()
  const slug = params?.slug as string

  const player = players.find((p) => p.slug === slug)

  if (!player) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          color: "white",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            background: "#111827",
            border: "1px solid #334155",
            borderRadius: "18px",
            padding: "32px",
          }}
        >
          <h1 style={{ marginTop: 0 }}>Player not found</h1>
          <p style={{ color: "#cbd5e1" }}>
            The player profile could not be loaded.
          </p>
          <Link href="/draft" style={{ color: "#60a5fa" }}>
            ← Back to Draft Tracker
          </Link>
        </div>
      </div>
    )
  }

  const seasons = player.stats ?? []
  const [selectedYear, setSelectedYear] = useState<number | "">(
    seasons.length > 0 ? seasons[0].year : ""
  )

  const currentSeason =
    seasons.find((s) => s.year === selectedYear) ?? seasons[0] ?? null

  const currentLevel =
    currentSeason?.level || player.level || "Draft"

  const currentStageIndex = careerStages.indexOf(currentLevel)

  const isPitcher = player.position.includes("P")

  const scouting = useMemo(() => {
    if (isPitcher) {
      return [
        { label: "Fastball", grade: 60 },
        { label: "Breaking", grade: 55 },
        { label: "Command", grade: 50 },
        { label: "Control", grade: 55 },
        { label: "Overall", grade: 55 },
      ]
    }

    return [
      { label: "Hit", grade: 60 },
      { label: "Power", grade: 55 },
      { label: "Speed", grade: 50 },
      { label: "Arm", grade: 60 },
      { label: "Field", grade: 60 },
    ]
  }, [isPitcher])

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0f172a 0%, #111827 35%, #0b1220 100%)",
        color: "#e5e7eb",
        padding: "28px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "18px" }}>
          <Link
            href="/draft"
            style={{
              color: "#93c5fd",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            ← Back to Draft Tracker
          </Link>
        </div>

        {/* HERO CARD */}
        <section
          style={{
            background:
              "linear-gradient(135deg, rgba(30,41,59,1) 0%, rgba(15,23,42,1) 55%, rgba(30,64,175,0.35) 100%)",
            border: "1px solid rgba(148,163,184,0.2)",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "22px",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "rgba(59,130,246,0.18)",
                  color: "#bfdbfe",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Living Player Profile
              </div>

              <h1
                style={{
                  margin: "0 0 8px 0",
                  fontSize: "42px",
                  lineHeight: 1.05,
                  color: "white",
                }}
              >
                {player.name}
              </h1>

              <div
                style={{
                  fontSize: "18px",
                  color: "#cbd5e1",
                  marginBottom: "16px",
                  fontWeight: 700,
                }}
              >
                {player.position} | {player.team} | Age {player.age}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(180px, 1fr))",
                  gap: "10px 18px",
                  marginBottom: "18px",
                }}
              >
                <InfoRow label="Bats / Throws" value={`${player.bats ?? "-"} / ${player.throws ?? "-"}`} />
                <InfoRow label="School" value={player.school} />
                <InfoRow label="Talent Grade" value={player.talent} />
                <InfoRow label="Current Level" value={currentLevel} />
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#cbd5e1",
                  lineHeight: 1.6,
                  maxWidth: "700px",
                }}
              >
                {player.bio ??
                  `${player.name} is tracked inside your player development engine. This page is built to tell the full story — draft profile, development path, performance snapshots, season-by-season progression, and future analytics.`}
              </p>
            </div>

            <div
              style={{
                background: "rgba(15,23,42,0.68)",
                border: "1px solid rgba(148,163,184,0.18)",
                borderRadius: "20px",
                padding: "20px",
                alignSelf: "stretch",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "18px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#93c5fd",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 700,
                    }}
                  >
                    Season Snapshot
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#cbd5e1",
                      marginTop: "6px",
                    }}
                  >
                    Top-line performance for the selected year
                  </div>
                </div>

                {seasons.length > 0 && (
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                    style={{
                      background: "#0f172a",
                      color: "white",
                      border: "1px solid #334155",
                      borderRadius: "10px",
                      padding: "10px 12px",
                      fontWeight: 700,
                    }}
                  >
                    {seasons.map((s) => (
                      <option key={s.year} value={s.year}>
                        {s.year}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                  gap: "12px",
                }}
              >
                <StatTile label="G" value={currentSeason?.G} />
                <StatTile label="AVG" value={formatDecimal(currentSeason?.AVG)} />
                <StatTile label="HR" value={currentSeason?.HR} />
                <StatTile label="RBI" value={currentSeason?.RBI} />
                <StatTile label="OPS" value={formatDecimal(currentSeason?.OPS)} />
                <StatTile label="ERA" value={formatDecimal(currentSeason?.ERA)} />
                <StatTile label="WHIP" value={formatDecimal(currentSeason?.WHIP)} />
                <StatTile label="K" value={currentSeason?.K} />
              </div>

              {selectedYear && (
                <div style={{ marginTop: "18px" }}>
                  <Link
                    href={`/player/${player.slug}/${selectedYear}`}
                    style={{
                      color: "#93c5fd",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    View Full {selectedYear} Analytics →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CAREER TIMELINE */}
        <section
          style={{
            background: "#111827",
            border: "1px solid rgba(148,163,184,0.16)",
            borderRadius: "22px",
            padding: "22px",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ marginTop: 0, color: "white", marginBottom: "18px" }}>
            Career Progression
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${careerStages.length}, minmax(0, 1fr))`,
              gap: "10px",
            }}
          >
            {careerStages.map((stage, index) => {
              const active = index <= currentStageIndex || (currentStageIndex === -1 && stage === "Draft")
              const current = stage === currentLevel

              return (
                <div key={stage} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      height: "12px",
                      borderRadius: "999px",
                      background: current
                        ? "#3b82f6"
                        : active
                        ? "#22c55e"
                        : "#1f2937",
                      border: current
                        ? "2px solid #bfdbfe"
                        : "1px solid rgba(148,163,184,0.18)",
                      marginBottom: "10px",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "12px",
                      color: current ? "#bfdbfe" : active ? "#d1fae5" : "#94a3b8",
                      fontWeight: current ? 700 : 600,
                      lineHeight: 1.3,
                    }}
                  >
                    {stage}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "24px",
          }}
        >
          {/* FULL STATS */}
          <section
            style={{
              background: "#111827",
              border: "1px solid rgba(148,163,184,0.16)",
              borderRadius: "22px",
              padding: "22px",
            }}
          >
            <h2 style={{ marginTop: 0, color: "white", marginBottom: "18px" }}>
              Full Season Stats
            </h2>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "14px",
                }}
              >
                <thead>
                  <tr style={{ color: "#93c5fd" }}>
                    <Th>Year</Th>
                    <Th>Level</Th>
                    <Th>Team</Th>
                    <Th>G</Th>
                    <Th>AVG</Th>
                    <Th>HR</Th>
                    <Th>RBI</Th>
                    <Th>OPS</Th>
                    <Th>ERA</Th>
                    <Th>WHIP</Th>
                    <Th>K</Th>
                  </tr>
                </thead>
                <tbody>
                  {seasons.length > 0 ? (
                    seasons.map((s) => (
                      <tr
                        key={s.year}
                        style={{
                          borderTop: "1px solid rgba(148,163,184,0.12)",
                          background:
                            s.year === selectedYear
                              ? "rgba(59,130,246,0.08)"
                              : "transparent",
                        }}
                      >
                        <Td>{s.year}</Td>
                        <Td>{s.level}</Td>
                        <Td>{s.team}</Td>
                        <Td>{s.G ?? "-"}</Td>
                        <Td>{formatDecimal(s.AVG)}</Td>
                        <Td>{s.HR ?? "-"}</Td>
                        <Td>{s.RBI ?? "-"}</Td>
                        <Td>{formatDecimal(s.OPS)}</Td>
                        <Td>{formatDecimal(s.ERA)}</Td>
                        <Td>{formatDecimal(s.WHIP)}</Td>
                        <Td>{s.K ?? "-"}</Td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <Td colSpan={11}>No stats available yet.</Td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* SCOUTING */}
          <section
            style={{
              background: "#111827",
              border: "1px solid rgba(148,163,184,0.16)",
              borderRadius: "22px",
              padding: "22px",
            }}
          >
            <h2 style={{ marginTop: 0, color: "white", marginBottom: "18px" }}>
              Scouting Grades
            </h2>

            <div style={{ display: "grid", gap: "14px" }}>
              {scouting.map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ color: "#93c5fd" }}>{item.grade}</span>
                  </div>
                  <div
                    style={{
                      height: "12px",
                      background: "#1f2937",
                      borderRadius: "999px",
                      overflow: "hidden",
                      border: "1px solid rgba(148,163,184,0.14)",
                    }}
                  >
                    <div
                      style={{
                        width: `${(item.grade / 80) * 100}%`,
                        height: "100%",
                        background:
                          "linear-gradient(90deg, #22c55e 0%, #3b82f6 100%)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "26px",
                padding: "18px",
                borderRadius: "16px",
                background: "rgba(15,23,42,0.7)",
                border: "1px solid rgba(148,163,184,0.14)",
              }}
            >
              <div
                style={{
                  color: "#93c5fd",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                Profile Summary
              </div>
              <p
                style={{
                  margin: 0,
                  color: "#cbd5e1",
                  lineHeight: 1.65,
                  fontSize: "14px",
                }}
              >
                {player.name} sits inside your living baseball profile system.
                This space is built to evolve from draft identity into full
                development, major-league performance, awards, comparison
                charts, and deeper analytics.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: "12px 14px",
        borderRadius: "14px",
        background: "rgba(15,23,42,0.55)",
        border: "1px solid rgba(148,163,184,0.14)",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#93c5fd",
          fontWeight: 700,
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      <div style={{ color: "white", fontWeight: 700 }}>{value}</div>
    </div>
  )
}

function StatTile({
  label,
  value,
}: {
  label: string
  value: string | number | undefined
}) {
  return (
    <div
      style={{
        background: "rgba(2,6,23,0.78)",
        border: "1px solid rgba(148,163,184,0.14)",
        borderRadius: "16px",
        padding: "16px 12px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#93c5fd",
          fontWeight: 700,
          marginBottom: "8px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "24px",
          fontWeight: 800,
          color: "white",
          lineHeight: 1,
        }}
      >
        {value ?? "-"}
      </div>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "12px 10px",
        fontWeight: 700,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </th>
  )
}

function Td({
  children,
  colSpan,
}: {
  children: React.ReactNode
  colSpan?: number
}) {
  return (
    <td
      colSpan={colSpan}
      style={{
        padding: "12px 10px",
        color: "#e5e7eb",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </td>
  )
}

function formatDecimal(value: number | undefined) {
  if (value === undefined) return "-"
  return value.toFixed(3).replace(/^0/, "")
}