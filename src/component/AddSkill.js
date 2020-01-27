import React, { Component } from "react";

  class AddSkill extends Component {
      constructor(props) {
          super(props);


    }

  render() {
    return (
        <div className="addskill mb-3">
          <button  onClick={this.props.action} type="button" className="btn btn-warning">Add Skills</button>
        </div>



    )
}
}
export default AddSkill
