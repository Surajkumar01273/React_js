import './Card.css'

function Card(props){
    const cardCom = props.card;

    return(
        <>
        <p>{cardCom}</p>
        {props.children}
        </>
    )
    
}
export default Card