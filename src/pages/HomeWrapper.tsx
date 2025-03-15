import React, { useState, useEffect } from "react";
import { Home } from "./Home";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
};

const spinnerStyle: React.CSSProperties = {
  border: "8px solid #f3f3f3",
  borderTop: "8px solid #3498db",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  animation: "spin 1s linear infinite",
};

const textStyle: React.CSSProperties = {
  marginTop: "20px",
  fontSize: "16px",
  color: "#000",
};

const spinnerKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// フェードアウト用オーバーレイのスタイル
const fadeOverlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
  animation: "fadeOut 2s forwards",
  zIndex: 999,
};

const fadeKeyframes = `
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

export const HomeWrapper: React.FC = () => {
  // "loading"：ローディング中, "fade"：フェードアウト中, "done"：Home 表示
  const [phase, setPhase] = useState<"loading" | "fade" | "done">("loading");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("fade"), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "fade") {
      const timer = setTimeout(() => setPhase("done"), 3500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  if (phase === "loading") {
    return (
      <div style={containerStyle}>
        <div style={spinnerStyle} />
        <p style={textStyle}>Now Loading...</p>
        <style>{spinnerKeyframes}</style>
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <Home />
      {phase === "fade" && (
        <>
          <div style={fadeOverlayStyle} />
          <style>{fadeKeyframes}</style>
        </>
      )}
    </div>
  );
};
