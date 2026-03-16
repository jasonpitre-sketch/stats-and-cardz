export type Player = {
  rank: number
  slug: string
  name: string
  position: string
  school: string
  age: number
  bats: string
}

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/'/g, "")
    .replace(/\s+/g, "-")

const rawPlayers = [
{ rank:1,name:"Roch Cholowsky",position:"SS",school:"UCLA",age:20,bats:"R/R"},
{ rank:2,name:"Grady Emerson",position:"SS",school:"Fort Worth Christian",age:18,bats:"L/R"},
{ rank:3,name:"Justin Lebron",position:"SS",school:"Alabama",age:21,bats:"R/R"},
{ rank:4,name:"Jacob Lombard",position:"SS",school:"Gulliver Prep",age:18,bats:"R/R"},
{ rank:5,name:"Drew Burress",position:"OF",school:"Georgia Tech",age:21,bats:"R/R"},
{ rank:6,name:"Derek Curiel",position:"OF",school:"LSU",age:20,bats:"L/R"},
{ rank:7,name:"Carson Bolemon",position:"LHP",school:"Southside Christian",age:18,bats:"L/L"},
{ rank:8,name:"Gio Rojas",position:"LHP",school:"Stoneman Douglas",age:18,bats:"L/L"},
{ rank:9,name:"Cameron Flukey",position:"RHP",school:"Coastal Carolina",age:20,bats:"R/R"},
{ rank:10,name:"Sawyer Strosnider",position:"OF",school:"TCU",age:20,bats:"R/R"},
{ rank:11,name:"Tyler Spangler",position:"SS",school:"De La Salle",age:18,bats:"R/R"},
{ rank:12,name:"Vahn Lackey",position:"C",school:"Georgia Tech",age:20,bats:"R/R"},
{ rank:13,name:"Liam Peterson",position:"RHP",school:"Florida",age:20,bats:"R/R"},
{ rank:14,name:"Jackson Flora",position:"RHP",school:"UC Santa Barbara",age:20,bats:"R/R"},
{ rank:15,name:"A.J. Gracia",position:"OF",school:"Virginia",age:21,bats:"R/R"},
{ rank:16,name:"Chris Hacopian",position:"SS",school:"Texas A&M",age:21,bats:"R/R"},
{ rank:17,name:"Logan Schmidt",position:"LHP",school:"Ganesha",age:17,bats:"L/L"},
{ rank:18,name:"Ace Reese",position:"3B",school:"Mississippi State",age:20,bats:"L/R"},
{ rank:19,name:"Rocco Maniscalco",position:"SS",school:"Oxford HS",age:16,bats:"R/R"},
{ rank:20,name:"Caden Sorrell",position:"OF",school:"Texas A&M",age:21,bats:"L/R"},
{ rank:21,name:"Eric Becker",position:"SS",school:"Virginia",age:20,bats:"R/R"},
{ rank:22,name:"Tyler Bell",position:"SS",school:"Kentucky",age:20,bats:"R/R"},
{ rank:23,name:"Coleman Borthwick",position:"RHP",school:"South Walton",age:17,bats:"R/R"},
{ rank:24,name:"Gabe Gaeckle",position:"RHP",school:"Arkansas",age:21,bats:"R/R"},
{ rank:25,name:"Chris Rembert",position:"2B",school:"Auburn",age:20,bats:"R/R"},
{ rank:26,name:"Gavin Grahovac",position:"3B",school:"Texas A&M",age:21,bats:"R/R"},
{ rank:27,name:"Zion Rose",position:"OF",school:"Louisville",age:20,bats:"R/R"},
{ rank:28,name:"Eric Booth Jr.",position:"OF",school:"Oak Grove",age:17,bats:"R/R"},
{ rank:29,name:"Ryder Helfrick",position:"C",school:"Arkansas",age:21,bats:"R/R"},
{ rank:30,name:"Jensen Hirschkorn",position:"RHP",school:"Kingsburg",age:18,bats:"R/R"},
{ rank:31,name:"Will Brick",position:"C",school:"Christian Brothers",age:17,bats:"R/R"},
{ rank:32,name:"Trevor Condon",position:"OF",school:"Etowah",age:18,bats:"R/R"},
{ rank:33,name:"Blake Bowen",position:"OF",school:"JSerra Catholic",age:18,bats:"R/R"},
{ rank:34,name:"Brady Harris",position:"OF",school:"Trinity Christian",age:18,bats:"R/R"},
{ rank:35,name:"Jarren Advincula",position:"2B",school:"Cal",age:21,bats:"R/R"},
{ rank:36,name:"Aiden Ruiz",position:"SS",school:"Texas HS",age:18,bats:"R/R"},
{ rank:37,name:"Kaden Waechter",position:"RHP",school:"Jesuit",age:18,bats:"R/R"},
{ rank:38,name:"Hunter Dietz",position:"LHP",school:"Arkansas State",age:21,bats:"L/L"},
{ rank:39,name:"Cole Carlon",position:"LHP",school:"Arizona State",age:20,bats:"L/L"},
{ rank:40,name:"Caden Bogenpohl",position:"OF",school:"St. Xavier",age:20,bats:"R/R"},
{ rank:41,name:"Beau Peterson",position:"3B",school:"Florida HS",age:18,bats:"R/R"},
{ rank:42,name:"Landon Thome",position:"2B/3B",school:"Ohio HS",age:18,bats:"R/R"},
{ rank:43,name:"Tegan Kuhns",position:"RHP",school:"Tennessee",age:20,bats:"R/R"},
{ rank:44,name:"Chase Brunson",position:"OF",school:"TCU",age:20,bats:"R/R"},
{ rank:45,name:"Shane Sdao",position:"LHP",school:"Louisville",age:22,bats:"L/L"},
{ rank:46,name:"Tre Broussard",position:"OF",school:"Houston",age:20,bats:"R/R"},
{ rank:47,name:"Joseph Contreras",position:"RHP",school:"Blessed Trinity",age:17,bats:"R/R"},
{ rank:48,name:"Jorvorskie Lane Jr.",position:"OF",school:"Texas HS",age:17,bats:"R/R"},
{ rank:49,name:"Maddox Molony",position:"SS",school:"Oregon State",age:21,bats:"R/R"},
{ rank:50,name:"Denton Lord",position:"RHP",school:"Texas HS",age:18,bats:"R/R"},
]

export const players: Player[] = rawPlayers.map((p) => ({
  ...p,
  slug: slugify(p.name),
}))