import {Table} from "react-bootstrap";
import RowFundPortofolioMobile from "./RowFundPortofolioMobile";
import RowFundOrderStatusMobile from "./RowFundOrderStatusMobile";



export default function TableFundOrderStatusMobile({ orderData, themes }) {

  return (
    <Table borderless hover>
      <thead>
      <tr className="border" style={{backgroundColor: themes.darkGreen}}>
        <th colSpan={1}/>
        <th colSpan={8} style={{color: themes.light}} className="px-1 py-2 align-middle">Fund Name</th>
        <th colSpan={4} style={{color: themes.light}} className="px-1 py-2">Status</th>
        <th colSpan={4} style={{color: themes.light}} className="px-1 py-2">Order.No</th>
      </tr>
      </thead>
      <tbody>
      {orderData.map((order, i) => {
        order.id = i;
        return <RowFundOrderStatusMobile order={order} themes={themes} key={i}/>
      })}
      </tbody>
    </Table>
  )
}
