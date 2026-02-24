"use client";

import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation";
import PortfolioTabs from "@/components/portfolio/PortfolioTabs";

export default function Home() {
  return (
    <>
      {/* Liquid effect behind all tabs */}
      <div className="fixed inset-0 z-0">
        <LiquidEffectAnimation />
      </div>
      {/* Light overlay – liquid visible, glass content stays readable */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(30, 41, 59, 0.35) 100%)",
        }}
      />
      {/* Portfolio on top */}
      <div className="relative z-10 min-h-screen">
        <PortfolioTabs />
      </div>
    </>
  );
}
