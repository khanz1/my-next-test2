import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {useRouter} from 'next/router';
import {
  FundDetailDescription,
  FundDetailRiskAndReturn,
  LineChart,
  Header
} from "../../components";

export default function FundDetail({ themes }) {

  const router = useRouter();
  const graphTimeList = ['1M', '3M', '6M', '1Y', '3Y', 'ALL'];
  const [tab, setTab] = useState('Description');
  const tabList = ['Description', 'Risk & Return', 'Factsheet', 'Prospectus'];
  const {query: {title}} = router;
  const mobileScreen = '768';
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Header title="FUND DETAIL"/>
      <div className="d-flex justify-content-center" style={{minHeight: '94vh', backgroundColor: themes.dark}}>
        <div style={{ width: '90vw' }}>
          <h4
            className="mt-3 d-flex flex-lg-row flex-column"
            style={{color: themes.light}}
          >{title} (SDK)
            <div className="ml-lg-2 my-2 my-lg-0">
              12347.10 <i className="fas fa-caret-down" style={{verticalAlign: 'top', fontSize: 28, color: 'red'}}/> <span style={{fontSize: 12, color: 'red'}}>0.19%</span>
              <p style={{fontWeight: 'lighter', fontSize: 12}}>NAB 23 February 2021</p>
            </div>
          </h4>
          {/*<div*/}
          {/*  className="py-3 d-flex flex-md-column flex-row"*/}
          {/*  style={{color: themes.light}}>*/}
          {/*  <p className="font-weight-bold" style={windowDimensions <= mobileScreen ? {fontSize: 9}:{}}>{title} (SDK)</p>*/}
          {/*  <div className="ml-2">*/}
          {/*    <div className="d-flex" style={{marginBottom: -5}}>*/}
          {/*      <p style={windowDimensions <= mobileScreen ? {fontSize: 9, fontWeight: 'bold'} : {}}>12347.10*/}
          {/*      <i*/}
          {/*        className="fas fa-caret-down align-top px-1"*/}
          {/*        style={{fontSize: 36, color: 'red', marginTop: -7}}/>*/}
          {/*      <span style={{color: 'red', fontSize: 12}} className="">0.19%</span>*/}
          {/*      </p>*/}
          {/*    </div>*/}
          {/*    <p>NAB 23 February 2021</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="d-flex justify-content-lg-start justify-content-between">
            {tabList.map((tabName, i) => (
              <div
                key={i}
                className={
                  "py-2 px-xl-2 px-1 align-middle " +
                  (tab === tabName ? 'bg-warning ' : 'bg-light ') +
                  (windowDimensions.width <= 992 ? 'w-100': '')
                }
                onClick={() => setTab(tabName)}
                style={{cursor: 'pointer'}}>
                <p className="m-0 text-center  text-dark">{tabName}</p>
              </div>
            ))}
          </div>
          <div className="row">
            {tab === 'Description'
              ? <FundDetailDescription themes={themes}/>
              : tab === 'Risk & Return'
                ? <FundDetailRiskAndReturn themes={themes}/>
                : tab === 'Factsheet'
                  ? <h1>Fact Sheet</h1>
                  : <h1>Prospectus</h1>
            }
          </div>
          <div className="d-xl-block d-none">
            <h5 className="text-warning">SAM Dana Kas Performance</h5>
            <div className="border-top pt-3">
              <h5 className="float-left py-1" style={{color: themes.light}}>NAB Growth</h5>
              <div className="float-left ml-2">
                {graphTimeList.map((graphTimeName, key) => {
                  return <button type="button" className="btn btn-light py-1 px-1 ml-1" key={key}>{graphTimeName}</button>;
                })}
              </div>
              <div>
                <div className="row mr-0">
                  <div className="input-group offset-xl-5 col-xl-3 offset-1 col-4 p-0">
                    <div className="input-group-prepend">
                      <span className="input-group-text">From</span>
                    </div>
                    <input type="date" className="form-control"/>
                  </div>
                  <div className="input-group col-xl-3 px-1 col-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">To</span>
                    </div>
                    <input type="date" className="form-control"/>
                  </div>
                  <Button type="submit" className="btn btn-light col-xl-1 col-2">GO</Button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center py-4">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
