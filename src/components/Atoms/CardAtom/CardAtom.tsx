import Image from "next/image";
import Link from "next/link";
import OverlayAtom from "../OverlayAtom/OverlayAtom";
import "./custom.css";

export type CardListProps = {
  title?: string;
  url: string;
  showCard: boolean;
};
export const CardAtom = (props: CardListProps) => {
  const { title, url, showCard } = props;
  return (
    <div
      className={`relative h-[350px] w-full overflow-hidden transition-all duration-500 lg:h-[200px] lg:w-[200px]  ${showCard ? "" : "hidden lg:block"} card_hover rounded-[15px]`}
    >
      <Link
        href={"#"}
        className={`${showCard ? "block" : "hidden"}  relative h-full w-full rounded-[12px]`}
      >
        <Image
          src={url}
          fill
          className="h-full w-full max-w-[100%] rounded-[12px] object-cover"
          alt={"title"}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <OverlayAtom />
          <div className="relative left-0 w-full px-[30px] py-[40px]">
            <span className="bg-accentRed absolute h-[12px] w-[12px] rounded-full"></span>

            <h2 className="relative left-0 pt-[14px] text-[20px] font-bold text-white">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};
