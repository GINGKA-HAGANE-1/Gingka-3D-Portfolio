export const textVariant = (delay) => ({
  hidden: {
    y: -20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.75,
      delay: delay,
      ease: "easeOut"
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: delay,
      duration: duration * 0.75,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay: delay,
      duration: duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
