import React from "react";
import { Link } from "react-router-dom";

const products = [
    {name: 'white fish', price: '12'},
    {name: 'fish one', price: '14'},
    {name: 'fish two', price: '11'},
    {name: 'white three', price: '16'},
    {name: 'white four', price: '17'}
];
// `` js let name="jinqian"  `hello ${name}`

const ProductAdd = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = document.forms.addItem;
        let name = form.name.value;
        let price = form.price.value;
        products.push({name:name, price: price});
        console.log(products);
    }
    return (
        <form name="addItem" onSubmit={handleSubmit}>
            <div> name:<input name="name"/></div>
            <div> price:<input name="price"/></div>
            <button type="submit">submit</button>
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
        setTimeout(() => {
            this.setState({products: products});
        }, 1000);
    }
    loadDataAfter4sec = () => {
        setTimeout(() => {
            if (this.state.products.length <= 7) {
                let current = this.state.products;
                products.push({name: 'xxxx', price: '131313'});
                this.setState({products: products});
            } 
            
        }, 4000);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let form = document.forms.addItem;
        let name = form.name.value;
        let price = form.price.value;
        let current = this.state.products;
        current.push({name: name, price: price});
        this.setState({products: current});
        console.log(products);
    }

    handleClick = (value) =>{
        console.log('my price:', value);
    }

    render() {
        return (<>
            Here is the Product page
            {this.state.products.map(v => {
                return <div>{v.name}:{v.price} <button onClick={() => this.handleClick(v.price)}>open</button>
                    <Link to={v.price}>jump to</Link>                
                </div>
            })}
            <form name="addItem" onSubmit={this.handleSubmit}>
                <div> name:<input name="name"/></div>
                <div> price:<input name="price"/></div>
                <button type="submit">submit</button>
            </form>
        </>)
    }
    
}
export default Product;