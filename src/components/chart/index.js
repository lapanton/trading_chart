import React, { useEffect, useState, useCallback } from "react";
import HighchartsReact from "highcharts-react-official";
import ControlButtons from "./ControlButtons";
import DateChoice from "./DateChoice";
import {WrapActionButtons} from "./styled";

const Chart = () => {
  const [chartDataDefault, setChartDataDefault] = useState();
  const [chartData, setChartData] = useState();
  const [updateMinDate, setUpdateMinDate] = useState();
  const [updateMaxDate, setUpdateMaxDate] = useState();


  const getChartData = useCallback(async () => {
    try {
      // I know this is not secure
      await fetch(`https://cloud.iexapis.com/stable/stock/aapl/chart/1m?token=pk_e19d209808964780b0406c1806cd1d37`)
        .then(res => res.json())
        .then(response => {
          setChartDataDefault(response)
          setChartData(response);
        });
    } catch (e) {

    }
  }, []);

  useEffect(()=> {
    getChartData(updateMinDate, updateMaxDate)
  }, [getChartData]);

  useEffect(() => {
    if (updateMinDate !== undefined && updateMaxDate !== undefined) {
      const range = chartDataDefault.filter((item) => {
        return updateMinDate.format("YYYY-MM-DD") <= item.date && item.date <= updateMaxDate.format("YYYY-MM-DD")
      });
      setChartData(range);
    }
  }, [updateMinDate, updateMaxDate])

  return (
    <>
      { chartData !== undefined &&
        <>
          <WrapActionButtons>
            <ControlButtons />
            <DateChoice
              minDate={chartDataDefault[0].date}
              maxDate={chartDataDefault[chartDataDefault.length - 1].date}
              setUpdateMinDate={setUpdateMinDate}
              setUpdateMaxDate={setUpdateMaxDate}
              updateMinDate={updateMinDate}
              updateMaxDate={updateMaxDate}
            />
          </WrapActionButtons>
          <HighchartsReact options={{
            title: null,
            series: [
                {
                  name: 'Close value',
                  showInLegend: false,
                  data: chartData.map(a => a.close),
                  yAxis: 0
                },
                {
                  name: 'Volume',
                  showInLegend: false,
                  type: 'column',
                  data: chartData.map(a => a.volume),
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
              categories: chartData.map(a => new Date(a.label).toLocaleDateString()),
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
                min: Math.min(...chartData.map(a => a.close)),
                max: Math.max(...chartData.map(a => a.close)),
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
                max: Math.max(...chartData.map(a => a.volume)),
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