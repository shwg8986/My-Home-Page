import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  // スクロール位置が300px以上ならボタンを表示
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // クリック時にトップへスムーズにスクロール
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="small"
        onClick={scrollToTop}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollTop;
