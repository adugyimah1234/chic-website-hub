import { useState, useEffect, type ReactNode } from "react";
import { motion, useScroll, AnimatePresence, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  delay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [activeTick, setActiveTick] = useState(0);
  const totalTicks = 35;

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const activeIndex = Math.min(Math.floor(latest * totalTicks), totalTicks - 1);
      setActiveTick(activeIndex);
    });
  }, [scrollYProgress]);

  return (
    <div className="ruler-progress">
      <div className="ruler-track" />
      <div className="ruler-marks">
        {Array.from({ length: totalTicks }).map((_, i) => (
          <span key={i} className={i <= activeTick ? "active" : ""} />
        ))}
      </div>
    </div>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
