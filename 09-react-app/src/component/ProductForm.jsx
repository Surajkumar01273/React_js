import { useState } from "react";

function ProductForm(props){

    // const [fullPorductInput, setfullProductinput] = useState({   // handle multiple state using  a single useState
    //     title: "",
    //     date: ''
    // });

    // function titleInputHandler(e, prevState){
    //     let obj = {...prevState, title:e.target.value};
    //     console.log(obj);
    //     return obj;
        
    // }

    const [newTitle, setnewTitle] = useState('');
    const [newDate, setnewDate] = useState('')

    function titleInputHandler(e){
        setnewTitle(e.target.value)    
    }
  

    function dateHandler(e){
        setnewDate(e.target.value);
        
        // let obj = {...prevState, date:e.target.value};
        // console.log(obj);
        // return obj;
    }

    function handleSubmit(e){
        e.preventDefault()

        const productObject = {
            title:newTitle,
            date:newDate
        }
        // console.log(productObject);

        props.onSave(productObject)  // pass the child value through the props function.

        setnewTitle("");
        setnewDate("")
        
    }

    return(
       <form onSubmit={handleSubmit}>
         <div className="bg-lime-600 p-4 w-96 mx-auto mt-9 rounded-md">
            <div className="m-2">
                <label className="text-black pr-2" htmlFor="title">Title</label>
                <input value={newTitle} onChange={titleInputHandler} className="outline-1" type="text" id="title"></input>
            </div>
            <div>
                <label className="pr-3" htmlFor="date">Date</label>
                <input value={newDate} onChange={dateHandler} type="date" min='2000-01-01' max='2025-12-12'></input>
            </div>
            <div className="mt-2">
                <button className="bg-slate-500 p-2 rounded-md" type="submit">Add Product</button>
            </div>
        </div>
       </form>
    )
}

export default ProductForm