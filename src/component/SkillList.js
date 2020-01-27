import React, { Component } from "react";
import TagCloud from "react-tag-cloud";
import randomColor from "randomcolor";

class SkillList extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }
  tagcloud = (props) => {
    var cloudArray = [],
      techlist = [],
      techArray = [];
    this.props.result.forEach(a => {
      techArray.push(...a.employee_tech.map((b, i) => b.technology));
      cloudArray.push(
        ...a.employee_tech.map((b, i) => [b.technology, b.profValue])
      );
    });
    techArray = [...new Set(techArray)];
    cloudArray.sort();
    var htmlSum = 0;
    var arr = [],
      cc = [];
    for (let eachTech = 0; eachTech < cloudArray.length; eachTech++) {
      
     
      cloudArray.forEach(eachRow => {
        if (eachRow[0] === techArray[eachTech]) {
          htmlSum += Number(eachRow[1]);
        } else if (htmlSum !== 0) {
          cc.push([htmlSum, eachRow[0]]);
          htmlSum = 0;
        }
      });
    }
  cc.sort(function(a, b) {
      return a[0] < b[0] ? 1 : -1;
    });
    const styles = {
      0: {
       
      fontSize: 100,
      fontWeight: "bold"
      },
      1: {
        
        fontSize: 75,
        fontWeight: "bold"
        },
      2: {
        
      fontSize:50,
      opacity: 0.7
      },
      3: {
        
        fontSize: 35,
        opacity: 0.7
        },
        4: {
        
          fontSize: 25,
          opacity: 0.7
          },
         5: {
        
            fontSize: 20,
            opacity: 0.7
            },
           6: {
        
              fontSize: 16,
              opacity: 0.7
              }
    };

techlist.push(...cc.map((each,i) =><div key={i}  onClick={() => this.props.action(0,each[1])} style={styles[i]}>{each[1]}</div> ))
return techlist;
  };

  render() {
    const TechCloud = this.tagcloud();
  return (
      <div className="app-outer">
        <h1>Skill Cloud</h1>
        <div className="app-inner">
          <TagCloud
            className="tag-cloud"
            style={{
              fontFamily: "sans-serif",
              fontSize: 30,
              fontWeight: "bold",
              fontStyle: "italic",
              color: () => randomColor(),
              padding: 5,
              width: "100%",
              height: "100%"
            }}
          >
            {TechCloud}
          </TagCloud>
        </div>
      </div>
    );
  }
}
export default SkillList;
