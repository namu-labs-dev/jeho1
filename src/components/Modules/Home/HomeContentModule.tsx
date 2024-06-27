import React from "react";
import DiscussionComponent from "~/components/Components/DiscussionComponent/DiscussionComponent";

type Props = {
  DiscussionComponent: React.ComponentProps<typeof DiscussionComponent>;
};

export const HomeContentModule = (props: Props) => {
  return (
    <>
      <DiscussionComponent {...props.DiscussionComponent} />
    </>
  );
};
