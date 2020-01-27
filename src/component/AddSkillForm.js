import React, { Component } from 'react';
import axios from 'axios';

export default class AddSkillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading :false,
      employee_name: '',
      employee_manager: '',
      employee_id:'',
      employee_tech: []
    };
  }
  componentDidMount(){
    this.setState({
      employee_name: '',
      employee_manager: '',
      employee_id:'',
      employee_tech: []
    });

  }
    handleChange = (event) => {
      const  employee_tech = [...this.state.employee_tech];
      var values = [0,25,50,75,100];
      event.target.previousSibling.innerHTML=values[event.target.value];
      var objFound_bool = false;
      for (var i = 0; i < employee_tech.length; i++) {
        if( employee_tech[i].technology === event.target.name){
          objFound_bool = true;
          employee_tech[i].profValue =values[event.target.value] ;
        }
      }
      if(!objFound_bool){
        employee_tech.push({
          technology:event.target.name,
          profValue:values[event.target.value]
        })
      }
      this.setState( {employee_tech: employee_tech})
  };


  onChangeUsername = (e) => {
    this.setState({
      employee_name: e.target.value
    })
  }
  onChangeId = (e) => {
    this.setState({
      employee_id: e.target.value
    })
  }
  handleChangemanager = (e) => {
    this.setState({
      employee_manager: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({loading:true});
    const skillentry = {
      employee_name: this.state.employee_name,
      employee_manager: this.state.employee_manager,
      employee_id: this.state.employee_id,
      employee_tech:this.state.employee_tech
    }
let resultdata;
    axios.post('http://localhost:5000/users/add', skillentry)
      .then(res => {
                resultdata=<div className='alert alert-success'>sumitted successfully</div>;
             
         this.setState({
           loading:false,
          success:resultdata,
          employee_name: '',
          employee_manager: '',
          employee_id:'',
          employee_tech: [] 
        }) ;
        document.getElementById("myForm").reset(); 
        document.getElementById("myForm").getElementsByTagName("span").innerHTML=0; 
       })

      .catch( error => {
        resultdata=<div className='alert alert-danger'>Failed!! Please Retry</div>;
        this.setState({
          loading:false,
          success:resultdata
        }) ;
      
      });
     
  }

  render() {
    let loader,sending;
    if (this.state.success) {
      sending=<div>{this.state.success}</div>
    }
    if (this.state.loading) {
      loader = <div><div className="loader"></div><div className="loaderbg"></div></div>;
    } 
    
    return (
     
      <div>
        {loader}
        {sending}
        <h3>Add Your SkillSet</h3>
      <form id="myForm" className="skilladd  text-left border border-light p-5" onSubmit={this.onSubmit}>

      <input type="text" name="employee_name" className="form-control mb-4" placeholder="Employee Name"  value={this.state.employee_name} onChange={this.onChangeUsername}/>
      <input type="text" name="employee_id" className="form-control mb-4" placeholder="Employee ID"  value={this.state.employee_id} onChange={this.onChangeId}/>
<div><label>Manager</label>
      <select name="employee_manager" className="browser-default manager-select mb-4" value={this.state.employee_manager} onChange={this.handleChangemanager}>
          <option value="" disabled>Choose option</option>
          <option value="manager1">Manager1</option>
          <option value="manager1">Manager2</option>
      </select>
    </div>
<h2>SKILLS</h2>
<div className="text-center">
<div>
<label>php</label> <span>0</span>
<input name="php" type="range" min="0" max="4"  defaultValue="0" className="slider"   onChange={this.handleChange} />
</div>
<div>
<label >css</label> <span>0</span>
<input type="range"  name="css" min="0" max="4" defaultValue="0" className="slider"   onChange={this.handleChange} />
</div>
<div>
<label>js</label> <span>0</span>
<input type="range" name="js" min="0" max="4"  defaultValue="0" className="slider"  onChange={this.handleChange} />
</div>
<div>
<label>VueJs</label> <span>0</span>
<input type="range" name="VueJs" min="0" max="4" defaultValue="0" className="slider"  onChange={this.handleChange} />
</div>
<div>
<label>jquery</label> <span>0</span>
<input type="range" min="0" name="jquery" max="4" defaultValue="0" className="slider" onChange={this.handleChange} />
</div>
<div>
<label>Html</label> <span>0</span>
<input type="range"  name="Html"  min="0" max="4" defaultValue="0" className="slider" onChange={this.handleChange} />
</div>
<div>
<label>angular</label> <span>0</span>
<input type="range"  name="angular"   min="0" max="4" defaultValue="0" className="slider" onChange={this.handleChange} />
</div>
</div>
<button className="btn btn-info btn-block" type="submit">Send</button>

  </form>
      </div>
    )
  }
}