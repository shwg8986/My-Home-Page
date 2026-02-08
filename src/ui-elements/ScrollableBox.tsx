import { useRef, useState, useEffect, useCallback, ReactNode } from "react";
import { Box } from "@mui/material";

type ScrollableBoxProps = {
  maxHeight: number;
  children: ReactNode;
};

export const ScrollableBox = ({ maxHeight, children }: ScrollableBoxProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [hasOverflow, setHasOverflow] = useState(false);

  const updateThumb = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollHeight, clientHeight, scrollTop } = el;
    const overflow = scrollHeight > clientHeight;
    setHasOverflow(overflow);
    if (!overflow) return;
    const ratio = clientHeight / scrollHeight;
    const newThumbHeight = Math.max(ratio * clientHeight, 24);
    const maxTop = clientHeight - newThumbHeight;
    const newThumbTop =
      (scrollTop / (scrollHeight - clientHeight)) * maxTop;
    setThumbHeight(newThumbHeight);
    setThumbTop(newThumbTop);
  }, []);

  useEffect(() => {
    updateThumb();
    const el = scrollRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updateThumb);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateThumb]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        ref={scrollRef}
        onScroll={updateThumb}
        sx={{
          maxHeight,
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {children}
      </Box>
      {hasOverflow && (
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            backgroundColor: "#e0e0e0",
            borderRadius: "3px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: thumbTop,
              height: thumbHeight,
              width: "100%",
              backgroundColor: "#999",
              borderRadius: "3px",
            }}
          />
        </Box>
      )}
    </Box>
  );
};
