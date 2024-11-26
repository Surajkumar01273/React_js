import './Itemdate.css'

function ItemDate(props){

    const day = props.day;
    const month = props.month;
    const year = props.year;

    return(
        <>
        <div className='text-white'>
        <span className='px-2'>{day}</span>
        <span className='px-2'>{month}</span>
        <span className='px-2'>{year}</span>
        </div>
        </>
    )
}
export default ItemDate;