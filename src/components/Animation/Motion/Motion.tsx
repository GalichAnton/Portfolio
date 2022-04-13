import { Box, Flex, Image, forwardRef, List, Text } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import placeholder from "../../../assets/images/placeholder.png";

const ForwardBox = forwardRef((props, ref) => {
  const chakraProps = Object.fromEntries(
    // do not pass framer props to DOM element
    Object.entries(props).filter(([key]) => !isValidMotionProp(key))
  );
  return <Box ref={ref} {...chakraProps} />;
});
export const MotionBox = motion(ForwardBox);

const ForwardFlex = forwardRef((props, ref) => {
  const chakraProps = Object.fromEntries(
    // do not pass framer props to DOM element
    Object.entries(props).filter(([key]) => !isValidMotionProp(key))
  );
  return <Flex ref={ref} {...chakraProps} />;
});
export const MotionFlex = motion(ForwardFlex);

const ForwardImage = forwardRef((props, ref) => {
  const chakraProps = Object.fromEntries(
    // do not pass framer props to DOM element
    Object.entries(props).filter(([key]) => !isValidMotionProp(key))
  );
  return <Image ref={ref} fallbackSrc={placeholder} {...chakraProps} />;
});
export const MotionImage = motion(ForwardImage);
export const MotionText = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Text ref={ref} {...chakraProps} />;
  })
);

export const MotionList = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <List ref={ref} {...chakraProps} />;
  })
);
