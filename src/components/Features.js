import { Button } from "./Button";
import "./css/Features.css";
import { BsArrowRight } from "react-icons/bs";
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
          <Button buttonStyle="custom_btn--words">
            See More
            <BsArrowRight />
          </Button>
        </div>
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
                  <div>{d.description}</div>
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
