import { useEffect } from 'react';
import Highcharts from 'highcharts/highstock'
import variablePie from "highcharts/modules/variable-pie.js";

variablePie(Highcharts);

const DougnutChart=(props)=>{

  useEffect(()=>{
    
    Highcharts.chart(props.id, {
      chart: {
        type: 'variablepie',
        
      },
      title: {
        text: 'Revenue Resources'
      },
      legend: {
        align: "middle",
        // verticalAlign: "bottom",
        layout: "vertical",
        useHTML: true,
         x:50,
         y:-20,
        labelFormatter: function() {
            return '<div style="text-align: left">' + this.name +' ' + this.y + '</div>';
        },
        
        itemStyle: {
          font: "14px Trebuchet MS, Verdana, sans-serif",
          color: "#333333"
        }
      },
      plotOptions: {
        pie:{
          
          dataLabels: {
            connectorWidth: 0
        }
        },
        series: {
          stacking: "normal",
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          size: 85
        }
      },
      series: [{
        minPointSize: 1,
        innerSize: '99%',
        borderWidth: 20,
        borderColor: null,
        slicedOffset: 2,
        dataLabels: {
          connectorWidth: 0
      },
        zMin: 1,
        y:-100,
        name: 'countries',
        data: [{
          name: 'Spain',
          y: 10,
          z: 30,
          
        }, {
          name: 'France',
          y: 20,
          z: 30,
          
        }, {
          name: 'Poland',
          y: 30,
          z: 30,
          dataLabels: {
            enabled: true,
            align:'center',
            distance: -150,
            format: 'Total Revenue',
            style: {
                fontSize: '15px'
            }
        }
        }]
      }]
    });
  },[props.id])
  
  return(
    <div id={props.id}></div>
  )
}

export default DougnutChart;