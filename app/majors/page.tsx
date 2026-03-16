import { mlbTeams } from "@/data/mlbTeams"

export default function MajorsPage() {

return (

<div style={{ padding:"20px" }}>

<h1 style={{ marginBottom:"20px" }}>Major Leagues</h1>

<table style={{ width:"100%", borderCollapse:"collapse" }}>

<thead style={{ background:"black", color:"white" }}>
<tr>
<th style={{ padding:"10px", textAlign:"left" }}>Team</th>
<th style={{ padding:"10px", textAlign:"left" }}>Division</th>
</tr>
</thead>

<tbody>

{mlbTeams.map((team)=>(
<tr key={team.team} style={{ borderBottom:"1px solid #ddd" }}>
<td style={{ padding:"10px" }}>{team.team}</td>
<td style={{ padding:"10px" }}>{team.division}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}