
export default function FundDetailDescription({ themes }) {

  return (
    <>
      <div className="col-xl-8 py-4">
        <div className="bg-dark py-2 pl-xl-3 pr-xl-4 px-3 overflow-auto" style={{minHeight: '50vh'}}>
          <h5 className="text-light">SAM Dana Kas (SDK)</h5>
          <p className="text-light pr-3 pt-3">
            Memberikan suatu tingkat pengembalian investasi yang menarik melalui investasi pada instrumen pasar uang dan/atau
            Efek Bersifat Utang uang diterbitkan dengan jank awaktu tidak lebih dari 2 (satu) tahun dan.atau sisa jatuh temponya tidak
            lebih dari 1 (satu) tahun & bertujuan memberikan tingkat likuiditas yang tinggi untuk memenuhi kebutuhan dana tunai dalam waktu yang singkat.
          </p>
          <div className="d-flex justify-content-between">
            <p className="text-light m-0">Type</p>
            <p className="text-light m-0">Money Market</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-light my-1">Minimum Investment</p>
            <p className="text-light my-1">Rp 100.000,-</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-light my-1">Inception</p>
            <p className="text-light my-1">10 Februari 2017</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-light my-1">Entry Fee</p>
            <p className="text-light my-1">0%</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-light my-1">Exit Fee</p>
            <p className="text-light my-1">0.00%</p>
          </div>
        </div>
      </div>
      <div className="col-xl-4 p-xl-4 px-4">
        <div style={{border: 'dashed 2px gray'}} className="p-3">
          <h1 style={{fontWeight: 'bold'}} className="text-warning">Rp. 1,247.10</h1>
          <p className="my-1" style={{color: themes.light}}>NAB/Unit</p>
          <p className="my-1" style={{color: themes.light}}>23 Februari 2021</p>
        </div>
        <div className="input-group py-3">
          <input type="text" className="form-control"/>
          <div className="input-group-append">
            <span className="input-group-text border-0 bg-warning" style={{cursor: 'pointer'}} onClick={()=> console.log('testing')}>Buy</span>
          </div>
        </div>
        <p style={{color: themes.light}}>Input Investment value; Minimum investment Rp 100.000,</p>
      </div>
    </>
  )
}
