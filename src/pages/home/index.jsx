import {useState} from "react";
import {useRouter} from "next/router";


export default function FundList() {
  const themes = {dark : '#000000'}
  const tabList = ['All Schemes', 'Equity', 'Mixed Fund', 'Money Market'];
  const [currentTab, setCurrentTab] = useState(tabList[0]);
  const router = useRouter();

  const schemas = [
    {
      title: 'SAM Dana Kas',
      type: 'Instrumen Pasar Uang / Setara Kas',
      riskCategory: 'Low',
      inception: '10-Feb-2017',
      minInvestment: 100000,
      entryFee: '0%',
      exitFee: '0%',
      idealFor: 'Conservative Investor'
    },
    {
      title: 'SAM Indonesia Equity Fund',
      type: 'Instrumen Pasar Uang / Setara Kas',
      riskCategory: 'Low',
      inception: '10-Feb-2017',
      minInvestment: 100000,
      entryFee: '0%',
      exitFee: '0%',
      idealFor: 'Conservative Investor'
    },
    {
      title: 'SAM Dana Kas',
      type: 'Instrumen Pasar Uang / Setara Kas',
      riskCategory: 'Low',
      inception: '10-Feb-2017',
      minInvestment: 100000,
      entryFee: '0%',
      exitFee: '0%',
      idealFor: 'Conservative Investor'
    }
  ]

  return (
    <>
      <div className="d-flex flex-column align-items-center pb-4" style={{minHeight: '94vh', backgroundColor: themes.dark}}>
        <div style={{width: '90vw'}}>
          <h1 className="py-3 pl-3" style={{ color: themes.light }}>Our Mutual Fund Schemes</h1>
        </div>
        <div style={{width: '90vw'}}>
          <nav
            className="d-flex align-items-end justify-content-sm-start justify-content-around"
            style={{borderBottom: `3px solid ${themes.light}`}}
          >
            {tabList.map((tab, key) => (
              <h6
                key={key}
                className="pl-0 pl-sm-3 pr-sm-5 pr-0 pb-2"
                onClick={() => setCurrentTab(tab)}
                style={{
                  color: themes.light,
                  cursor: 'pointer',
                  marginBottom: '-0.1vh',
                  borderBottom: `3px solid ${currentTab === tab ? themes.yellow : themes.dark}`
                }}
              >
                {tab}
              </h6>
            ))}
          </nav>
          <div className="row">
            <button onClick={() => router.push('/home/testing')} className="btn btn-success">testing</button>
            <button onClick={() => router.push('/home/testing-jugs')} className="btn btn-success">testing jugs</button>
            <button onClick={() => router.push('/home/testing-ke-3')} className="btn btn-success">testing aduh</button>
          </div>
        </div>
      </div>
    </>
  )
}
