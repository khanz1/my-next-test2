import {
  Header,
  TableFundPortofolioWeb,
  TableFundPortofolioMobile
} from "../../components";

export default function FundPortofolio({ themes }) {

  const portofolioData = [
    {
      fundName: 'SAM Dana Kas',
      unit: 2254445.52,
      avg: 1436.77,
      nab: 2590.11,
      totalInvestment: 32391117.46,
      currentValue: 58392610.30,
      potGainLoss: 2600000.10,
      gPerL: 8
    },
    {
      fundName: 'SAM Indonesia Equity Fund',
      unit: 2254445.52,
      avg: 1436.77,
      nab: 2590.11,
      totalInvestment: 32391117.46,
      currentValue: 58392610.30,
      potGainLoss: 2600000.10,
      gPerL: 7.09
    },
    {
      fundName: 'SAM Dana Berkembang',
      unit: 2254445.52,
      avg: 1436.77,
      nab: 2590.11,
      totalInvestment: 32391117.46,
      currentValue: 58392610.30,
      potGainLoss: 2600000.10,
      gPerL: 7.11
    }
  ]

  return (
    <>
      <Header  title="FUND PORTOFOLIO"/>
      <div className="d-flex justify-content-center" style={{backgroundColor: themes.dark}}>
        <div style={{width: '90vw'}}>
          <div style={{width: '100%', minHeight: '94vh'}}>
            <h4 className="text-warning pt-4">Portofolio Summary</h4>
            <div style={{color: 'green'}} className="d-flex align-items-center">
              <h3>21,78,007</h3>
              <div
                className="d-flex flex-lg-row flex-column pl-2"
                style={{fontSize: 14}}>
                Rp. 300,150.00 | 0.16% <span className="text-muted pl-lg-2">(1 - Day Return)</span>
              </div>
            </div>
            <div className="row px-3">
              <div className="bg-dark py-2 px-md-4 col-lg-2 col-md-3 col-4">
                <p className="m-0 text-right" style={{color: themes.light}}>Total Investment</p>
                <p className="m-0 text-right" style={{color: themes.light}}>17,01,189</p>
              </div>
              <div
                className="bg-dark py-2 px-md-4 col-lg-2 col-md-3 col-4"
                style={{borderLeft: '2px solid black', borderRight: '2px solid black'}}>
                <p className="m-0 text-right" style={{color: themes.light}}>Total Gain Loss</p>
                <p className="m-0 text-right text-success">4,76,818</p>
              </div>
              <div className="bg-dark py-2 px-md-4 col-lg-2 col-md-3 col-4">
                <p className="m-0 text-center" style={{color: themes.light}}>%G/L</p>
                <p className="m-0 text-center text-success">7.83%</p>
              </div>
            </div>
            <h4 className="text-warning pt-4">Portofolio List</h4>
            <div className="d-xl-table d-none w-100">
              <TableFundPortofolioWeb portofolioData={portofolioData} themes={themes}/>
            </div>
            <div className="d-sm-table d-xl-none w-100">
              <TableFundPortofolioMobile portofolioData={portofolioData} themes={themes}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
