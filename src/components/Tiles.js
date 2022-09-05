import "./css/Tiles.css";
function ServicesTiles(props) {
  return (
    <div id="services_t" className="light darkBg">
      <div className="services_title">
        <h2>Open Integration Framework</h2>
        Easily connect popular business and CRM apps to your contact center,
        business phone, video meetings and team chat. Help your teams achieve
        new levels of productivity without complexity or cost.
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
