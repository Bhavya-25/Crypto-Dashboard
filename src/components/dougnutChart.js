import { useEffect } from 'react';
import Highcharts from 'highcharts/highstock'
import variablePie from "highcharts/modules/variable-pie.js";

variablePie(Highcharts);

const DougnutChart=()=>{

  useEffect(()=>{
    Highcharts.chart('container', {
      chart: {
        type: 'variablepie',
        
      },
      title: {
        text: 'Vistor Distribution'
      },
      legend: {
        align: "top",
        verticalAlign: "right",
        layout: "vertical",
        x: 5,
        y: 100,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        itemStyle: {
          font: "14px Trebuchet MS, Verdana, sans-serif",
          color: "#333333"
        }
      },
      plotOptions: {
        series: {
          stacking: "normal",
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          size: 185
        }
      },
      series: [{
        minPointSize: 1,
        innerSize: '60%',
        zMin: 0,
        name: 'countries',
        data: [{
          name: 'Spain',
          y: 10,
          z: 30
        }, {
          name: 'France',
          y: 20,
          z: 30
        }, {
          name: 'Poland',
          y: 30,
          z: 30
        }, {
          name: 'Italy',
          y: 30,
          z: 30
        }, {
          name: 'Switzerland',
          y: 50,
          z: 30
        }, {
          name: 'Germany',
          y: 60,
          z: 30
        }]
      }]
    });
  },[])
  
  return(
    <div id="container"></div>
  )
}

export default DougnutChart;