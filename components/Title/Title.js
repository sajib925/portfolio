import React from "react";
import StyledTitle from "./StyledTitle";

export const Title = (props) => {
  const {tagName = "h1", className = "h1", children} = props;
  return (
    <StyledTitle>
      {tagName === "h1" ? (
        <h1 className={className}>{children}</h1>
      ) : tagName === "h2" ? (
        <h2 className={className}>{children}</h2>
      ) : tagName === "h3" ? (
        <h3 className={className}>{children}</h3>
      ) : (
        ""
      )}
    </StyledTitle>
  );
};

export default Title;
