import { LineChart, AreaChart, Area, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 700, pv: 1400, amt: 2400},
  {name: 'Page C', uv: 500, pv: 55400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 400, amt: 3400},
  {name: 'Page C', uv: 500, pv: 55400, amt: 3400},
];
const data2 = [
  {
    "date": "23/05/2021",
    "nav": 3000,
  },
  {
    "date": "24/05/2021",
    "nav": 3400,
  },
  {
    "date": "25/05/2021",
    "nav": 3100,
  },
  {
    "date": "26/05/2021",
    "nav": 2400,
  },
  {
    "date": "27/05/2021",
    "nav": 1200,
  },
  {
    "date": "29/05/2021",
    "nav": 3700,
  },
  // {
  //   "name": "Page B",
  //   "uv": 3000,
  //   "pv": 1398,
  //   "amt": 2210
  // },
  // {
  //   "name": "Page C",
  //   "uv": 2000,
  //   "pv": 9800,
  //   "amt": 2290
  // },
  // {
  //   "name": "Page D",
  //   "uv": 2780,
  //   "pv": 3908,
  //   "amt": 2000
  // },
  // {
  //   "name": "Page E",
  //   "uv": 1890,
  //   "pv": 4800,
  //   "amt": 2181
  // },
  // {
  //   "name": "Page F",
  //   "uv": 2390,
  //   "pv": 3800,
  //   "amt": 2500
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // },
  // {
  //   "name": "Page G",
  //   "uv": 3490,
  //   "pv": 4300,
  //   "amt": 2100
  // }
]


export default function MyLineChart() {
  return (
    <AreaChart width={1100} height={300} data={data2}
               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      {/*<defs>*/}
      {/*  /!*<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">*!/*/}
      {/*  /!*  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>*!/*/}
      {/*  /!*  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>*!/*/}
      {/*  /!*</linearGradient>*!/*/}
      {/*  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">*/}
      {/*    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>*/}
      {/*    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>*/}
      {/*  </linearGradient>*/}
      {/*</defs>*/}
      <XAxis dataKey="date" />
      <YAxis datakey=""/>
      {/*<CartesianGrid strokeDasharray="3 3" />*/}
      <Tooltip
        payload={[{name: '05-01', value: 12, unit: 'kg'}]}
        label="aaa"
        // formatter={(value, name, props) => {
        //   console.log(name)
        //   return "formatted value"
        // }}
        cursor={{ stroke: 'red', strokeWidth: 2 }} />
      <Area type="monotone" dataKey="nav" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      {/*<Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />*/}
    </AreaChart>
  )
}
