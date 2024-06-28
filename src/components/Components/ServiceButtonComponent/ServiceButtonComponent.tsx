import { type Dispatch, type SetStateAction } from "react";

type Props = {
  buttons: string[];
  isActive: string;
  setIsActive: Dispatch<SetStateAction<string>>;
};

export const ServiceButtonComponent = (props: Props) => {
  return (
    <div className='flex items-center rounded-[10px] bg-black p-[5px]'>
      {props.buttons.map((button, index) => (
        // alert(button)
        <button
          onClick={() => props.setIsActive(button)}
          className={`h-[40px] w-[100px] rounded-[10px] ${props.isActive === button ? "bg-accentRed" : "bg-transparent"} text-[15px]`}
          key={index}
        >
          {button}
        </button>
      ))}
    </div>
  );
};
