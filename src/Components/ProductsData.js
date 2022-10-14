import React,{useEffect,useState} from 'react';


export default function ProductsData(props) {

    // const DashBoard = () => {

    //     // Array to collect Notes
    //     const [productsList, SetProductsList] = useState([])
        
    //     useEffect(() => {
    //         getNotes().then((data) => {
    //             SetNotesLis(data.data)
    //         })
    //     }, [productsList])

    //     const saveProducts = (newProducts) => {
    
    //         console.log(productsList);
    //         let newProducts = productsList;
    //         newProducts.productsId = productsList.length + 1;
        
    //         products.push(newProducts);
    //         SetNotesLis(products);
    //         addNotes(newProducts).then((data) => {
    //             console.log("sucess");
    //         })
    //         console.log(productsList);
    //     }
    // }

    return (
        <div>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ProductName</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Write Your Code Here */}

                    

                    {/* <AddProduct saveNote={SaveNotes}></AddProduct> */}
            

                    
                </tbody>
            </table>
        </div>
    )
}
