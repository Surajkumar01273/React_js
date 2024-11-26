import './Item.css'


function Item(props){
    const powder = props.Name
    return(
        <>
        <p className="text-white">{powder}</p>
        {props.children}
        </>
    )
}

export default Item;