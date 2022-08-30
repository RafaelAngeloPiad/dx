import "./css/ProductCards.css";

const ProductCards = (props) => {
  console.log(props.data);
  return (
    <div className="product-cards_container">
      <div className="section-title">
        <h2>Our Services</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </div>
      </div>
      <div className="cards_container">
        {props.data.map((item) => (
          <div className="card" key={item.id}>
            <div className="card_img">
              <img src={item.thumb} />
            </div>
            <div className="card_header">
              <h2>{item.product_name}</h2>
              <p>{item.description}</p>
              <p className="price">
                {item.price}
                <span>{item.currency}</span>
              </p>
              <div className="cards_btn">Add to cart</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductCards;
