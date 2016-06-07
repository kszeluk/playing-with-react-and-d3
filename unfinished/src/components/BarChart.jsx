import React from 'react';
import d3 from "d3";

export default class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datasetLength: 100
    };
  }

  componentDidMount() {
    var dataset = this.randomDataSet(this.state.datasetLength);
    this.renderBarChart(dataset);
  }

  randomDataSet(num) {
    return Array.apply(null, {length: num}).map(() => Math.random() * 100);
  };

  randomizeData() {
    var dataset = this.randomDataSet(this.state.datasetLength);
    this.removeBarChart();
    this.renderBarChart(dataset);
  };

  changeDatasetSize(e) {
    var value = e.target.value;
    var dataset = this.randomDataSet(value);
    this.removeBarChart();
    this.renderBarChart(dataset);
    this.setState({
      datasetLength: value
    });
  };

  removeBarChart() {
    d3.select("#bar-chart").selectAll("svg").remove();
  };

  renderBarChart(dataset) {
    // Dimensions
    var h = this.props.height;
    var w = this.props.width;

    // Scaling variables
    var maxValue = d3.max(dataset);
    var colors = ["tomato", "steelblue"];

    // Scaling to fit data in the SVG
    var yScale = d3.scale.linear().domain([0, maxValue * 1.1]).range([0, h]);
    var xScale = d3.scale.ordinal().domain(dataset).rangeBands([0, w], 0.1, 0);
    var colorScale = d3.scale.linear().domain([0, maxValue]).range(colors);

    var svg = d3.select("#bar-chart").append("svg").attr({height: h, width: w});
    var rects = svg.selectAll("rect").data(dataset);

    rects.enter()
      .append("rect")
      .attr({
        class: "bar",
        x: function(d) {return xScale(d);},
        y: function(d) {return h - yScale(d);},
        height: function(d) {return yScale(d);},
        width: function() {return xScale.rangeBand();},
        fill: colorScale
      });
  }

  render() {
    return (
      <div id="bar-chart">
        <h2>Bar-chart</h2>
        <div className="controls">
          <button onClick={this.randomizeData.bind(this)}>Randomize Dataset</button>
          <input type="number" onChange={this.changeDatasetSize.bind(this)} defaultValue={100} />
        </div>
      </div>
    );
  }
}