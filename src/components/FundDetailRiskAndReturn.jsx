import GaugeChart from 'react-gauge-chart';

export default function FundDetailRiskAndReturn() {

  const performace = {
    '1M': -3.77,
    '3M': 8.86,
    '6M': 23.85,
    'Year To Date': -0.82,
    '1Y': -0.27,
    'Since Inception': 103.77,
    'CAGR': 7.90
  }

  return (
    <>
      <div className="col-xl-7 col-12 py-4" style={{minHeight: '50vh'}}>
        <p className="text-light pr-5">
          Produk ini cocok untuk investor yang sedang mencari penghasilan tetap dalam jangka pendek hingga menengah
          investasi dalam intrumen hutang dan pasar uang yang diterbitkan oleh Bank, pemerintah dll.
        </p>
        <div className="d-flex justify-content-center">
          <GaugeChart
            style={{minWidth: '40vw'}}
            nrOfLevels={100}
            percent={0.9}
            arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
            colors={['#5BE12C', '#F5CD19', '#EA4228']}
            hideText={true}
            arcPadding={0.01}
          />
        </div>
        <p className="text-light">
          investor memahami bahwa secara prinsip mereka memiliki resiko rendah
        </p>
      </div>
      <div className="col-xl-5 col-12 w-100" >
        <h4 className="text-warning py-2 pl-2">Performance</h4>
        <table className="w-100 table table-hover table-striped">
          <tbody>
          {Object.keys(performace).map((perfName, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-dark" : ''}>
              <td className="text-light">{perfName}</td>
              <td className="text-right text-light">{performace[perfName]}%</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
