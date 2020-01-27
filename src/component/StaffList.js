import React, { Component } from "react";
import SkillChart from "./SkillChart.js"

  class StaffList extends Component {
      constructor(props) {
          super(props);
          this.state = {
            currentPage: 1,
            todosPerPage: 6,
            result:[]
          };

    }
    handleClick = (event) => {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }
    onChangename =(event) =>{
      var updatedList = [];
      var filtername= event.target.value;
      updatedList = this.state.result.filter(function(item){
        return item.employee_name.toLowerCase().search(
          filtername.toLowerCase()) !== -1;
      });
      this.setState({
        result:updatedList
      })
      console.log(this.state.result)
     }
    static getDerivedStateFromProps(props, state) {
            return {result: props.result };
          }
          componentWillMount() {
            this.setState({categories: [
                {
                    id: 1,
                    title: "Home",
                },
                {
                    id: 2,
                    title: "Gallery",
                }
            ]});
        }
  render() {
    const renderTodos =  this.state.result.map((todo, index) => {
      return <p  key={index} onClick={() => this.props.action(todo.employee_id,0)} >{todo.employee_name}</p>
    });

   


    return (
        <div className="skillmatrix">
        <div className="staff_list_cover">
<h1>Staff List</h1>
        <input type="text" onChange={this.onChangename} placeholder="Search The Staff"/>
          <div className="staff_list">
          <div>
           <div className="stafflist">
              {renderTodos}
              </div>


          </div>
        
          </div>

        </div>
        </div>



    )
}
}
export default StaffList
