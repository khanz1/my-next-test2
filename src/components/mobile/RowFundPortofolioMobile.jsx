import {useState} from "react";
import {useRouter} from 'next/router';


export default function RowFundPortofolioMobile({ portofolio, themes }) {

  const router = useRouter();
  const [tab, setTab] = useState(0);

  return (
    <>
      <tr className={tab === portofolio.id+1 ? "border-right border-top border-left" : "border"}>
        <td colSpan={1}>
          <i
            className={"p-0 fas " + (tab === portofolio.id+1
              ? "fa-long-arrow-alt-up text-danger" : "fa-long-arrow-alt-down text-success")}
            onClick={() => tab === portofolio.id + 1 ? setTab(0) : setTab(portofolio.id + 1)}/>
        </td>
        <td colSpan={8} style={{color: themes.light}} className="px-0">{portofolio.fundName}</td>
        <td colSpan={4} style={{color: themes.light}} className="px-1">{portofolio.avg}</td>
        <td colSpan={4} style={{color: themes.light}} className="px-1">{portofolio.nab}</td>
        <td colSpan={3} className="text-success px-1">{portofolio.gPerL}</td>
      </tr>
      <tr className={tab === portofolio.id + 1?'border-right border-left border-bottom':'d-none'}>
        <td colSpan={1}>|</td>
        <td colSpan={19} className="pl-0 pt-0">
          <div style={{color: themes.light}}>Unit: {portofolio.unit}</div>
          <div style={{color: themes.light}}>Total Investment: {portofolio.totalInvestment}</div>
          <div style={{color: themes.light}}>current Value: {portofolio.currentValue}</div>
          <div style={{color: themes.light}}>
            Total G/L: <span className="text-success">{portofolio.potGainLoss}</span>
          </div>
          <div>
            <button type="button" className="btn btn-success">Buy</button>
            <button type="button" className="btn btn-danger mx-1">Sell</button>
            <button type="button" className="btn btn-info mr-1">Swc</button>
            <button
              type="button"
              onClick={() => router.push(`/portofolio/${portofolio.fundName}`)}
              className="btn btn-dark">Detil</button>
          </div>
        </td>
      </tr>
    </>
  )
}
