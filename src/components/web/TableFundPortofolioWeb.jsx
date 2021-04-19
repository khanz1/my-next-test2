import {useState} from "react";
import priceFormatter from "../../helpers/priceFormatter";
import {useRouter} from 'next/router';

export default function TableFundPortofolioWeb({ portofolioData, themes }) {
  const router = useRouter();

  return (
    <table className="table table-borderless w-100">
      <thead  style={{backgroundColor: themes.darkGreen}}>
      <tr className="border">
        <th scope="col" style={{color: themes.light}} className="align-middle">Fund Name</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-xl-right">Unit</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-xl-right">Avg</th>
        <th scope="col" style={{color: themes.light}} className="align-middle text-xl-right">NAB</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">Total Investment</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">Current Value</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">Pot.Gain Lost</th>
        <th scope="col" style={{color: themes.light}} className="align-middle">% G/L</th>
        <th scope="col"/>
      </tr>
      </thead>
      <tbody>
      {portofolioData.map((portofolio, key) => {
        return (
          <tr className="border" key={key}>
            <td style={{color: themes.light}} className="align-middle">{portofolio.fundName}</td>
            <td style={{color: themes.light}} className="align-middle">{portofolio.unit}</td>
            <td style={{color: themes.light}} className="align-middle">{portofolio.avg}</td>
            <td style={{color: themes.light}} className="align-middle">{portofolio.nab}</td>
            <td style={{color: themes.light}} className="align-middle">{portofolio.totalInvestment}</td>
            <td style={{color: themes.light}} className="align-middle">{portofolio.currentValue}</td>
            <td style={{color: themes.light}} className="align-middle">{portofolio.potGainLoss}</td>
            <td style={{color: themes.light}} className="align-middle">{portofolio.gPerL}</td>
            <td style={{color: themes.light}} className="d-flex align-middle">
              <button type="button" className="btn btn-success">Buy</button>
              <button type="button" className="btn btn-danger mx-1">Sell</button>
              <button type="button" className="btn btn-info mr-1">Swc</button>
              <button
                type="button"
                onClick={() => router.push(`/portofolio/${portofolio.fundName}`)}
                className="btn btn-dark">Detil</button>
            </td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
