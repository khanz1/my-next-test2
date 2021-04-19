import {useRouter} from 'next/router';

export default function SchemaCard({ schema, theme }) {

  const router = useRouter();

  const linkFormatter = (text) => {
    text = text.toLowerCase();
    return text.split(' ').join('-');
  }

  return (
    <div className="mt-4 col-lg-4">
      <div className="p-3"
           onClick={() => router.push(`/home/${linkFormatter(schema.title)}`)}
           style={{ backgroundColor: theme.card, cursor: 'pointer' }}>
        <h3 style={{ fontWeight: 'bold', margin: 0 }}>{schema.title}</h3>
        <div className="d-flex m-0 align-items-end">
          <p style={{fontSize: 24, fontWeight: 'bold'}}>
            1,247.10{' '}
            <span style={{fontSize: 15, color: 'red'}}>
              <i className="fas fa-caret-down" style={{color: 'red', verticalAlign: 'bottom', fontSize: 32}}/>
              0.19%
            </span>
          </p>
        </div>
        <p className="text-muted m-0">NAB 23 February 2021</p>
      </div>
      <div
        className="my-3 d-flex justify-content-around"
        style={{borderTop: `3px solid ${theme.card}`, borderBottom: `3px solid ${theme.card}`}}>
        <div className="text-center">
          <h4 style={{color: theme.light}}>2.21%</h4>
          <p style={{color: theme.light}}>1M</p>
        </div>
        <div className="text-center">
          <h4 style={{color: theme.light}}>8.75%</h4>
          <p style={{color: theme.light}}>6Y</p>
        </div>
        <div className="text-center">
          <h4 style={{color: theme.light}}>18.55%</h4>
          <p style={{color: theme.light}}>1Y</p>
        </div>
      </div>
      <div>
        <p className="pl-1 m-0" style={{color: theme.light}}>Type: {schema.type}</p>
        <p className="pl-1 m-0" style={{color: theme.light}}>Risk Category: {schema.riskCategory}</p>
        <p className="pl-1 m-0" style={{color: theme.light}}>Inception: {schema.inception}</p>
        <p className="pl-1 m-0" style={{color: theme.light}}>Min Investment: {schema.minInvestment}</p>
        <p className="pl-1 m-0" style={{color: theme.light}}>Entry Fee: {schema.entryFee}</p>
        <p className="pl-1 m-0" style={{color: theme.light}}>Exit Fee: {schema.exitFee}</p>
        <p className="pl-1 m-0" style={{color: theme.light}}>Ideal For: {schema.idealFor}</p>
      </div>
      <div className="d-flex justify-content-end">
        <i className="fas fa-newspaper px-1 text-success" style={{cursor: 'pointer'}}/>
        <i
          className="fas fa-info-circle px-1 text-danger"
          style={{cursor: 'pointer'}}/>
      </div>
    </div>
  )
}
