import DiscussionComponent from "~/components/Components/DiscussionComponent/DiscussionComponent";

type Props = {
  title: string;
};

export const HomeContentModule = (props: Props) => {
  return (
    <>
      {props.title}
      <DiscussionComponent />
    </>
  );
};
