import React, { useEffect, useState } from "react";
import { Grid, Box } from '@mui/material'
import LineChart from "../lineChart";
import DougnutChart from '../dougnutChart'
import { apiBaseUrl } from "../../API";

const Revenue = () => {

  const [doughnutProp, setDoughnutProp] = useState({
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
      align: 'left',
      x: 35,
      y: 35,
      margin: 0
    },
    legend: {
      align: "middle",
      layout: "vertical",
      itemMarginTop: 10,
      itemMarginBottom: 10,
      useHTML: true,
      itemHoverStyle: {
        color: '#ccc',
      },
      x: 30,
      y: -10,
      labelFormatter: function () {
        return '<div style="text-align: left">' + this.name + ' ' + this.y + '</div>';
      },

      itemStyle: {
        font: "14px Trebuchet MS, Verdana, sans-serif",
        color: "#fff",

      },
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
      name: 'assets',
      data: [{
        name: 'Spain',
        y: 10,

      },
      {
        name: 'Poland',
        y: 30,
        dataLabels: {
          enabled: true,
          align: 'center',
          distance: -150,
          x: -10,
          format: 'Total Revenue',
          style: {
            fontSize: '15px'
          }
        }
      }]
    }]
  });

  useEffect(() => {
    const getResourcesRevenue = async () => {
      await fetch(apiBaseUrl+'/transfer/resources').then(response => response.json())
        .then(data => {
          let recordSeries = [];
          for (const item of data.data) {
            let e = { name: item._id.token, y: item.total, z : item.total }
            recordSeries.push(e);
          }
          let doughnutChart = {
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
              align: 'left',
              x: 35,
              y: 35,
              margin: 0
            },
            legend: {
              align: "middle",
              layout: "vertical",
              itemMarginTop: 10,
              itemMarginBottom: 10,
              useHTML: true,
              itemHoverStyle: {
                color: '#ccc',
              },
              x: 30,
              y: -10,
              labelFormatter: function () {
                return '<div style="text-align: left">' + this.name + ' ' + this.y + '</div>';
              },

              itemStyle: {
                font: "14px Trebuchet MS, Verdana, sans-serif",
                color: "#fff",

              },
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
              name: 'assets',
              data: recordSeries
            }]
          }

          setDoughnutProp(doughnutChart);
        })
        .catch(error => {
          console.log(error);
        });
    }

    getResourcesRevenue()
  }, [])

  return (
    <Box>
      <Grid container spacing={6} columns={{ xs: '8', sm: '12' }}>
        <Grid item xs={8} sm={8} className="line_chart_wrapper">
          <LineChart />
        </Grid>
        <Grid item xs={8} sm={4} className="line_chart_wrapper">
          <DougnutChart id="container" doughnutProp={doughnutProp} />
        </Grid>
      </Grid>
    </Box>

  )

};

export default Revenue;
