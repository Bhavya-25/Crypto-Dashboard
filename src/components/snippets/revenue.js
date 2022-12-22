import React from "react";
import { Grid,Box } from '@mui/material'
import LineChart from "../lineChart";
import DougnutChart from '../dougnutChart'

const Revenue = () => {
  let doughnutProp = {
    chart: {
      type: 'variablepie',
      margin: 0,
      spacingTop: 0,
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
    },
    title: {
      text: 'Revenue Resources',
      x: 20,
      y: 40,
      margin: 0
    },
    legend: {
      align: "middle",
      layout: "vertical",
      useHTML: true,
      x: 70,
      y: -10,
      labelFormatter: function () {
        return '<div style="text-align: left">' + this.name + ' ' + this.y + '</div>';
      },

      itemStyle: {
        font: "14px Trebuchet MS, Verdana, sans-serif",
        color: "#333333"
      }
    },
    plotOptions: {
      pie: {

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
        size: 155,
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
      y: -150,
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
          align: 'center',
          distance: -150,
          format: 'Total Revenue',
          style: {
            fontSize: '15px'
          }
        }
      }]
    }]
  }
  return (
    <Box>
      <Grid container spacing={6} columns={{ xs: '8', sm: '12' }}>
        <Grid item xs={8} sm={8}>
          <LineChart />
        </Grid>
        <Grid item xs={8} sm={4}>
          <DougnutChart id="container" doughnutProp={doughnutProp} />
        </Grid>
      </Grid>
    </Box>

  )

};

export default Revenue;
