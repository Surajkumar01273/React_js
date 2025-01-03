import ProductForm from './ProductForm';
import React from 'react'

function NewProduct(props){

    function saveHandle(formData){
        console.log("call parent function");
        // console.log(formData);
        
        props.pranay(formData) // call parent function and pass child data in parent function
        
    }

    return(
        <div>
            <ProductForm onSave={saveHandle} />
        </div>
    )
};

export default NewProduct;