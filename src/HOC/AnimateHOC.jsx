import React from "react";

export const AnimateContext = React.createContext();

export const AnimateProvider = ({ children }) => {
  const test = 1;
  <AnimateContext.Provider value={{test}}>{children}</AnimateContext.Provider>;
};

export const withAnimate = (TitleComponent, BodyComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AnimateContext.Consumer>
          {(value) => {
            return (
              <div className="test">
                <TitleComponent {...value} {...this.props} />
                <BodyComponent {...value} {...this.props} />
              </div>
            );
          }}
        </AnimateContext.Consumer>
      );
    }
  };
};