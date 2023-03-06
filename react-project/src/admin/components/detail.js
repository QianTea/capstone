import {Link, useParams} from 'react-router-dom'
import Product from '../pages/Menu';

const Detail = () => {
    const {id} = useParams();
    return(
        <>
            <h1>Product Detail</h1>
            <h2>Name: </h2>
            <p> price: ${id}</p>
            <p> Categary: </p>
            <p> Picture: </p>
            <p> Description: </p>
            <button>
                <Link to="/products">Go back</Link>
            </button>
        </>
    )
}
export default Detail;