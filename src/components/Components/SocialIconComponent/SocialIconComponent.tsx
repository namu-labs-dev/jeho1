import {
  SocialIconAtom,
  type SocialIconAtomProps,
} from "~/components/Atoms/SocialIconAtom/SocialIconAtom";

type SocialIconComponentProps = {
  icon: SocialIconAtomProps[];
  className?: string;
};
export const SocialIconComponent = (props: SocialIconComponentProps) => {
  return (
    <ul className={`flex items-center ${props.className} gap-[13px]`}>
      {props.icon.map((icon, index) => (
        <SocialIconAtom key={index} {...icon} />
      ))}
    </ul>
  );
};
