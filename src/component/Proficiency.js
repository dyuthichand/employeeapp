import React, {Component} from "react"

function Proficiency(props) {
  var proficiencyArray = [] , abc = [];
  props.result.forEach(a => {
    proficiencyArray.push(...a.employee_tech.map((b,i) =>b.proficiency ))
  })
const unq =[...new Set(proficiencyArray)];
unq.forEach(each => {
  abc.push(<div>{each}</div>)
})
return (
  <div className = "proficiencyBox" >
  <h1>Proficiency Level</h1>
  <div className="d-flex proficiencylist">
   {abc}
   </div>
    </div>
);
}

export default Proficiency
