import React, {useEffect, useState} from "react";
import HighchartsReact from "highcharts-react-official";

import {Card} from '@mui/material'
import Highcharts from 'highcharts/highstock';
import variablePie from "highcharts/modules/variable-pie.js";

variablePie(Highcharts);



const Revenue = () => {
    useEffect(()=>{
        Highcharts.chart('container', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                accessibility: {
                    description: 'Months of the year'
                }
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Tokyo',
                marker: {
                    symbol: 'square'
                },
                data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
                    y: 26.4,
                    accessibility: {
                        description: 'Sunny symbol, this is the warmest point in the chart.'
                    }
                }, 22.8, 17.5, 12.1, 7.6]
        
            }, {
                name: 'Bergen',
                marker: {
                    symbol: 'diamond'
                },
                data: [{
                    y: 1.5,
                    accessibility: {
                        description: 'Snowy symbol, this is the coldest point in the chart.'
                    }
                }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
            }]
        });
    
},[])
 
    
return (
    <Card>
      <div id='container'></div>
    </Card> 
  );
};

export default Revenue;
