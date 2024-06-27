import {
  CardAtom,
  type CardListProps,
} from "~/components/Atoms/CardAtom/CardAtom";

type Props = {
  lists: CardListProps[];
  // Add props here
};

export const CardComponent = (props: Props) => {
  return (
    <div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
      {props.lists.map((list, index) => (
        <CardAtom {...list} key={index} />
      ))}
    </div>
  );
};
