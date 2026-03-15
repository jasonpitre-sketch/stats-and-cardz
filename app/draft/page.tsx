import Link from "next/link"

type DraftPlayer = {
  pick: number
  team: string
  name: string
  slug: string
  age: number
  school: string
}

const players: DraftPlayer[] = [
  { pick: 1, team: "Cleveland Guardians", name: "Roch Cholowsky", slug: "roch-cholowsky", age: 20, school: "UCLA" },
  { pick: 2, team: "Cincinnati Reds", name: "Grady Emerson", slug: "grady-emerson", age: 18, school: "Fort Worth Christian (TX)" },
  { pick: 3, team: "Colorado Rockies", name: "Justin Lebron", slug: "justin-lebron", age: 21, school: "Alabama" },
  { pick: 4, team: "Oakland Athletics", name: "Jacob Lombard", slug: "jacob-lombard", age: 18, school: "Gulliver Prep (FL)" },
  { pick: 5, team: "Chicago White Sox", name: "Drew Burress", slug: "drew-burress", age: 21, school: "Georgia Tech" },
  { pick: 6, team: "Kansas City Royals", name: "Derek Curiel", slug: "derek-curiel", age: 20, school: "LSU" },
  { pick: 7, team: "Detroit Tigers", name: "Carson Bolemon", slug: "carson-bolemon", age: 18, school: "Southside Christian (SC)" },
  { pick: 8, team: "Los Angeles Angels", name: "Gio Rojas", slug: "gio-rojas", age: 18, school: "Stoneman Douglas (FL)" },
  { pick: 9, team: "Pittsburgh Pirates", name: "Cameron Flukey", slug: "cameron-flukey", age: 20, school: "Coastal Carolina" },
  { pick: 10, team: "Washington Nationals", name: "Sawyer Strosnider", slug: "sawyer-strosnider", age: 20, school: "Texas Christian" },

  { pick: 11, team: "New York Mets", name: "Tyler Spangler", slug: "tyler-spangler", age: 18, school: "De La Salle (CA)" },
  { pick: 12, team: "Chicago Cubs", name: "Vahn Lackey", slug: "vahn-lackey", age: 20, school: "Georgia Tech" },
  { pick: 13, team: "Arizona Diamondbacks", name: "Liam Peterson", slug: "liam-peterson", age: 20, school: "Florida" },
  { pick: 14, team: "San Francisco Giants", name: "Jackson Flora", slug: "jackson-flora", age: 20, school: "UC Santa Barbara" },
  { pick: 15, team: "Boston Red Sox", name: "A.J. Gracia", slug: "aj-gracia", age: 21, school: "Virginia" },
  { pick: 16, team: "Seattle Mariners", name: "Chris Hacopian", slug: "chris-hacopian", age: 21, school: "Texas A&M" },
  { pick: 17, team: "Tampa Bay Rays", name: "Logan Schmidt", slug: "logan-schmidt", age: 17, school: "Ganesha (CA)" },
  { pick: 18, team: "Toronto Blue Jays", name: "Ace Reese", slug: "ace-reese", age: 20, school: "Mississippi State" },
  { pick: 19, team: "St. Louis Cardinals", name: "Rocco Maniscalco", slug: "rocco-maniscalco", age: 16, school: "Oxford (AL)" },
  { pick: 20, team: "Milwaukee Brewers", name: "Caden Sorrell", slug: "caden-sorrell", age: 21, school: "Texas A&M" },

  { pick: 21, team: "San Diego Padres", name: "Eric Becker", slug: "eric-becker", age: 20, school: "Virginia" },
  { pick: 22, team: "Baltimore Orioles", name: "Tyler Bell", slug: "tyler-bell", age: 20, school: "Kentucky" },
  { pick: 23, team: "Texas Rangers", name: "Coleman Borthwick", slug: "coleman-borthwick", age: 17, school: "South Walton (FL)" },
  { pick: 24, team: "Minnesota Twins", name: "Gabe Gaeckle", slug: "gabe-gaeckle", age: 21, school: "Arkansas" },
  { pick: 25, team: "Philadelphia Phillies", name: "Chris Rembert", slug: "chris-rembert", age: 20, school: "Auburn" },

  { pick: 26, team: "Houston Astros", name: "Gavin Grahovac", slug: "gavin-grahovac", age: 21, school: "Texas A&M" },
  { pick: 27, team: "Atlanta Braves", name: "Zion Rose", slug: "zion-rose", age: 20, school: "Louisville" },
  { pick: 28, team: "Los Angeles Dodgers", name: "Eric Booth Jr.", slug: "eric-booth-jr", age: 17, school: "Oak Grove (MS)" },
  { pick: 29, team: "New York Yankees", name: "Ryder Helfrick", slug: "ryder-helfrick", age: 21, school: "Arkansas" },
  { pick: 30, team: "Miami Marlins", name: "Jensen Hirschkorn", slug: "jensen-hirschkorn", age: 18, school: "Kingsburg (CA)" },

  { pick: 31, team: "Round 2 Team", name: "Will Brick", slug: "will-brick", age: 17, school: "Christian Brothers (TN)" },
  { pick: 32, team: "Round 2 Team", name: "Trevor Condon", slug: "trevor-condon", age: 18, school: "Etowah (GA)" },
  { pick: 33, team: "Round 2 Team", name: "Blake Bowen", slug: "blake-bowen", age: 18, school: "JSerra (CA)" },
  { pick: 34, team: "Round 2 Team", name: "Brady Harris", slug: "brady-harris", age: 18, school: "Trinity Christian (FL)" },
  { pick: 35, team: "Round 2 Team", name: "Jarren Advincula", slug: "jarren-advincula", age: 21, school: "Georgia Tech" },

  { pick: 36, team: "Round 2 Team", name: "Aiden Ruiz", slug: "aiden-ruiz", age: 18, school: "Stony Brook (NY)" },
  { pick: 37, team: "Round 2 Team", name: "Kaden Waechter", slug: "kaden-waechter", age: 18, school: "Jesuit (FL)" },
  { pick: 38, team: "Round 2 Team", name: "Hunter Dietz", slug: "hunter-dietz", age: 21, school: "Arkansas" },
  { pick: 39, team: "Round 2 Team", name: "Cole Carlon", slug: "cole-carlon", age: 20, school: "Arizona State" },
  { pick: 40, team: "Round 2 Team", name: "Caden Bogenpohl", slug: "caden-bogenpohl", age: 20, school: "Missouri State" },

  { pick: 41, team: "Round 2 Team", name: "Beau Peterson", slug: "beau-peterson", age: 18, school: "Mill Valley (KS)" },
  { pick: 42, team: "Round 2 Team", name: "Landon Thome", slug: "landon-thome", age: 18, school: "Nazareth Academy (IL)" },
  { pick: 43, team: "Round 2 Team", name: "Tegan Kuhns", slug: "tegan-kuhns", age: 20, school: "Tennessee" },
  { pick: 44, team: "Round 2 Team", name: "Chase Brunson", slug: "chase-brunson", age: 20, school: "Texas Christian" },
  { pick: 45, team: "Round 2 Team", name: "Shane Sdao", slug: "shane-sdao", age: 22, school: "Texas A&M" },

  { pick: 46, team: "Round 2 Team", name: "Tre Broussard", slug: "tre-broussard", age: 20, school: "Houston" },
  { pick: 47, team: "Round 2 Team", name: "Joseph Contreras", slug: "joseph-contreras", age: 17, school: "Blessed Trinity (GA)" },
  { pick: 48, team: "Round 2 Team", name: "Jorvorskie Lane Jr.", slug: "jorvorskie-lane-jr", age: 17, school: "Grapevine (TX)" },
  { pick: 49, team: "Round 2 Team", name: "Maddox Molony", slug: "maddox-molony", age: 21, school: "Oregon" },
  { pick: 50, team: "Round 2 Team", name: "Denton Lord", slug: "denton-lord", age: 18, school: "South Walton (FL)" }
]

export default function DraftPage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>MLB Draft Tracker</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#111", color: "white" }}>
            <th>Pick</th>
            <th>Team</th>
            <th>Player</th>
            <th>Age</th>
            <th>School</th>
          </tr>
        </thead>

        <tbody>
          {players.map((p) => (
            <tr key={p.pick} style={{ borderBottom: "1px solid #ddd", textAlign: "center" }}>
              <td>{p.pick}</td>
              <td>{p.team}</td>

              <td>
                <Link href={`/player/${p.slug}`} style={{ color: "#0070f3", fontWeight: "bold" }}>
                  {p.name}
                </Link>
              </td>

              <td>{p.age}</td>
              <td>{p.school}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}