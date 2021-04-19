import {Button, Col, Form, FormControl, InputGroup, Row, Table} from "react-bootstrap";
import {
  Header,
  TableDetailPortofolioMobile,
  TableDetailPortofolioWeb,
} from '../../components'
import {useRouter} from 'next/router';

export default function DetailPortofolio({ themes }) {


  const router = useRouter();
  const portofolio = {
    fundName: 'SAM Dana Kas',
    unit: 2254445.52,
    avg: 1436.77,
    nab: 2590.11,
    totalInvestment: 32391117.46,
    currentValue: 58392610.30,
    potGainLoss: 2600000.10,
    gPerL: 8
  }
  const transactionList = [
    {
      transactionDate: '11/2/2020',
      description: 'Saldo awal',
      value: null,
      price: null,
      unit: null,
      unitBalance: 19950.23,
      avg: 901.23,
      gainPerLoss: null
    },
    {
      transactionDate: '11/3/2020',
      description: 'Subscription',
      value: 100000000,
      price: 1224.23,
      unit: 81684.00,
      unitBalance: 101634.23,
      avg: 1056.64,
      gainPerLoss: null
    },
    {
      transactionDate: '20/7/2020',
      description: 'Redemption',
      value: 50000000,
      price: 990.12,
      unit: 50498.93,
      unitBalance: 51135.30,
      avg: 0,
      gainPerLoss: 3359188.79
    }
  ]

  return (
    <>
      <Header title="DETAIL PORTOFOLIO"/>
      <div className="d-flex justify-content-center" style={{backgroundColor: themes.dark, minHeight: '94vh'}}>
        <div style={{width: '90%'}}>
          <h4 className="pt-4 d-flex flex-lg-row flex-column" style={{color: themes.light}}>
            {router.query.fundName} (SDK)
            <div className="pl-lg-2 mt-lg-0 my-3">
              <div className="mb-2" style={{marginTop: -3}}>{portofolio.currentValue} <span className="text-success"><i className="fas fa-caret-up align-bottom" style={{fontSize: 32}}/> {portofolio.gPerL} %</span></div>
              <p className="m-0" style={{fontSize: 12, fontWeight: 'lighter'}}>Current Value</p>
            </div>
          </h4>
          <div className="row w-100 ml-0">
            <div className="bg-dark py-2 px-md-4 col-xl-2 col-md-6 col-6">
              <p className="m-0 text-center" style={{color: themes.light}}>Total Investment</p>
              <p className="m-0 text-center" style={{color: themes.light}}>{portofolio.totalInvestment}</p>
            </div>
            <div
              className="bg-dark py-2 px-md-4 col-xl-2 col-md-6 col-6">
              <p className="m-0 text-center" style={{color: themes.light}}>Pot.Gain Loss</p>
              <p className="m-0 text-center text-success">{portofolio.potGainLoss}</p>
            </div>
            <div className="bg-dark py-2 px-md-4 col-xl-2 col-md-12 col-12">
              <p className="m-0 text-center" style={{color: themes.light}}>AVG/NAB</p>
              <p className="m-0 text-center text-success">{portofolio.avg} / {portofolio.nab}</p>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-xl-start justify-content-center">
            <button type="button" className="btn btn-success">Buy</button>
            <button type="button" className="btn btn-danger mx-2">Sell</button>
            <button type="button" className="btn btn-info">Switch</button>
          </div>
          <div className="d-flex flex-xl-row flex-column-reverse justify-content-xl-between">
            <h4 className="text-warning">Transaction List</h4>
            <div>
              <div className="row mr-0 mb-xl-0 mb-3">
                <div className="input-group offset-xl-1 col-xl-5 offset-sm-2 col-sm-3 col-5">
                  <div className="input-group-prepend">
                    <span className="input-group-text">From</span>
                  </div>
                  <input type="date" className="form-control"/>
                </div>
                <div className="input-group col-xl-5 px-1 col-sm-3 col-5">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      To
                    </span>
                  </div>
                  <input type="date" className="form-control"/>
                </div>
                <Button type="submit" className="btn btn-light col-xl-1 col-sm-2 col-2">GO</Button>
              </div>
            </div>
          </div>
          <div className="d-xl-table d-none mt-3 w-100">
            <TableDetailPortofolioWeb transactionList={transactionList} themes={themes}/>
          </div>
          <div className="d-sm-table d-xl-none w-100">
            <TableDetailPortofolioMobile transactionList={transactionList} themes={themes}/>
          </div>
        </div>
      </div>
    </>
  )
}
