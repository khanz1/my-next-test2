import {useState} from "react";

export default function RowFundOrderStatusMobile({ order, themes }) {

  const [tab, setTab] = useState(0);

  return (
    <>
      <tr className={tab === order.id+1 ? "border-right border-top border-left" : "border"}>
        <td className="align-middle" colSpan={1}>
          <i
            className={"p-0 fas " + (tab === order.id+1
              ? "fa-long-arrow-alt-up text-danger" : "fa-long-arrow-alt-down text-success")}
            onClick={() => tab === order.id + 1 ? setTab(0) : setTab(order.id + 1)}/>
        </td>
        <td colSpan={8} style={{color: themes.light}} className="px-0 align-middle">{order.fundName}</td>
        <td colSpan={4} style={{color: themes.light}} className="px-1 align-middle">{order.status}</td>
        <td colSpan={4} style={{color: themes.light}} className="px-1 align-middle">{order.orderNo}</td>
      </tr>
      <tr className={tab === order.id + 1?'border-right border-left border-bottom':'d-none'}>
        <td colSpan={1}>|</td>
        <td colSpan={16} className="pl-0 pt-0">
          <div style={{color: themes.light}}>Order Date: {order.orderDate}</div>
          <div style={{color: themes.light}}>Order Time: {order.orderTime}</div>
          <div style={{color: themes.light}}>Type: <span className="text-success">{order.type}</span></div>
          <div style={{color: themes.light}}>Amount: {order.amount}</div>
          <div style={{color: themes.light}}>Unit: {order.unit}</div>
          <div style={{color: themes.light}}>NAB Date: {order.nabDate}</div>
          <div style={{color: themes.light}}>NAB: {order.nab}</div>
          <div style={{color: themes.light}}>Payment Date: {order.paymentDate}</div>
          <div>
            <button type="button" className="btn btn-light">Void</button>
          </div>
        </td>
      </tr>
    </>
  )
}
