import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

type LinkArrowProps = {
  title: string;
};

const LinkArrow = (props: LinkArrowProps) => {
  return (
    <Link href={"#"} className="flex items-center gap-[10px]  text-white">
      <span className="text-[18px]">{props.title}</span>
      <ArrowRightOutlined />
    </Link>
  );
};

export default LinkArrow;
