import React from 'react';
import d3 from "d3";

export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {"label":"A", "value":10},
        {"label":"B", "value":20},
        {"label":"C", "value":30},
        {"label":"D", "value":40},
        {"label":"E", "value":30},
        {"label":"F", "value":40}
      ]
    };
  }

  componentDidMount() {
    this.renderPieChart(this.state.data);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  };

  componentWillUpdate() {
    this.removePieChart();
    this.renderPieChart(this.state.data);
  };

  changeDataName(index, e) {
    var prevData = this.state.data;
    prevData[index].label = e.target.value;

    this.setState({
      data: prevData
    });
  };

  changeDataValue(index, e) {
    var prevData = this.state.data;
    prevData[index].value = e.target.value;

    this.setState({
      data: prevData
    });
  };

  removePieChart() {
    d3.select("#pie-chart").selectAll("svg").remove();
  };

  renderPieChart(dataset) {
    var w = this.props.width;
    var h = this.props.height;
    var r = h/2;
    var color = d3.scale.category20c();

    var svg = d3.select('#pie-chart').append("svg").data([dataset])
      .attr({
        height: h,
        width: w
      })
      .append("g")
      .attr({
        transform: "translate(" + r + "," + r + ")"
      });

    var pie = d3.layout.pie()
      .value(function(d){
        return d.value;
      }).sort(null);

// declare an arc generator function
    var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
    var arcs = svg.selectAll("g").data(pie).enter()
      .append("g")
      .attr({
        class: "slice"
      });

    arcs.append("path")
      .attr("fill", function(d, i){
        return color(i);
      })
      .attr("d", function (d) {
        return arc(d);
      });

// add the text
    arcs.append("text")
      .attr("transform", function(d){
        d.innerRadius = 0;
        d.outerRadius = r;
        return "translate(" + arc.centroid(d) + ")";
      })
      .attr("text-anchor", "middle")
      .text( function(d, i) {
        return dataset[i].label;
      });
  }

  render() {
    var dataPointEdits = this.state.data.map((dataPoint, index) => {
      return <div key={index}>
        <input type="text" defaultValue={dataPoint.label} onChange={this.changeDataName.bind(this, index)} />
        <input type="number" defaultValue={dataPoint.value} onChange={this.changeDataValue.bind(this, index)} />
      </div>
    });

    return (
      <div id="pie-chart">
        <h2>Pie-chart</h2>
        {dataPointEdits}
      </div>
    );
  }
}