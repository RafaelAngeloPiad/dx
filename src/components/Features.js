import { Button } from "./Button";
import "./css/Features.css";
function Features(props) {
  return (
    <div id="features_services" className="light">
      <div className="custom_features-container">
        {props.data
          ? props.data.map((d, i) => (
              <div className="custom_features" key={`${d.title}-${i}`}>
                <div className="icon" alt="Service">
                  {d.icon}
                </div>

                <div className="features_service-desc">
                  <h3>
                    <b>{d.title}</b>
                  </h3>
                  {/* <div>{d.description}</div> */}
                  <ul>
                    {d.Why.map((w, idx) => (
                      <li key={`${w}-${idx}`}>{w}</li>
                    ))}
                  </ul>
                </div>
                <br />
              </div>
            ))
          : "loading"}
      </div>
    </div>
  );
}

export default Features;
