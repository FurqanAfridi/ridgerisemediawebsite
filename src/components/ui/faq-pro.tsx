import { ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import "./faq-pro.css";

const PANEL_EASE = [0.16, 1, 0.3, 1] as const;
const EXPAND_SPRING = {
  type: "spring" as const,
  stiffness: 150,
  damping: 26,
  mass: 1.05,
};
const COLLAPSE_SPRING = {
  type: "spring" as const,
  stiffness: 190,
  damping: 30,
  mass: 1.1,
};

export type FaqProItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqProProps = {
  className?: string;
  defaultOpenFirst?: boolean;
  items: FaqProItem[];
  searchPlaceholder?: string;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text: string, query: string): ReactNode {
  const normalizedQuery = query.trim();
  if (!normalizedQuery) return text;

  const parts = text.split(
    new RegExp(`(${escapeRegExp(normalizedQuery)})`, "gi"),
  );

  return parts.map((part, index) => {
    if (part.toLowerCase() === normalizedQuery.toLowerCase()) {
      return (
        <mark className="faq-pro__mark" key={index}>
          {part}
        </mark>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function itemMatchesQuery(item: FaqProItem, query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;
  return (
    item.question.toLowerCase().includes(normalizedQuery) ||
    item.answer.toLowerCase().includes(normalizedQuery)
  );
}

function getDefaultOpenId(items: FaqProItem[], defaultOpenFirst: boolean) {
  if (defaultOpenFirst && items[0]) return items[0].id;
  return null;
}

type FaqProRowProps = {
  isOpen: boolean;
  item: FaqProItem;
  onToggle: () => void;
  panelId: string;
  query: string;
  triggerId: string;
};

function FaqProRow({
  isOpen,
  item,
  onToggle,
  panelId,
  query,
  triggerId,
}: FaqProRowProps) {
  return (
    <div className="faq-pro__row">
      <button
        type="button"
        id={triggerId}
        className="faq-pro__trigger"
        aria-controls={panelId}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="faq-pro__question">
          {highlightText(item.question, query)}
        </span>
        <ChevronDown
          aria-hidden
          className={cn("faq-pro__chevron", isOpen && "faq-pro__chevron--open")}
          size={16}
        />
      </button>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="faq-pro__panel"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{
          height: isOpen ? EXPAND_SPRING : COLLAPSE_SPRING,
        }}
      >
        <motion.div
          className="faq-pro__answer"
          aria-hidden={!isOpen}
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -6,
          }}
          transition={{
            opacity: {
              duration: isOpen ? 0.38 : 0.2,
              ease: PANEL_EASE,
              delay: isOpen ? 0.06 : 0,
            },
            y: isOpen ? EXPAND_SPRING : COLLAPSE_SPRING,
          }}
        >
          {highlightText(item.answer, query)}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function FaqPro({
  className,
  defaultOpenFirst = false,
  items,
  searchPlaceholder = "Search FAQs…",
}: FaqProProps) {
  const listId = useId();
  const wasSearchingRef = useRef(false);

  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(() =>
    getDefaultOpenId(items, defaultOpenFirst),
  );

  const normalizedQuery = query.trim();
  const isSearching = normalizedQuery.length > 0;

  const visibleItems = useMemo(
    () => items.filter((item) => itemMatchesQuery(item, query)),
    [items, query],
  );

  useEffect(() => {
    if (isSearching) {
      wasSearchingRef.current = true;
      setOpenId((current) => {
        if (current && visibleItems.some((item) => item.id === current)) {
          return current;
        }
        return visibleItems[0]?.id ?? null;
      });
      return;
    }

    if (wasSearchingRef.current) {
      wasSearchingRef.current = false;
      setOpenId(getDefaultOpenId(items, defaultOpenFirst));
    }
  }, [defaultOpenFirst, isSearching, items, visibleItems]);

  useEffect(() => {
    setOpenId((current) => {
      if (!current) return current;
      return items.some((item) => item.id === current) ? current : null;
    });
  }, [items]);

  const toggleItem = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <div className={cn("faq-pro", className)}>
      <div className="faq-pro__search">
        <input
          type="search"
          className="faq-pro__input"
          aria-label={searchPlaceholder}
          placeholder={searchPlaceholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query ? (
          <button
            type="button"
            className="faq-pro__clear"
            aria-label="Clear search"
            onClick={() => setQuery("")}
          >
            <X aria-hidden size={16} />
          </button>
        ) : null}
      </div>

      <div className="faq-pro__list">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleItems.length > 0 ? (
            visibleItems.map((item) => (
              <motion.div
                key={item.id}
                layout="position"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2, ease: PANEL_EASE }}
              >
                <FaqProRow
                  isOpen={openId === item.id}
                  item={item}
                  onToggle={() => toggleItem(item.id)}
                  panelId={`${listId}-${item.id}-panel`}
                  query={query}
                  triggerId={`${listId}-${item.id}-trigger`}
                />
              </motion.div>
            ))
          ) : (
            <motion.p
              key="empty"
              className="faq-pro__empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No FAQs match your search.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

FaqPro.displayName = "FaqPro";
