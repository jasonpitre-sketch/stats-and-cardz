import { minorTeams } from "@/data/minorTeams"

export default function MinorsPage() {

return (

<div style={{ padding:"20px" }}>

<h1 style={{ marginBottom:"20px" }}>Minor Leagues</h1>

<table style={{ width:"100%", borderCollapse:"collapse" }}>

<thead style={{ background:"black", color:"white" }}>
<tr>
<th style={{ padding:"10px", textAlign:"left" }}>Team</th>
<th style={{ padding:"10px", textAlign:"left" }}>Affiliate</th>
<th style={{ padding:"10px", textAlign:"left" }}>Level</th>
</tr>
</thead>

<tbody>

{minorTeams.map((team)=>(
<tr key={team.team} style={{ borderBottom:"1px solid #ddd" }}>
<td style={{ padding:"10px" }}>{team.team}</td>
<td style={{ padding:"10px" }}>{team.affiliate}</td>
<td style={{ padding:"10px" }}>{team.level}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}