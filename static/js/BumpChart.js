// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  x: [1, 2, 3],
  y: [2.22, 2.67, 7],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '공원',
  line: {
    color: 'rgba(248,118,109,1)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(248,118,109,1)',
    line: {
      color: 'rgba(248,118,109,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 7.55905511811,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '공원',
  showlegend: true,
  text: ['var: 1<br />value:  2.22<br />text: 공원', 'var: 2<br />value:  2.67<br />text: 공원', 'var: 3<br />value:  7.00<br />text: 공원'],
  textsrc: 'adellejang:5:58a60f',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:5:41eb3e',
  yaxis: 'y',
  ysrc: 'adellejang:5:b0e9bb'
};
trace2 = {
  x: [1, 2, 3],
  y: [2.94, 5.55, 5.98],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '맛집',
  line: {
    color: 'rgba(205,150,0,1)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(205,150,0,1)',
    line: {
      color: 'rgba(205,150,0,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 7.55905511811,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '맛집',
  showlegend: true,
  text: ['var: 1<br />value:  2.94<br />text: 맛집', 'var: 2<br />value:  5.55<br />text: 맛집', 'var: 3<br />value:  5.98<br />text: 맛집'],
  textsrc: 'adellejang:5:c30a0e',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:5:380df6',
  yaxis: 'y',
  ysrc: 'adellejang:5:4be9aa'
};
trace3 = {
  x: [1, 2, 3],
  y: [2.26, 2.68, 10.23],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '분양',
  line: {
    color: 'rgba(124,174,0,1)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(124,174,0,1)',
    line: {
      color: 'rgba(124,174,0,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 7.55905511811,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '분양',
  showlegend: true,
  text: ['var: 1<br />value:  2.26<br />text: 분양', 'var: 2<br />value:  2.68<br />text: 분양', 'var: 3<br />value: 10.23<br />text: 분양'],
  textsrc: 'adellejang:5:295b99',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:5:d1518a',
  yaxis: 'y',
  ysrc: 'adellejang:5:4de594'
};
trace4 = {
  x: [1, 2, 3],
  y: [0, 2.67, 0.5],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '삼둥이',
  line: {
    color: 'rgba(0,190,103,1)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(0,190,103,1)',
    line: {
      color: 'rgba(0,190,103,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 7.55905511811,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '삼둥이',
  showlegend: true,
  text: ['var: 1<br />value:  0.00<br />text: 삼둥이', 'var: 2<br />value:  2.67<br />text: 삼둥이', 'var: 3<br />value:  0.50<br />text: 삼둥이'],
  textsrc: 'adellejang:5:f171df',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:5:57e36d',
  yaxis: 'y',
  ysrc: 'adellejang:5:a1b63b'
};
trace5 = {
  x: [1, 2, 3],
  y: [10.62, 10.32, 15.75],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '신도시',
  line: {
    color: 'rgba(0,191,196,1)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(0,191,196,1)',
    line: {
      color: 'rgba(0,191,196,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 7.55905511811,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '신도시',
  showlegend: true,
  text: ['var: 1<br />value: 10.62<br />text: 신도시', 'var: 2<br />value: 10.32<br />text: 신도시', 'var: 3<br />value: 15.75<br />text: 신도시'],
  textsrc: 'adellejang:5:d80a8f',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:5:d0fb35',
  yaxis: 'y',
  ysrc: 'adellejang:5:1e2bcd'
};
trace6 = {
  x: [1, 2, 3],
  y: [5.13, 4.87, 14.55],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '아파트',
  line: {
    color: 'rgba(0,169,255,1)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(0,169,255,1)',
    line: {
      color: 'rgba(0,169,255,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 7.55905511811,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '아파트',
  showlegend: true,
  text: ['var: 1<br />value:  5.13<br />text: 아파트', 'var: 2<br />value:  4.87<br />text: 아파트', 'var: 3<br />value: 14.55<br />text: 아파트'],
  textsrc: 'adellejang:5:db402d',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:5:adeaea',
  yaxis: 'y',
  ysrc: 'adellejang:5:a7674b'
};
trace7 = {
  x: [1, 2, 3],
  y: [2.13, 1.2, 9.28],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '오피스텔',
  line: {
    color: 'rgba(199,124,255,1)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(199,124,255,1)',
    line: {
      color: 'rgba(199,124,255,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 7.55905511811,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '오피스텔',
  showlegend: true,
  text: ['var: 1<br />value:  2.13<br />text: 오피스텔', 'var: 2<br />value:  1.20<br />text: 오피스텔', 'var: 3<br />value:  9.28<br />text: 오피스텔'],
  textsrc: 'adellejang:5:9af47f',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:5:64cc1c',
  yaxis: 'y',
  ysrc: 'adellejang:5:35b021'
};
trace8 = {
  x: [1, 2, 3],
  y: [1.88, 2.95, 1.69],
  hoverinfo: 'text',
  hoveron: 'points',
  legendgroup: '호텔',
  line: {
    color: 'rgba(255,97,204,1)',
    dash: 'solid',
    width: 4.53543307087
  },
  marker: {
    autocolorscale: false,
    color: 'rgba(255,97,204,1)',
    line: {
      color: 'rgba(255,97,204,1)',
      width: 1.88976377953
    },
    opacity: 1,
    size: 7.55905511811,
    symbol: 'circle'
  },
  mode: 'markers+lines',
  name: '호텔',
  showlegend: true,
  text: ['var: 1<br />value:  1.88<br />text: 호텔', 'var: 2<br />value:  2.95<br />text: 호텔', 'var: 3<br />value:  1.69<br />text: 호텔'],
  textsrc: 'adellejang:5:e443c7',
  type: 'scatter',
  xaxis: 'x',
  xsrc: 'adellejang:5:e992d7',
  yaxis: 'y',
  ysrc: 'adellejang:5:99637e'
};
data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];
layout = {
  annotations: [
    {
      x: 1.02,
      y: 1,
      ax: 0,
      ay: 0,
      font: {
        color: 'rgba(0,0,0,1)',
        family: '',
        size: 14.6118721461
      },
      showarrow: false,
      text: 'text',
      textangle: 0,
      xanchor: 'left',
      xref: 'paper',
      yanchor: 'bottom',
      yref: 'paper'
    }
  ],
  font: {
    color: 'rgba(0,0,0,1)',
    family: '',
    size: 14.6118721461
  },
  hovermode: 'closest',
  legend: {
    y: 0.908290875405,
    bgcolor: 'rgba(255,255,255,1)',
    bordercolor: 'transparent',
    borderwidth: 1.88976377953,
    font: {
      color: 'rgba(0,0,0,1)',
      family: '',
      size: 11.6894977169
    }
  },
  margin: {
    r: 7.30593607306,
    t: 44.6220789686,
    b: 29.3526725759,
    l: 22.6484018265
  },
  paper_bgcolor: 'rgba(255,255,255,1)',
  plot_bgcolor: 'rgba(235,235,235,1)',
  shapes: [
    {
      line: {width: 0},
      type: 'rect',
      x0: 0,
      x1: 1,
      xref: 'paper',
      y0: 0,
      y1: 1,
      yref: 'paper'
    }
  ],
  showlegend: true,
  title: 'Bump Chart',
  titlefont: {
    color: 'rgba(0,0,0,1)',
    family: '',
    size: 17.5342465753
  },
  xaxis: {
    anchor: 'y',
    autorange: false,
    domain: [0, 1],
    gridcolor: 'rgba(255,255,255,1)',
    gridwidth: 0.664176006642,
    hoverformat: '.2f',
    linewidth: 0,
    range: [0.4, 3.6],
    showgrid: true,
    showline: false,
    showticklabels: true,
    tickangle: 0,
    tickcolor: 'rgba(51,51,51,1)',
    tickfont: {
      color: 'rgba(77,77,77,1)',
      family: '',
      size: 11.6894977169
    },
    ticklen: 3.65296803653,
    tickmode: 'array',
    ticks: 'outside',
    tickwidth: 0.664176006642,
    title: 'Duration',
    titlefont: {
      color: 'rgba(0,0,0,1)',
      family: '',
      size: 14.6118721461
    },
    type: 'linear',
    zeroline: false
  },
  yaxis: {
    anchor: 'x',
    autorange: false,
    domain: [0, 1],
    gridcolor: 'rgba(255,255,255,1)',
    gridwidth: 0.664176006642,
    hoverformat: '.2f',
    linewidth: 0,
    range: [-0.7875, 16.5375],
    showgrid: true,
    showline: false,
    showticklabels: true,
    tickangle: 0,
    tickcolor: 'rgba(51,51,51,1)',
    tickfont: {
      color: 'rgba(77,77,77,1)',
      family: '',
      size: 11.6894977169
    },
    ticklen: 3.65296803653,
    tickmode: 'array',
    ticks: 'outside',
    ticktextsrc: 'adellejang:5:958a44',
    tickvalssrc: 'adellejang:5:457829',
    tickwidth: 0.664176006642,
    title: '',
    titlefont: {
      color: 'rgba(0,0,0,1)',
      family: '',
      size: 14.6118721461
    },
    type: 'linear',
    zeroline: false
  }
};
Plotly.plot('bumpchart', {
  data: data,
  layout: layout
});
