export type PlayerStats = {
  year: number
  team?: string
  games?: number
  avg?: number
  hr?: number
  rbi?: number
  obp?: number
  ops?: number
  era?: number
  whip?: number
  strikeouts?: number
}

export type Player = {
  rank: number
  slug: string
  name: string
  team: string
  age: number
  position: string
  school: string
  talent: string

  level?: "Draft" | "A" | "AA" | "AAA" | "MLB"
  eta?: string

  bats?: string
  throws?: string
  height?: string
  weight?: string
  bio?: string

  stats?: PlayerStats[]
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
level:"Draft",
eta:"2029",
stats:[
{year:2024,team:"UCLA",games:55,avg:.319,hr:12,rbi:58,obp:.404,ops:.928},
{year:2023,team:"UCLA",games:50,avg:.295,hr:9,rbi:47,obp:.378,ops:.851}
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
},

{
rank:4,
slug:"jacob-lombard",
name:"Jacob Lombard",
team:"White Sox",
age:18,
position:"SS",
school:"Gulliver Prep (FL)",
talent:"Elite",
level:"Draft"
},

{
rank:5,
slug:"drew-burress",
name:"Drew Burress",
team:"Athletics",
age:21,
position:"OF",
school:"Georgia Tech",
talent:"Elite",
level:"Draft"
},

{
rank:6,
slug:"derek-curiel",
name:"Derek Curiel",
team:"Royals",
age:20,
position:"OF",
school:"LSU",
talent:"Elite",
level:"Draft"
},

{
rank:7,
slug:"carson-bolemon",
name:"Carson Bolemon",
team:"Reds",
age:18,
position:"LHP",
school:"Mississippi HS",
talent:"Elite",
level:"Draft"
},

{
rank:8,
slug:"gio-rojas",
name:"Gio Rojas",
team:"Giants",
age:18,
position:"LHP",
school:"California HS",
talent:"Elite",
level:"Draft"
},

{
rank:9,
slug:"cameron-flukey",
name:"Cameron Flukey",
team:"Angels",
age:20,
position:"RHP",
school:"Wake Forest",
talent:"Elite",
level:"Draft"
},

{
rank:10,
slug:"sawyer-strosnider",
name:"Sawyer Strosnider",
team:"Tigers",
age:20,
position:"OF",
school:"TCU",
talent:"Elite",
level:"Draft"
},

{
rank:11,
slug:"tyler-spangler",
name:"Tyler Spangler",
team:"Cardinals",
age:18,
position:"SS",
school:"Indiana HS",
talent:"Elite"
},

{
rank:12,
slug:"vahn-lackey",
name:"Vahn Lackey",
team:"Mariners",
age:20,
position:"C",
school:"Tennessee",
talent:"Elite"
},

{
rank:13,
slug:"liam-peterson",
name:"Liam Peterson",
team:"Rays",
age:20,
position:"RHP",
school:"Florida",
talent:"Elite"
},

{
rank:14,
slug:"jackson-flora",
name:"Jackson Flora",
team:"Mets",
age:20,
position:"RHP",
school:"LSU",
talent:"Elite"
},

{
rank:15,
slug:"aj-gracia",
name:"A.J. Gracia",
team:"Red Sox",
age:21,
position:"OF",
school:"Miami",
talent:"Elite"
},

{
rank:16,
slug:"chris-hacopian",
name:"Chris Hacopian",
team:"Twins",
age:21,
position:"SS",
school:"Maryland",
talent:"Elite"
},

{
rank:17,
slug:"logan-schmidt",
name:"Logan Schmidt",
team:"Cubs",
age:17,
position:"LHP",
school:"California HS",
talent:"Elite"
},

{
rank:18,
slug:"ace-reese",
name:"Ace Reese",
team:"Diamondbacks",
age:20,
position:"3B",
school:"Mississippi State",
talent:"Elite"
},

{
rank:19,
slug:"rocco-maniscalco",
name:"Rocco Maniscalco",
team:"Marlins",
age:16,
position:"SS",
school:"Florida HS",
talent:"Elite"
},

{
rank:20,
slug:"caden-sorrell",
name:"Caden Sorrell",
team:"Blue Jays",
age:21,
position:"OF",
school:"Texas",
talent:"Elite"
}

]