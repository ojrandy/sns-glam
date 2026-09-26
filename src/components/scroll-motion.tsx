import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
  type Variants,
} from "motion/react";

/** Shared easing so every scroll animation on the site feels like one system. */
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";
const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: 56 },
  right: { x: -56 },
  scale: { scale: 0.92 },
  fade: {},
};

/** Fade + move content into place the first time it scrolls into view. */
export function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.9,
  blur = false,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  blur?: boolean;
}) {
  const reduce = useReducedMotion();
  const from = reduce ? {} : offsets[direction];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from, ...(blur && !reduce ? { filter: "blur(10px)" } : {}) }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        ...(blur && !reduce ? { filter: "blur(0px)" } : {}),
      }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: reduce ? 0.3 : duration, delay, ease: easeOutExpo }}
    >
      {children}
    </motion.div>
  );
}

const staggerParent = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Parent that cascades its `StaggerItem` children in one after another. */
export function Stagger({
  children,
  className = "",
  stagger = 0.12,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const reduce = useReducedMotion();
  const from = reduce ? {} : offsets[direction];
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...from },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: reduce ? 0.3 : 0.9, ease: easeOutExpo },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Headline that rises in word by word from behind a mask. */
export function SplitText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={staggerParent(0.07, delay)}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: reduce ? { opacity: 0 } : { y: "110%", rotate: 4 },
              show: {
                opacity: 1,
                y: "0%",
                rotate: 0,
                transition: { duration: 1, ease: easeOutExpo },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Image that is unveiled with a clip-path wipe, then drifts with a subtle parallax. */
export function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
  from = "bottom",
  delay = 0,
  parallax = 40,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  from?: "bottom" | "left" | "right";
  delay?: number;
  parallax?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-parallax, parallax]);
  const hidden = {
    bottom: "inset(100% 0 0 0)",
    left: "inset(0 100% 0 0)",
    right: "inset(0 0 0 100%)",
  }[from];
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={reduce ? { opacity: 0 } : { clipPath: hidden }}
      whileInView={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, delay, ease: easeOutExpo }}
    >
      {/* oversized by the parallax travel so the drift never exposes an edge */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, top: -parallax, height: `calc(100% + ${parallax * 2}px)` }}
        className={`absolute inset-x-0 w-full object-cover ${imgClassName}`}
      />
    </motion.div>
  );
}

/** Moves children vertically at a different rate than the page scroll. */
export function Parallax({
  children,
  className = "",
  speed = 60,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [speed, -speed]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Infinite ticker whose speed and direction respond to the reader's scroll velocity. */
export function VelocityMarquee({
  children,
  baseVelocity = -3,
  className = "",
}: {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(1);
  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < 0) direction.current = -1;
    else if (f > 0) direction.current = 1;
    const move = direction.current * baseVelocity * (delta / 1000) * (1 + Math.abs(f));
    baseX.set(baseX.get() + move);
  });
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex w-max whitespace-nowrap">
        {children}
        {children}
      </motion.div>
    </div>
  );
}

/** Thin progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="rose-gradient fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
    />
  );
}
