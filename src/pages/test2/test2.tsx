
import React from 'react'
import * as echarts from 'echarts/core'
import { LineChart, LineSeriesOption, PieChart, PieSeriesOption } from 'echarts/charts'
import { TitleComponent, TitleComponentOption, DatasetComponent, DatasetComponentOption, GridComponent, GridComponentOption, TooltipComponent, TooltipComponentOption } from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

type ECOption = echarts.ComposeOption<
| TitleComponentOption
| DatasetComponentOption
| LineSeriesOption
| GridComponentOption
| TooltipComponentOption
| PieSeriesOption
>

echarts.use([
  LineChart,
  TitleComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  DatasetComponent,
  GridComponent,
  TooltipComponent,
  PieChart
])

const options: ECOption = {
  grid: { top: '55%' },
  tooltip: {
    trigger: 'axis',
    showContent: false
  },
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
      ['Milk Tea', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
      ['Matcha Latte', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      ['Cheese Cocoa', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      ['Walnut Brownie', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{
    type: 'line',
    smooth: true,
    seriesLayoutBy: 'row',
    emphasis: { focus: 'series' }
  },
  {
    type: 'line',
    smooth: true,
    seriesLayoutBy: 'row',
    emphasis: { focus: 'series' }
  },
  {
    type: 'line',
    smooth: true,
    seriesLayoutBy: 'row',
    emphasis: { focus: 'series' }
  },
  {
    type: 'pie',
    id: 'pie',
    radius: '30%',
    center: ['50%', '25%'],
    emphasis: {
      focus: 'self'
    },
    label: {
      formatter: '{b}: {@2012} ({d}%)'
    },
    encode: {
      itemName: 'product',
      value: '2012',
      tooltip: '2012'
    }
  }
  ]
}

const Test2: React.FC = () => {
  React.useEffect(() => {
    if (chartRef.current !== null) {
      const e = echarts.init(chartRef.current)
      e.setOption(options)
    }
  }, [])
  const chartRef = React.createRef<HTMLDivElement>()
  return (
        <div>
            <div ref={chartRef} style={{ height: '500px', width: '600px' }}></div>
        </div>
  )
}

export default Test2
