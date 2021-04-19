import {Table} from "react-bootstrap";
import RowFundPortofolioMobile from "./RowFundPortofolioMobile";
import RowFundOrderStatusMobile from "./RowFundOrderStatusMobile";
import RowDetailPortofolioMobile from "./RowDetailPortofolioMobile";



export default function TableDetailPortofolioMobile({ transactionList, themes }) {

  return (
    <Table borderless hover>
      <thead>
      <tr className="border" style={{backgroundColor: themes.darkGreen}}>
        <th colSpan={1}/>
        <th colSpan={8} style={{color: themes.light}} className="p-0">Date</th>
        <th colSpan={4} style={{color: themes.light}} className="p-1 text-center">Description</th>
        <th colSpan={4} style={{color: themes.light}} className="p-1 text-right">Unit Balance</th>
      </tr>
      </thead>
      <tbody>
      {transactionList.map((transaction, i) => {
        transaction.id = i;
        return (
          <RowDetailPortofolioMobile transaction={transaction} themes={themes} key={i}/>
        )
      })}
      </tbody>
    </Table>
  )
}
