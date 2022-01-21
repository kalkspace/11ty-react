import React from "react";
import { withHydration as upstreamWithHydration } from "eleventy-plugin-react/utils";

export const withHydration = (WrappedComponent) => {
  const Hydrator = upstreamWithHydration(WrappedComponent);
  return function FixedHydratedComponent(props) {
    Hydrator.__modulePath = FixedHydratedComponent.__modulePath;
    const { collections, ...rest } = props;
    return <Hydrator {...rest} />;
  };
};
