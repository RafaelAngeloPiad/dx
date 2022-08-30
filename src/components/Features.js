import "./css/Features.css";
function Features(props) {
  return (
    <div id="features_services" className="light">
      <div className="features_section-title">
        <h2>Features</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </div>
      </div>
      <div className="custom_features-container">
        {props.data
          ? props.data.map((d, i) => (
              <div className="custom_features" key={`${d.title}-${i}`}>
                <img src={d.img} className="img--small" alt="Service" />
                <div className="features_service-desc">
                  <h3>
                    <b>{d.title}</b>
                  </h3>
                  <div>{d.description}</div>
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </div>
  );
}

export default Features;
