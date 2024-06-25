import React from "react";

type DividerComponentProps = {
  className?: string;
};

const DividerComponent = (props: DividerComponentProps) => {
  const { className } = props;
  return <div className={className} />;
};

export default DividerComponent;
