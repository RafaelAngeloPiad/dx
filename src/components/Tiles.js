import "./css/Tiles.css";
function ServicesTiles(props) {
  return (
    <div id="services" className="light darkBg">
      <div className="section-title">
        <h2>Our Services</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </span>
      </div>
      <div className="tiles-container">
        {props.data
          ? props.data.map((d, i) => (
              <div className="tiles" key={`${d.title}-${i}`}>
                <img src={d.img} className="img--small" alt="Service" />
                <div className="service-desc">
                  <h3>
                    <b>{d.title}</b>
                  </h3>
                  <span>{d.description}</span>
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </div>
  );
}

export default ServicesTiles;
