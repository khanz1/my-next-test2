import {Table} from "react-bootstrap";
import RowFundPortofolioMobile from "./RowFundPortofolioMobile";


export default function TableFundPortofolioMobile({ portofolioData, themes }) {

  return (
    <Table borderless hover>
      <thead>
      <tr style={{backgroundColor: themes.darkGreen}} className="border">
        <th colSpan={1}/>
        <th colSpan={8} style={{color: themes.light}} className="p-0">Fund Name</th>
        <th colSpan={4} style={{color: themes.light}} className="p-1">Avg NAB</th>
        <th colSpan={4} style={{color: themes.light}} className="p-1">NAB</th>
        <th colSpan={3} style={{color: themes.light}} className="p-1">%G/L</th>
      </tr>
      </thead>
      <tbody>
      {portofolioData.map((portofolio, i) => {
        portofolio.id = i;
        return <RowFundPortofolioMobile portofolio={portofolio} themes={themes} key={i}/>
      })}
      </tbody>
    </Table>
  )
}
