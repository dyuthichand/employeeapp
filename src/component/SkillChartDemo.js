import React, { Component } from "react"
import {Bar} from 'react-chartjs-2';


function SkillChart(props) {
  var e_name,technologyArray = [] , uniqueTechnologyArray = [],uniqueProficiencyArray = [];
  var data=[];
  var employeelist = [];
if(props.techId){

  props.result.forEach(item => {
    item.employee_tech.map((et) => {
      if(et.technology ===props.techId){
        employeelist.push(item.employee_name)
        uniqueProficiencyArray.push(et.profValue)
      } 
    })
  })
 
  
     data =  {
      labels: [...employeelist],
      datasets: [
        {
        label: props.techId + "'s Skill Matrix",
        backgroundColor: [
          '#FF6384',
          '#4BC0C0',
          '#FFCE56',
          '#E7E9ED',
          '#36A2EB',
          '#ffc0f6',
          '#86c5f6'
        ],
        borderColor: 'rgba(255,99,132,1)',
        data: uniqueProficiencyArray
        }
      ]
    };
  
}else if(props.empId){
  props.result.forEach(a => {
    if(a.employee_id === props.empId)
    {
      e_name =a.employee_name;
    technologyArray.push(...a.employee_tech.map((b,i) =>b.technology ))
  uniqueProficiencyArray.push(...a.employee_tech.map((b,i) =>b.profValue ))
      }
  })
  let remove_dupli = (technologyArray) => technologyArray.filter((each,i) => technologyArray.indexOf(each) === i)
uniqueTechnologyArray.push(...remove_dupli(technologyArray));


   data =  {
    labels: [...uniqueTechnologyArray],
    datasets: [
      {
      label: e_name + "'s Skill Matrix",
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB',
        '#ffc0f6',
        '#86c5f6'
      ],
      borderColor: 'rgba(255,99,132,1)',
      data: uniqueProficiencyArray,
      "position": "top",
     
      }
    ]
  };
}

    return (

        <div className="PolarChart">
<Bar  data={data} height={null}
        width={null} options={{

                        scales: {
                          yAxes: [{
                            stacked: true,
                             ticks: {
                              stepSize: 25,
                                 min:0,
                                 max:100
                             }
                         }]
                       }
                    }}   />

        </div>



    )
}

export default SkillChart
