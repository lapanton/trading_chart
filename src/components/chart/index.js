import React, { useEffect, useState, useCallback } from "react";
import HighchartsReact from "highcharts-react-official";
import ControlButtons from "./ControlButtons";

const Chart = () => {
  const [chartData, setChartData] = useState();
  const [closeData, setCloseData] = useState();
  const [axisLabel, setAxisLabel] = useState();
  const [volumeData, setVolumeData] = useState();


  const getChartData = useCallback(async () => {
    try {
      await fetch(`https://cloud.iexapis.com/stable/stock/aapl/chart/1m?token=pk_0762e40aebbb4ea2b77f119e43f4fce2`)
        .then(res => res.json())
        .then(response => {
          setChartData(response);
          const closeValue = response.map(a => a.close);
          const aXisValue = response.map(a => new Date(a.label).toLocaleDateString());
          const volumeValue = response.map(a => a.volume);

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
        <>
          <ControlButtons />
          <HighchartsReact options={{
            title: null,
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
                const details = chartData[this.point.index];
                return `<ul class="list-wrapper">
                            <li class="list-inner">
                                <div>Open</div>
                                <div>${details.open}</div>
                            </li>
                            <li>
                                <div>High</div>
                                <div>${details.high}</div>
                            </li>
                            <li>
                                <div>Low</div>
                                <div>${details.low}</div>
                            </li>
                            <li>
                                <div>Close</div>
                                <div>${details.close}</div>
                            </li>
                            <li>
                                <div>Volume</div>
                                <div>${details.volume}</div>
                            </li>
                            <li>
                                <div>% Change</div>
                                <div>${details.changePercent}</div>
                            </li>
                        </ul>
    `
              },
          shadow: false,
          shape: 'square',
          borderWidth: 1,
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          borderRadius: 10,
          useHTML: true
        },
            xAxis: {
              categories: axisLabel,
              crosshair: {
                width: '1',
                color: '#ccc',
                dashStyle: 'LongDash'
              },
            },
            yAxis: [
              {
                title: {
                  enabled: false
                },
                opposite: true,
                min: Math.min(...closeData),
                max: Math.max(...closeData),
                height: '80%',
                crosshair: {
                  width: '1',
                  color: '#ccc',
                  dashStyle: 'LongDash'
                },
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
        </>
      }
    </>
  )
}

export default Chart;