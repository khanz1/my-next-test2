import {
  Header,
  TableFundOrderStatusWeb,
  TableFundOrderStatusMobile
} from "../../components";


export default function FundOrderStatus({ themes }) {

  const orderData = [
    {
      fundName: 'SAM Indonesia Equity Fund',
      status: 'received',
      orderNo: 12231245,
      orderDate: '2/3/2021',
      orderTime: '13:30:05',
      type: 'BUY',
      amount: 250000,
      unit: 'TBA',
      nabDate: '3/3/2021',
      nab: null,
      paymentDate: '2/3/2021'
    },
    {
      fundName: 'SAM Dana Kas',
      status: 'On Processed',
      orderNo: 12229090,
      orderDate: '1/3/2021',
      orderTime: '15:44:50',
      type: 'SELL',
      amount: 3000000,
      unit: 1100,
      nabDate: '2/3/2021',
      nab: null,
      paymentDate: null
    },
  ]

  return (
    <>
      <Header title="FUND - ORDER STATUS" />
      <div className="d-flex justify-content-center" style={{backgroundColor: themes.dark, minHeight: '94vh'}}>
        <div style={{width: '90%'}}>
          <div className="row mt-4">
            <div className="form-group col-lg-2 col-md-4 col-4">
              <select className="form-control">
                <option>Fund Name</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group col-lg-2 col-md-4 col-4">
              <select className="form-control">
                <option>Status</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group col-lg-2 col-md-4 col-4">
              <select className="form-control">
                <option>Type</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div className="d-xl-table d-none" style={{width: '100%'}}>
            <TableFundOrderStatusWeb orderData={orderData} themes={themes}/>
          </div>
          <div className="d-sm-table d-xl-none w-100">
            <TableFundOrderStatusMobile orderData={orderData} themes={themes}/>
          </div>
        </div>
      </div>
    </>
  )
}
