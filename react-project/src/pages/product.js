import React from "react";
import { Link } from "react-router-dom";

const products = [
    {name: '2pc Wihtefish & chips', price: '10.19',category:'2pc Fish and Chip Dinners' },
    {name: '2pc Cod & chips', price: '11.99',category:'2pc Fish and Chip Dinners' },
    {name: '2pc haddock & chips', price: '11.99',category:'2pc Fish and Chip Dinners' },
    {name: '2pc Halibut & chips', price: '11.99',category:'2pc Fish and Chip Dinners' },
    {name: '8pc Shrimps & Chips', price: '11.49',category:'Shrimp Special' }
];
// `` js let name="jinqian"  `hello ${name}`

const ProductAdd = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = document.forms.addItem;
        let name = form.name.value;
        let price = form.price.value;
        let category = form.category.value;
        products.push({name:name, price: price, category:category});
        console.log(products);
    }
    return (
        <form name="addItem" onSubmit={handleSubmit}>
            <div> name:<input name="name"/></div>
            <div> price:<input name="price"/></div>
            <div> category:<input name="category"/></div>
            <button type="submit">Submit</button>
        </form>
    )
}

// const Product = () => {
//     const handleClick = (value) =>{
//         console.log('my price:', value);
//     }

//     // const handleClick2 = function() { }
//     // const handleClick2 = () => {}
    

//     return(
//         <>
//             Here is the Product page
//             {products.map(v => {
//                 return <div>{v.name}:{v.price} <button onClick={() => handleClick(v.price)}>open</button>
//                     <Link to={v.price}>jump to</Link>                
//                 </div>
//             })}
//             <ProductAdd />
//         </>
//     )
// }


class Product extends React.Component {

    constructor() {
        super();
        this.state = {products:[]}
    }

    componentDidMount() {
        this.loadData();
    }
    componentDidUpdate() {
        //this.loadDataAfter4sec();
    }

    loadData = () => {
        this.setState({products: products});
    }
    // loadDataAfter4sec = () => {
    //     setTimeout(() => {
    //         if (this.state.products.length <= 7) {
    //             let current = this.state.products;
    //             products.push({name: 'xxxx', price: '131313'});
    //             this.setState({products: products});
    //         } 
            
    //     }, 4000);
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        let form = document.forms.addItem;
        let name = form.name.value;
        let price = form.price.value;
        let category = form.category.value;
        let current = this.state.products;
        current.push({name: name, price: price, category:category});
        this.setState({products: current});
        console.log(products);
    }

    handleClick = (value) =>{
        console.log('my price:', value);
    }

    render() {
        return (
        <>
            <h1>Product Management</h1>
            <h2>Add More Products</h2>
            <form name="addItem" onSubmit={this.handleSubmit}>
                <div> name: <input name="name"/></div>
                <div> price: <input name="price"/></div>
                <div> category:  
                    <select id="category">
                        <option value="uncategorized">Uncategorized</option>
                        <option value="2pcDinner">2pc Fish and Chip Dinners</option>
                        <option value="2pcOnly">2pc Fish Only</option>
                        <option value="family">Family Packs</option>
                        <option value="sfp">Sea Food Platter</option>
                        <option value="fries">Homemade Fries</option>
                        <option value="lunch">Lunch Special</option>
                        <option value="shrimpSpecial">Shrimp Special</option>
                        <option value="kid">Kid's Combo</option>
                        <option value="side">Side Orders</option>
                        <option value="beverage">Beverages</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>

            <h2>Current Products</h2>
            {this.state.products.map(v => {
                return <div>
                    <h3>Category: {v.category}</h3>
                    {v.name}: ${v.price} 
                    {/* <button onClick={() => this.handleClick(v.price)}>open</button> */}
                    <a><Link to={v.price}>Update</Link> </a>       
                    <a><Link to={v}>Delete</Link> </a>        
                </div>
            })}

        </>
        )
    }
    
}
export default Product;