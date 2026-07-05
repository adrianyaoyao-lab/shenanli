/**
 * Animation variants for consistent motion across components
 * Using Framer Motion's spring physics for premium feel
 */

import { Variants, Transition } from "framer-motion";

// Easing functions (matching Apple's design)
export const easing = {
  smooth: [0.22, 1, 0.36, 1] as const,     // Best for most animations
  bounce: [0.34, 1.56, 0.64, 1] as const,  // For playful elements
  sharp: [0.65, 0, 0.35, 1] as const,      // For snappy interactions
  linear: [0, 0, 1, 1] as const,           // Linear (rarely use)
};

// Default transition
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: easing.smooth,
};

// Stagger children delay
export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Fade In Up - Main entrance animation
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

// Fade In Down
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

// Fade In Left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

// Fade In Right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

// Scale In
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.smooth,
    },
  },
};

// Blur In - For dramatic reveals
export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easing.smooth,
    },
  },
};

// Slide In From Bottom
export const slideInBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing.smooth,
    },
  },
};

// Page transition
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easing.smooth,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easing.smooth,
    },
  },
};

// Card hover effect
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.3,
      ease: easing.smooth,
    },
  },
};

// Button hover effect
export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: easing.sharp,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: easing.sharp,
    },
  },
};

// Text reveal animation
export const textReveal = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing.smooth,
    },
  },
};

// Floating animation
export const float: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Pulse animation
export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Rotate animation
export const rotate: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Glow pulse
export const glowPulse: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Spring configuration for useSpring
export const springConfig = {
  stiffness: 100,
  damping: 20,
  restDelta: 0.001,
};

export const gentleSpring = {
  stiffness: 50,
  damping: 15,
  restDelta: 0.001,
};
