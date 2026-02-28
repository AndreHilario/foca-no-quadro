import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SlideProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function Slide({ id, className, children }: SlideProps) {
  return (
    <section
      id={id}
      className={cn(
        "h-[calc(100dvh-4rem)] snap-start px-4 py-10 md:py-14",
        className
      )}
    >
      <motion.div
        className="mx-auto flex h-full w-full max-w-6xl items-center"
        initial={{ opacity: 0, y: 22, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}