import Rect, { useState } from 'react';
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css'

const ProductItem = (props) => {
    // let title = props.title;

    const [title, setTitle] = useState(props.title)

    function clickHandler(){
        setTitle("popcon")
        console.log(title);
        
    }

    return (
        <Card>
            <div className='flex justify-between items-center bg-slate-500 mt-2 text-center p-2 rounded-md'>
                <ProductDate date={props.date} />

                <div>
                    <h2 className='text-white font-semibold'>{title}</h2>
                </div>
                <button className='text-xs bg-amber-600 p-2 rounded-lg text-white font-bold outline-none border-none' onClick={clickHandler}>Add to Card</button>
            </div>
        </Card>
    );
}
export default ProductItem;