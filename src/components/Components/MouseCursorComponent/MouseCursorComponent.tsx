import { AnimatePresence, type MotionValue, motion } from "framer-motion";
import { MouseCursorAtom } from "~/components/Atoms/MouseCursorAtom/MouseCursorAtom";
import "./custom.css";
type Props = {
  mouseCursorAtomProps: React.ComponentProps<typeof MouseCursorAtom>;
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
};

export const MouseCursorComponent = (props: Props) => {
  const { cursorX, cursorY } = props;
  return (
    <AnimatePresence>
      <motion.div
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
        className="cursor-container"
      ></motion.div>
      <MouseCursorAtom {...props.mouseCursorAtomProps} />
    </AnimatePresence>
  );
};
