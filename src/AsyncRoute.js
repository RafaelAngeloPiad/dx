import React, { Component } from "react";
import PropTypes from "prop-types";

class AsyncImport extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  state = {
    component: null,
  };

  toggleFoucClass() {
    const root = document.getElementById("react-app");
    if (root.hasClass("fouc")) {
      root.removeClass("fouc");
    } else {
      root.addClass("fouc");
    }
  }

  componentWillMount() {
    this.toggleFoucClass();
  }

  componentDidMount() {
    this.props.load().then((component) => {
      setTimeout(() => this.toggleFoucClass(), 0);
      this.setState(() => ({
        component: component.default,
      }));
    });
  }

  render() {
    return this.props.children(this.state.component);
  }
}

const AsyncRoute = (importFunc) => (props) =>
  (
    <AsyncImport load={importFunc}>
      {(Component) => {
        return Component === null ? (
          <div>LOADING</div>
        ) : (
          <Component {...props} />
        );
      }}
    </AsyncImport>
  );

export default AsyncRoute;
