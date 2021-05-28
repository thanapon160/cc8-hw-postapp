

function ProductItem(props) {
    return <div>
        <h1>Title: {props.title}</h1>
        <h1>Description: {props.description}</h1>
        <h1>Price: {props.price}</h1>
    </div>
}

export default ProductItem