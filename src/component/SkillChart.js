import React, { Component } from "react"
import {Bar} from 'react-chartjs-2';


function SkillChart(props) {
  var e_name,valueofpro ,sortedVal = [], technologyArray = [] , uniqueTechnologyArray = [],proficiencyArray = [],uniqueProficiencyArray = [];

  props.result.forEach(a => {
    if(a.id === props.empId)
    {
      e_name =a.employee_name;
    technologyArray.push(...a.employee_tech.map((b,i) =>b.technology ))
      uniqueProficiencyArray.push(...a.employee_tech.map((b,i) =>b.proficiency ))
      }
  })
  let remove_dupli = (technologyArray) => technologyArray.filter((each,i) => technologyArray.indexOf(each) === i)
uniqueTechnologyArray.push(...remove_dupli(technologyArray));

  uniqueProficiencyArray.forEach(self => {
  switch (self) {
    case "Proffesional":
  valueofpro = 100;
  sortedVal.push(valueofpro)
      break;
      case "Expert":
    valueofpro = 80;
    sortedVal.push(valueofpro)
        break;
        case "Intermediate":
      valueofpro = 60;
      sortedVal.push(valueofpro)
          break;
          case "Beginner":
        valueofpro = 20;
        sortedVal.push(valueofpro)
            break;
            case "Novice":
          valueofpro = 0;
          sortedVal.push(valueofpro)
              break;
    default:

  }})

  const data =  {
    labels: [...uniqueTechnologyArray],
    datasets: [
      {
  		label: e_name + "'s Skill Matrix",
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB'
      ],
  		borderColor: 'rgba(255,99,132,1)',
  		data: sortedVal
      }
    ]
  };

    return (

        <div className="PolarChart">
<Bar  data={data}    options={{
                        maintainAspectRatio: true,
                        scales: {
                           yAxes: [{
                               ticks: {
                                   min: 0,
                               }
                           }]
                       }
                    }}   />

        </div>



    )
}

export default SkillChart
