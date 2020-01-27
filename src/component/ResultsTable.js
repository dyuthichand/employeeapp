import React, { Component } from "react"
import StaffList from "./StaffList.js"
function ResultsTable(props) {

    return (
    <div>
    {props.result.map((item) => <tr key={item.id}>
       <td>{item.id}</td>
      <td>{item.employee_name}</td>
       {item.employee_tech.map(techdetails => <td>{techdetails.technology}{techdetails.proficiency}</td>)}
   
   
    </tr>
      )}
    </div>

    )
}

export default ResultsTable
