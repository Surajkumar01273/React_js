import './App.css'
import ItemDate from './component/ItemDate'
import Item from './component/Item';
import Card from './component/Card'

function App() {
  const ItemTwoName = "SurfExcel"   // Used props in ract this way
  const CardComponet = "this Card component value"

  const response = [
    {
      itemName: "Nirama",
      itenDate: "20",
      itemmonth: "June",
      itemYear: "1998"
    },
    {
      itemName: "Nirama2",
      itenDate: "22",
      itemmonth: "June2",
      itemYear: "19982"
    },
    {
      itemName: "Nirama3",
      itenDate: "15",
      itemmonth: "June3",
      itemYear: "19983"
    }
  ]

  return (
    <>
      <h1 className='text-white'>React Application</h1>

      {/* <Item Name = "Nirama" />
    <ItemDate day = "20" month= "July" year = "1998" />   {/*and this ways*/}
      {/* <Item Name= {ItemTwoName} />
    <ItemDate day = "22" month = "August" year = "2000" />
    <Item Name = "Wheel" />
    <ItemDate day = "30" month = "sepetember" year = "2005" /> */}

      <Card card = {CardComponet}>
        <Item Name={response[0].itemName}>this props value</Item>
        <ItemDate day={response[0].itenDate} month={response[0].itemmonth} year={response[0].itemYear} />   {/*and this ways*/}
        <Item Name={response[1].itemName} />
        <ItemDate day={response[1].itenDate} month={response[1].itemmonth} year={response[1].itemYear} />
        <Item Name={response[2].itemName} />
        <ItemDate day={response[2].itenDate} month={response[2].itemmonth} year={response[2].itemYear} />
      </Card>
    </>
  );
}

export default App;


