import "./css/Tiles.css";
function ServicesTiles(props) {
  return (
    <div id="services_t" className="light darkBg">
      <div className="services_title">
        <h2>Our Services</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus
        leonec.
      </div>
      <div className="s_tiles_container">
        {props.data
          ? props.data.map((d, i) => (
              <div className="s_tiles" key={`${d.title}-${i}`}>
                <img src={d.img} className="img--large" alt="Service" />
                <div className="s_tiles_desc">
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
