import Link from "next/link";

export type SocialIconAtomProps = {
  icon: React.ReactNode;
  // Add props here
};

export const SocialIconAtom = (props: SocialIconAtomProps) => {
  return (
    <li>
      <Link
        href={"#"}
        className='flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 text-white'
      >
        {props.icon}
      </Link>
    </li>
  );
};
