import { ButtonDx } from "./ButtonDx";
import "./css/Features.css";

function Features(props) {
  return (
    <div id="features_services" className="dark">
      <div className="custom_features-container">
        <div className="features-title">
          <br />
          <h1>Features</h1>
          <h4>
            No waiting to install your telephone service. Set up your VoIP phone
            service in record time. You'll dig our drag-and-drop Call Flow
            Builder, too.
          </h4>
          <ButtonDx buttonStyle="arrow-dx">See More</ButtonDx>
        </div>
        {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="custom_features">
                <div className="features_service-desc">
                  <div className="icon" alt="Service">
                    {d.icon}
                  </div>
                  <h3>
                    <b>{d.title}</b>
                  </h3>
                  <div>
                    <h5>{d.description}</h5>
                  </div>
                  <br />
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
