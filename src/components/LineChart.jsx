import dynamic from 'next/dynamic'

const MyChart = dynamic(
  () => import('../components/MyLineChart'),
  { ssr: false }
)

export default function LineChart() {
  return <MyChart />;
}
