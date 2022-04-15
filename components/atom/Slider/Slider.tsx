import { useRef, useEffect, useState } from 'react';

import { useMotionValue, motion } from 'framer-motion';

const SliderWrap = ({
  children,
  sliderRef,
  x,
  sliderConstraints,
  bounceStiffness,
  bounceDamping
}: any) => {
  return (
    <div>
      <motion.div
        ref={sliderRef}
        drag="x"
        initial={{ x: 0 }}
        style={{ x }}
        dragConstraints={{
          left: -sliderConstraints,
          right: 0
        }}
        className="flex items-center space-x-3 whitespace-nowrap"
        dragTransition={{ bounceStiffness, bounceDamping }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const DragSlider = ({ children, bounceStiffness = 100, bounceDamping = 10 }: any) => {
  const ref: any = useRef();
  const x = useMotionValue(0);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
  const [sliderConstraints, setSliderConstraints] = useState(0);

  useEffect(() => {
    if (!ref && !ref.current) return;

    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(ref?.current?.scrollWidth);
    };

    calcSliderChildrenWidth();

    const calcSliderWidth = () => {
      setSliderWidth(ref?.current?.clientWidth);
    };

    calcSliderWidth();
    window.addEventListener('resize', calcSliderWidth);

    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth);
    };

    calcSliderConstraints();
    window.addEventListener('resize', calcSliderConstraints);
  }, [ref, sliderChildrenWidth, sliderWidth]);

  return (
    <SliderWrap
      sliderRef={ref}
      x={x}
      sliderConstraints={sliderConstraints}
      bounceStiffness={bounceStiffness}
      bounceDamping={bounceDamping}
    >
      {children}
    </SliderWrap>
  );
};
