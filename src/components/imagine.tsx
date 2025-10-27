import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Imagine() {
  const { ref, isInView } = useScrollAnimation();

  const items = [
    "Experience total confidence in your path and life decisions.",
    "Gain success authentically, without the need to people-please.",
    "Set and hold clear limits with ease, eliminating guilt and obligation.",
    "Dissolve the weight of the past and commit fully to a breakthrough future.",
    "Instantly know your most important tasks, ending the overwhelm cycle.",
    "Break destructive patterns and lock in purposeful, successful actions.",
    "Wake up energized and focused after deep, restorative sleep.",
    "Effortlessly rediscover passion in movement, hobbies, and personal time.",
    "Feel unshakeable confidence in your professional growth and future.",
    "Reframe every setback as a powerful learning opportunity.",
  ];

  return (
    <motion.div
      id="imagine-section"
      ref={ref}
      className="bg-primary text-primary-foreground w-full min-h-[85vh] flex flex-col items-center justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center mb-4 text-3xl md:text-4xl font-semibold"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Start Living the Upgraded You.
      </motion.div>

      <motion.div
        className="text-center mb-8 text-xl font-medium"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        You will Anchor a new, powerful identity and begin to:
      </motion.div>

      <motion.div
        className="max-w-4xl w-full text-left space-y-3 my-12 text-xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{
              duration: 0.4,
              delay: 0.4 + index * 0.05,
            }}
          >
            <motion.span
              className="mr-3"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{
                duration: 0.3,
                delay: 0.45 + index * 0.05,
                type: "spring",
                stiffness: 400,
              }}
            >
              -
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5 + index * 0.05,
              }}
            >
              {item}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 30, scale: 0.9 }
        }
        transition={{
          duration: 0.6,
          delay: 1.0,
          type: "spring",
          stiffness: 100,
        }}
      >
        <motion.span
          className="inline-block text-3xl md:text-4xl font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          This can be your life.
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
