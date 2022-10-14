import React, { useState } from 'react'


export default function AddProduct(props) {

    // Write Your Code Here
    
        const [products, setProducts] = useState({ ProductName: "", Brand: "" ,Quantity: "" ,Price: "" ,Action: "" })

        let onsubmit = (event) => {
            event.preventDefault();
          
            props.saveProducts(products)
            setProducts({ 
                ProductName: "",
                 Brand: "" ,
                 Quantity: "" ,
                 Price: "" ,
                 Action: "" })

            }
        

          

    function handleProductNameChange(e) {
        // Write Your Code Here
        var eleName = e.target.name;
        console.log(eleName);

        setProducts({ ...products, [eleName]: e.target.value })
 
    }

    function handleBrandChange(e) {
        // Write Your Code Here
        var eleName = e.target.name;
        console.log(eleName);

        setProducts({ ...products, [eleName]: e.target.value })
    }

    function handleQuantityChange(e) {
        // Write Your Code Here
        var eleName = e.target.name;
        console.log(eleName);

        setProducts({ ...products, [eleName]: e.target.value })
    }

    function handlePriceChange(e) {
        // Write Your Code Here
        var eleName = e.target.name;
        console.log(eleName);

        setProducts({ ...products, [eleName]: e.target.value })
    }

    function handleFormSubmit(e) {
        // Write Your Code Here
        var eleName = e.target.name;
        console.log(eleName);

        setProducts({ ...products, [eleName]: e.target.value })
    }

    return (
        <div>
            {/* Write Your Code Here */}
<h1>New Products </h1>
            <input type="text" name='ProductName' placeholder="ProductName" onChange={handleProductNameChange}/><br/>
            <input type="text" name='Brand' placeholder="Brand" onChange={handleBrandChange}/><br/>
            <input type="text" name='Quantity' placeholder="Quantity" onChange={handleQuantityChange}/><br/>
            <input type="text" name='Price' placeholder="Price" onChange={handlePriceChange}/><br/>
            <input type="text" name='Action' placeholder="Action" onChange={handleFormSubmit}/><br/>

            <button onClick={onsubmit}>Save</button>
        </div>
    );
}

