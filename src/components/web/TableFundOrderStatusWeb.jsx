


export default function TableFundOrderStatusWeb({ orderData, themes }) {

  return (
    <table className="table table-borderless w-100">
      <thead  style={{backgroundColor: themes.darkGreen}}>
      <tr className="border">
        <th scope="col" style={{color: themes.light}} className="align-middle">Fund Name</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-right">Status</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-right">Order.No</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-right">Order.Date</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">Order.Time</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">Type</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">Amount</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">Unit</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">NAB.Date</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">NAB</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">Payment Date</th>
        <th scope="col" className="d-lg-none d-xl-table-cell"/>
      </tr>
      </thead>
      <tbody>
      {orderData.map((order, key) => {

        return (
          <tr className="border" key={key}>
            <td className="align-middle" style={{color: themes.light}}>{order.fundName}</td>
            <td className="align-middle" style={{color: themes.light}}>{order.status}</td>
            <td className="align-middle" style={{color: themes.light}}>{order.orderNo}</td>
            <td className="align-middle" style={{color: themes.light}}>{order.orderDate}</td>
            <td className="align-middle" style={{color: themes.light}}>{order.orderTime}</td>
            <td
              className={"align-middle " + (order.type === "BUY"
                  ? "text-success"
                  : "text-danger"
              )}
            >
              {order.type}
            </td>
            <td className="align-middle" style={{color: themes.light}}>{order.amount}</td>
            <td className="align-middle" style={{color: themes.light}}>{order.unit}</td>
            <td className="align-middle" style={{color: themes.light}}>{order.nabDate}</td>
            <td className="align-middle" style={{color: themes.light}}>{order.nab}</td>
            <td className="align-middle" style={{color: themes.light}}>{order.paymentDate}</td>
            <td className="d-flex align-middle">
              {order.paymentDate && <button type="button" className="btn btn-light">Void</button>}
            </td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
