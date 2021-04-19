export default function Header({ title }) {
  return (
    <div className="pl-3 d-flex align-items-center" style={{height: '6vh', backgroundColor: '#FFC000'}}>
      <h4>{title}</h4>
    </div>
  )
}
