import "./css/Tiles.css";
function ServicesTiles(props) {
  return (
    <div id="tiles_services" className="light darkBg">
      <div className="tiles_section-title">
        <h2>Our Services</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </div>
      </div>
      <div className="custom_tiles-container">
        {props.data
          ? props.data.map((d, i) => (
              <div className="custom_tiles" key={`${d.title}-${i}`}>
                <img src={d.img} className="img--small" alt="Service" />
                <div className="tiles_service-desc">
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

export default ServicesTiles;
