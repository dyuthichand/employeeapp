import React, { Component } from "react";
import axios from 'axios';
  class AddSkillForm extends Component {
      constructor(props) {
          super(props);
          this.state = {
       php: '',
        css: '',
         js: '',
          VueJs: '',
           jquery: '',
            Html: '',
       angular: ''
     };
    }
handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }
  render() {
    return (
        <div >
    <form className="text-left border border-light p-5" action="#!">

        <input type="text" name="employee_name" className="form-control mb-4" placeholder="Employee Name"/>
  <div><label>Manager</label>
        <select className="browser-default manager-select mb-4">
            <option value="" disabled>Choose option</option>
            <option value="manager1" selected>Manager1</option>
            <option value="manager1">Manager2</option>
        </select>
      </div>
<h2>SKILLS</h2>
<div className="text-center">
<div>
  <label>php</label> <span>{this.state.php}</span>
  <input name="php" type="range" min="0" max="100" defaultValue="0" className="slider"  value={this.state.value}  onChange={this.handleChange} />
</div>
<div>
  <label>css</label> <span>{this.state.css}</span>
  <input type="range"  name="css" min="0" max="100" defaultValue="0" className="slider"  value={this.state.value}  onChange={this.handleChange} />
</div>
<div>
  <label>js</label> <span>{this.state.js}</span>
  <input type="range" name="js" min="0" max="100" defaultValue="0" className="slider"  value={this.state.value}  onChange={this.handleChange} />
</div>
<div>
  <label>VueJs</label> <span>{this.state.VueJs}</span>
  <input type="range" name="VueJs" min="0" max="100" defaultValue="0" className="slider"  value={this.state.value}  onChange={this.handleChange} />
</div>
<div>
  <label>jquery</label> <span>{this.state.jquery}</span>
  <input type="range" min="0" name="jquery" max="100" defaultValue="0" className="slider" onChange={this.handleChange} />
</div>
<div>
  <label>Html</label> <span>{this.state.Html}</span>
  <input type="range"  name="Html"  min="0" max="100" defaultValue="0" className="slider" onChange={this.handleChange} />
</div>
<div>
  <label>angular</label> <span>{this.state.angular}</span>
  <input type="range"  name="angular"   min="0" max="100" defaultValue="0" className="slider" onChange={this.handleChange} />
</div>
</div>
 <button className="btn btn-info btn-block" type="submit">Send</button>

    </form>
</div>

    )
}
}
export default AddSkillForm
