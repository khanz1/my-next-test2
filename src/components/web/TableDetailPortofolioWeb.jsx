
export default function TableDetailPortofolioWeb({ transactionList, themes }) {

  return (
    <table className="table table-borderless">
      <thead>
      <tr className="border" style={{backgroundColor: themes.darkGreen}}>
        <th scope="col" style={{color: themes.light}} className="align-middle" />
        <th scope="col" style={{color: themes.light}} className="align-middle text-center">Description</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-right">Value</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-right">Price</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-right">Unit</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-right">Unit Balance</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-right">AVG</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">Gain/Loss</th>
      </tr>
      </thead>
      <tbody>
      {transactionList.map((transaction, key) => {
        return (
          <tr className="border" key={key}>
            <td style={{color: themes.light}} className="align-middle">{transaction.transactionDate}</td>
            <td style={{color: themes.light}} className="align-middle text-center">{transaction.description}</td>
            <td style={{color: themes.light}} className="align-middle text-right">{transaction.value}</td>
            <td style={{color: themes.light}} className="align-middle text-right">{transaction.price}</td>
            <td style={{color: themes.light}} className="align-middle text-right">{transaction.unit}</td>
            <td style={{color: themes.light}} className="align-middle text-right">{transaction.unitBalance}</td>
            <td style={{color: themes.light}} className="align-middle text-right">{transaction.avg}</td>
            <td style={{color: themes.light}} className="align-middle">{transaction.gainPerLoss}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
