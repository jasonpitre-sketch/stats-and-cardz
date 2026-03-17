export type Player = {
  rank: number
  slug: string
  name: string
  team: string
  age: number
  position: string
  school: string
  talent: string

  bats?: string
  throws?: string

  level?: "Draft" | "Low-A" | "High-A" | "AA" | "AAA" | "MLB Rookie" | "MLB" | "All-Star" | "MVP" | "HOF"

  stats?: {
    year: number
    level: string
    team: string

    G?: number
    AVG?: number
    HR?: number
    RBI?: number
    OPS?: number

    ERA?: number
    WHIP?: number
    K?: number
  }[]
}

export const players: Player[] = [

{
  rank:1,
  slug:"roch-cholowsky",
  name:"Roch Cholowsky",
  team:"Pirates",
  age:20,
  position:"SS",
  school:"UCLA",
  talent:"Elite",
  bats:"R",
  throws:"R",
  level:"Draft",

  stats:[
    {
      year:2026,
      level:"College",
      team:"UCLA",
      G:58,
      AVG:.362,
      HR:18,
      RBI:64,
      OPS:1.045
    },
    {
      year:2027,
      level:"Low-A",
      team:"Pirates",
      G:72,
      AVG:.298,
      HR:12,
      RBI:48,
      OPS:.875
    }
  ]
},

{
  rank:2,
  slug:"grady-emerson",
  name:"Grady Emerson",
  team:"Nationals",
  age:18,
  position:"SS",
  school:"Fort Worth Christian (TX)",
  talent:"Elite",
  level:"Draft"
},

{
  rank:3,
  slug:"justin-lebron",
  name:"Justin Lebron",
  team:"Rockies",
  age:21,
  position:"SS",
  school:"Alabama",
  talent:"Elite",
  level:"Draft"
}

]