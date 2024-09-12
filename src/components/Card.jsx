function Card(props) {
    return (
      <div className='card'>
        <img src={`/assets/products/${props.coverImg}`} alt="product"/>
        <h2 className="card--title">{props.title}</h2>
        <span className='card--price'>Rp {props.price}.000</span>
      </div>
    )
  };

  export default Card;