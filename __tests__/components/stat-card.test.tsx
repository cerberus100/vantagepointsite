import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatCard } from "@/components/stat-card";

describe("StatCard", () => {
  it("renders title and value", () => {
    render(<StatCard title="Test Metric" value="+50%" />);
    
    expect(screen.getByText("Test Metric")).toBeInTheDocument();
    expect(screen.getByText("+50%")).toBeInTheDocument();
  });

  it("renders qualifier when provided", () => {
    render(<StatCard title="Rating" value="4.8" qualifier="★" />);
    
    expect(screen.getByText("★")).toBeInTheDocument();
  });

  it("renders footnote when provided", () => {
    render(
      <StatCard
        title="Completion"
        value="89%"
        footnote="vs. 62% industry average"
      />
    );
    
    expect(screen.getByText("vs. 62% industry average")).toBeInTheDocument();
  });

  it("applies correct styling", () => {
    render(<StatCard title="Test" value="100" />);
    
    const card = screen.getByText("Test").closest("div");
    expect(card).toBeInTheDocument();
  });
});
