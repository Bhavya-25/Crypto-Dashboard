import { useEffect,useState } from 'react';
import Highcharts from 'highcharts/highstock'
import variablePie from "highcharts/modules/variable-pie.js";
import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from '../API';

variablePie(Highcharts);

const LineChart = () => {

    const navigate = useNavigate();

    useEffect(() => {

        let session = sessionStorage.getItem('token')
        if (session === null) {
            navigate('/')
        }
        const getStatisticsRevenue = async () => {
            await fetch(apiBaseUrl+'/transfer/revenue').then(response => response.json())
            .then(data => {
                Highcharts.chart('line-chart', {
                    chart: {
                        type: 'spline',
                        spacingLeft: 20,
                        spacingBottom: 40,
                        spacingRight: 30,
                    },
                    title: {
                        text: 'Revenue Statisitics',
                        align: 'left',
                        x: 25,
                        y: 35
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
        
                        },
                        labels: {
        
                        }
                    },
                    legend: {
                        enabled: true,
                        align: 'right',
                        verticalAlign: 'top',
                        borderWidth: 0,
                        itemMarginTop: -10,
                        itemMarginBottom: 5,
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
                        name: 'Revenue',
                        marker: {
                            symbol: 'square'
                        },
                        data: [
                            data.data[0] !==undefined ?data.data[0].total :0.0, 
                            data.data[1] !==undefined ?data.data[1].total :0.0, 
                            data.data[2] !==undefined ?data.data[2].total :0.0 , 
                            data.data[3] !==undefined ?data.data[3].total :0.0, 
                            data.data[4] !==undefined ?data.data[4].total :0.0, 
                            data.data[5] !==undefined ?data.data[5].total :0.0, 
                            data.data[6] !==undefined ?data.data[6].total :0.0, 
                            data.data[7] !==undefined ?data.data[7].total :0.0, 
                            data.data[8] !==undefined ?data.data[8].total :0.0, 
                            data.data[9] !==undefined ?data.data[9].total :0.0, 
                            data.data[10] !==undefined ?data.data[10].total :0.0, 
                            data.data[11] !==undefined ?data.data[11].total :0.0]
        
                    },
                ]
                });
            })
            .catch(error => {
                console.log(error);
            });;
        }

        getStatisticsRevenue()

        
    }, [navigate])

    return (
        <div id="line-chart"></div>
    )
}

export default LineChart;