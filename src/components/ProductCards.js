import "./css/ProductCards.css";

const ProductCards = (props) => {
  return (
    <div className="product-cards_container">
      <div className="c_section-title">
        <h2>Our Services</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </div>
      </div>
      <div className="c_cards_container">
        {props.data.map((item) => (
          <div className="c_card" key={item.id}>
            <div className="c_card_img">
              <img src={item.thumb} />
            </div>
            <div className="c_card_header">
              <h2>{item.product_name}</h2>
              <p>{item.description}</p>
              <p className="c_price">
                {item.price}
                <span>{item.currency}</span>
              </p>
              <div className="c_cards_btn">Add to cart</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductCards;
