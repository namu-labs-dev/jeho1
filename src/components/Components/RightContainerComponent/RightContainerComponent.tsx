import { type PropsWithChildren } from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

export const RightContainerComponent = (props: PropsWithChildren<Props>) => {
  return <div className={`${props.className} w-full`}>{props.children}</div>;
};
