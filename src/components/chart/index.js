import React, { useEffect, useState, useCallback } from "react";
import HighchartsReact from "highcharts-react-official";

const Chart = () => {
  // https://iexcloud.io/docs/api/#historical-prices
  const [chartData, setChartDatat] = useState();
  const [closeData, setCloseData] = useState();
  const [axisLabel, setAxisLabel] = useState();
  const [volumeData, setVolumeData] = useState();


  const getChartData = useCallback(async () => {
    try {
      await fetch(`https://cloud.iexapis.com/stable/stock/aapl/chart/1m?token=pk_4ef2a2a96cd948499bb9ab2bf93a8476`)
        .then(res => res.json())
        .then(response => {
          setChartDatat(response);
          console.log('response', response);
          const closeValue = response.map(a => a.close);
          const aXisValue = response.map(a => a.label);
          const volumeValue = response.map(a => a.volume);

          const tickData = response.map((item) => {
            return { [item.label]: item }
          });
          
          console.log('tickData', tickData);


          setCloseData(closeValue);
          setAxisLabel(aXisValue);
          setVolumeData(volumeValue);
        });
    } catch (e) {}
  }, []);

  useEffect(()=> {
    getChartData()
  }, [getChartData]);

  return (
    <>
      { closeData !== undefined && volumeData !== undefined &&
      <HighchartsReact options={{
        series: [
          {
            name: 'Close value',
            showInLegend: false,
            data: closeData,
            yAxis: 0
          },
          {
            name: 'Volume',
            showInLegend: false,
            type: 'column',
            data: volumeData,
            yAxis: 1,
          }
        ],
        tooltip: {
          positioner: (labelWidth, labelHeight, point) =>  {
            return { x: 50, y: 15 };
          },
          formatter: function () {

            console.log('this', this)
          },
          shadow: false,
          borderWidth: 0,
        },
        xAxis: {
          categories: axisLabel,
        },
        yAxis: [
          {
            title: {
              enabled: false
            },
            opposite: true,
            min: Math.min(...closeData),
            max: Math.max(...closeData),
            height: '80%'
          },
          {
            visible: false,
            min: 0,
            max: Math.max(...volumeData),
            height: '20%',
            top: '80%',
          }
        ],
      }} />
      }
    </>
  )
};

export default Chart;