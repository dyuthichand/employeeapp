import React, { Component } from "react";
import SkillChartDemo from "./SkillChartDemo.js"

class ChartDisplay extends Component {
  constructor(props) {
      super(props);
}

  render() {
    return (
<SkillChartDemo techId={this.props.statustechid}   empId={this.props.statusempId}  result={this.props.result} />
    );
  }
}
export default ChartDisplay;
