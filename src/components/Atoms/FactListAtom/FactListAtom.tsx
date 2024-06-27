import { PlusOutlined } from "@ant-design/icons";
import React from "react";

export type FactListAtomProps = {
  amount: string;
  text: string;
};

const FactListAtom = (props: FactListAtomProps) => {
  return (
    <div className="flex items-center gap-[13px]">
      <div>
        <span className="text-[42px] font-bold text-white">{props.amount}</span>
      </div>
      <div>
        <span className="text-[18px] font-bold text-[#ff4a17]">+</span>
        <p className="text-[1rem] text-[#ffffffb2]">{props.text}</p>
      </div>
    </div>
  );
};

export default FactListAtom;
