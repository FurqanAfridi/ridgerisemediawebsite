import * as React from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type PanInfo,
} from "motion/react";
import { ChevronLeft, ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { VerticalCardArt } from "@/components/ui/vertical-card-art";
import "./card-stack.css";

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
  background?: string;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];
  initialIndex?: number;
  maxVisible?: number;
  cardWidth?: number;
  cardHeight?: number;
  overlap?: number;
  spreadDeg?: number;
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;
  springStiffness?: number;
  springDamping?: number;
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  className?: string;
  onChangeIndex?: (index: number, item: T) => void;
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

function signedOffset(i: number, active: number, len: number, loop: boolean) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

function isExternalHref(href: string) {
  return /^(https?:)?\/\//.test(href);
}

function useStageWidth(ref: React.RefObject<HTMLDivElement | null>) {
  const [width, setWidth] = React.useState(720);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = (next: number) => {
      setWidth((prev) => (Math.abs(prev - next) < 1 ? prev : next));
    };

    apply(el.getBoundingClientRect().width);

    const observer = new ResizeObserver((entries) => {
      const next = entries[0]?.contentRect.width ?? 0;
      apply(next);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return width;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 7,
  cardWidth = 680,
  cardHeight = 460,
  overlap = 0.52,
  spreadDeg = 36,
  perspectivePx = 1100,
  depthPx = 140,
  tiltXDeg = 10,
  activeLiftPx = 22,
  activeScale = 1.03,
  inactiveScale = 0.94,
  springStiffness = 280,
  springDamping = 28,
  loop = true,
  autoAdvance = false,
  intervalMs = 2800,
  pauseOnHover = true,
  showDots = true,
  className,
  onChangeIndex,
  renderCard,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const stageRef = React.useRef<HTMLDivElement>(null);
  const stageWidth = useStageWidth(stageRef);
  const len = items.length;

  const [active, setActive] = React.useState(() => wrapIndex(initialIndex, len));
  const [hovering, setHovering] = React.useState(false);

  const resolvedWidth = React.useMemo(() => {
    if (!stageWidth) return Math.min(cardWidth, 360);
    return Math.min(cardWidth, Math.max(280, stageWidth * 0.88));
  }, [cardWidth, stageWidth]);

  const resolvedHeight = Math.round(resolvedWidth * (cardHeight / cardWidth));

  React.useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  React.useEffect(() => {
    if (!len) return;
    const item = items[active];
    if (item) onChangeIndex?.(active, item);
    // items/onChangeIndex identity can change every parent render
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only notify when the selected index changes
  }, [active, len]);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(10, Math.round(resolvedWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = React.useCallback(() => {
    if (!len || !canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = React.useCallback(() => {
    if (!len || !canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  React.useEffect(() => {
    if (!autoAdvance || reduceMotion || !len) return;
    if (pauseOnHover && hovering) return;

    const id = window.setInterval(() => {
      if (loop || active < len - 1) next();
    }, Math.max(700, intervalMs));

    return () => window.clearInterval(id);
  }, [
    autoAdvance,
    intervalMs,
    hovering,
    pauseOnHover,
    reduceMotion,
    len,
    loop,
    active,
    next,
  ]);

  if (!len) return null;

  const activeItem = items[active]!;
  const stageHeight = Math.max(460, resolvedHeight + 96);

  return (
    <div
      className={cn("card-stack", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        ref={stageRef}
        className="card-stack__stage"
        style={{ height: stageHeight }}
        tabIndex={0}
        role="listbox"
        aria-label="Vertical cards"
        aria-activedescendant={`card-stack-${String(activeItem.id)}`}
        onKeyDown={onKeyDown}
      >
        <div className="card-stack__wash card-stack__wash--top" aria-hidden="true" />
        <div className="card-stack__wash card-stack__wash--bottom" aria-hidden="true" />
        {len > 1 ? (
          <>
            <button
              type="button"
              className="card-stack__arrow card-stack__arrow--prev"
              onClick={prev}
              aria-label="Previous vertical"
            >
              <ChevronLeft size={22} strokeWidth={2.4} />
            </button>
            <button
              type="button"
              className="card-stack__arrow card-stack__arrow--next"
              onClick={next}
              aria-label="Next vertical"
            >
              <ChevronRight size={22} strokeWidth={2.4} />
            </button>
          </>
        ) : null}

        <div
          className="card-stack__scene"
          style={{ perspective: `${perspectivePx}px` }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len, loop);
              const abs = Math.abs(off);
              if (abs > maxOffset) return null;

              const rotateZ = off * stepDeg;
              const x = off * cardSpacing;
              const y = abs * 10;
              const z = -abs * depthPx;
              const isActive = off === 0;
              const scale = isActive ? activeScale : inactiveScale;
              const lift = isActive ? -activeLiftPx : 0;
              const rotateX = isActive ? 0 : tiltXDeg;

              const onDragEnd = (_e: unknown, info: PanInfo) => {
                if (reduceMotion) return;
                const travel = info.offset.x;
                const v = info.velocity.x;
                const threshold = Math.min(160, resolvedWidth * 0.22);
                if (travel > threshold || v > 650) prev();
                else if (travel < -threshold || v < -650) next();
              };

              return (
                <motion.div
                  key={item.id}
                  id={`card-stack-${String(item.id)}`}
                  role="option"
                  aria-selected={isActive}
                  className={cn(
                    "card-stack__card",
                    isActive ? "card-stack__card--active" : "card-stack__card--idle",
                  )}
                  style={{
                    width: resolvedWidth,
                    height: resolvedHeight,
                    zIndex: 100 - abs,
                    transformStyle: "preserve-3d",
                  }}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: y + 40,
                          x,
                          rotateZ,
                          rotateX,
                          scale,
                        }
                  }
                  animate={{
                    opacity: 1,
                    x,
                    y: y + lift,
                    rotateZ,
                    rotateX,
                    scale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: springStiffness,
                    damping: springDamping,
                  }}
                  drag={isActive && !reduceMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  whileHover={
                    !isActive && !reduceMotion
                      ? { scale: inactiveScale + 0.045, y: y + lift - 18 }
                      : undefined
                  }
                  whileTap={
                    !reduceMotion ? { scale: (isActive ? activeScale : inactiveScale) * 0.98 } : undefined
                  }
                  onDragEnd={isActive ? onDragEnd : undefined}
                  onClick={() => setActive(i)}
                >
                  <TiltLayer active={isActive} depth={z}>
                    {renderCard ? (
                      renderCard(item, { active: isActive })
                    ) : (
                      <DefaultFanCard item={item} active={isActive} />
                    )}
                  </TiltLayer>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {showDots && len > 1 ? (
        <div className="card-stack__nav">
          <div className="card-stack__dots">
            {items.map((it, idx) => {
              const on = idx === active;
              return (
                <button
                  key={it.id}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={cn(
                    "card-stack__dot",
                    on && "card-stack__dot--on",
                  )}
                  aria-label={`Go to ${it.title}`}
                  aria-current={on ? "true" : undefined}
                />
              );
            })}
          </div>
          {activeItem.href ? (
            isExternalHref(activeItem.href) ? (
              <a
                href={activeItem.href}
                target="_blank"
                rel="noreferrer"
                className="card-stack__open"
                aria-label={`Open ${activeItem.title}`}
              >
                <SquareArrowOutUpRight size={16} strokeWidth={2.25} />
              </a>
            ) : (
              <Link
                to={activeItem.href}
                className="card-stack__open"
                aria-label={`View ${activeItem.title}`}
              >
                <SquareArrowOutUpRight size={16} strokeWidth={2.25} />
              </Link>
            )
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function TiltLayer({
  active,
  depth,
  children,
}: {
  active: boolean;
  depth: number;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 220, damping: 22 });
  const sy = useSpring(py, { stiffness: 220, damping: 22 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);

  return (
    <motion.div
      className="card-stack__depth"
      style={{
        rotateX: active && !reduce ? rotateX : 0,
        rotateY: active && !reduce ? rotateY : 0,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        z: depth,
      }}
      onMouseMove={(e) => {
        if (!active || reduce) return;
        const rect = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - rect.left) / rect.width - 0.5);
        py.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

function DefaultFanCard({
  item,
  active,
}: {
  item: CardStackItem;
  active: boolean;
}) {
  const cta = item.ctaLabel ?? `View ${item.title}`;
  const slug = String(item.id);

  return (
    <div className={cn("fan-card", active && "fan-card--active")}>
      <div
        className="fan-card__media"
        style={item.background ? { background: item.background } : undefined}
      >
        {item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt=""
            className="fan-card__img"
            draggable={false}
            loading="eager"
          />
        ) : (
          <div className="fan-card__empty">No image</div>
        )}
        <VerticalCardArt slug={slug} active={active} />
        <span className="fan-card__shine" aria-hidden="true" />
      </div>
      <div className="fan-card__copy">
        {item.tag ? <span className="fan-card__tag">{item.tag}</span> : null}
        <h3 className="fan-card__title">{item.title}</h3>
        {item.description ? (
          <p className="fan-card__desc">{item.description}</p>
        ) : null}
        {item.href ? (
          isExternalHref(item.href) ? (
            <a
              href={item.href}
              className="fan-card__cta"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              {cta}
            </a>
          ) : (
            <Link
              to={item.href}
              className="fan-card__cta"
              onClick={(e) => e.stopPropagation()}
            >
              {cta}
            </Link>
          )
        ) : null}
      </div>
    </div>
  );
}
