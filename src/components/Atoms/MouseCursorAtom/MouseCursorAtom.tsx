import { type MotionValue, motion } from "framer-motion";

type Props = {
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
};

export const MouseCursorAtom = (props: Props) => {
  const { cursorX, cursorY } = props;
  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className='cursor hidden md:flex'
    />
  );
};
