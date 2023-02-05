import {Link, useParams} from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();
    return(
        <>
            Here is the Detail page, price is {id}
            <button><Link to="/products">Go back</Link></button>
        </>
    )
}
export default Detail;