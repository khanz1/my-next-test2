import {useState} from "react";


export default function RowDetailPortofolioMobile({ transaction, themes }) {
  const [tab, setTab] = useState(0);

  return (
    <>
      <tr className={tab === transaction.id+1 ? "border-right border-top border-left" : "border"}>
        <td colSpan={1}>
          <i
            className={"p-0 fas " + (tab === transaction.id+1
              ? "fa-long-arrow-alt-up text-danger" : "fa-long-arrow-alt-down text-success")}
            onClick={() => tab === transaction.id + 1 ? setTab(0) : setTab(transaction.id + 1)}/>
        </td>
        <td colSpan={8} style={{color: themes.light}} className="px-0">{transaction.transactionDate}</td>
        <td colSpan={4} style={{color: themes.light}} className="px-1 text-center">{transaction.description}</td>
        <td colSpan={4} style={{color: themes.light}} className="px-1 text-right">{transaction.unitBalance}</td>
      </tr>
      <tr className={tab === transaction.id + 1?'border-right border-left border-bottom':'d-none'}>
        <td colSpan={1}>|</td>
        <td colSpan={16} className="pl-0 pt-0">
          <div style={{color: themes.light}}>Value: {transaction.value}</div>
          <div style={{color: themes.light}}>Price: {transaction.price}</div>
          <div style={{color: themes.light}}>Unit: {transaction.unit}</div>
          <div style={{color: themes.light}}>AVG: {transaction.avg}</div>
          <div style={{color: themes.light}}>Gain/Loss: {transaction.gainPerLoss}</div>
        </td>
      </tr>
    </>
  )
}
