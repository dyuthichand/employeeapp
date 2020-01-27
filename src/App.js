import React, { Component } from "react";
import { Router, Route, Switch } from "react-router";
import "./App.css";
import jsonData from "./e_list.json";
import StaffList from "./component/StaffList.js"
import Proficiency from "./component/Proficiency.js"
import SkillList from "./component/SkillList.js"
import SkillChart from "./component/SkillChart.js"
import ChartDisplay from "./component/ChartDisplay.js"
import AddSkill from "./component/AddSkill.js"
import AddSkillForm from "./component/AddSkillForm.js"
import Header from "./component/Header.js"
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { empId:'',techId:'',showGraph:false,addSkill: false, list:[]};
    }
    componentDidMount(){
    
      axios.get('http://localhost:5000/users/')
      .then(response => {
        const list = response.data;
        this.setState({ list: list });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    addskill = () =>{
      this.setState({
        addSkill:true
      })


    }
    showGraph = (employee_id=0,techId=0) => {
          this.setState({
            showGraph:true,
            empId:employee_id,
            techId:techId
          })
    }
    render() {

        return (
          <div >
          <Header/>

          <div className="container">
            <div className="row">
<div className="col-sm-8">
  <SkillList action={this.showGraph} result={this.state.list} />
              </div>
              <div className="col-sm-4">
                <AddSkill action={this.addskill} />
          <StaffList action={this.showGraph}  result={this.state.list} />
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="container ">
            <div className="row">
                <div className="col-sm-7">
                  {this.state.showGraph && (
 <ChartDisplay statustechid={this.state.techId}  statusempId={this.state.empId} statusshowGraph={this.state.showGraph}   result={this.state.list} />)}
  {this.state.addSkill && <AddSkillForm/>}
          </div>
          </div>
          </div>
  </div>

        );
    }
}

export default App
