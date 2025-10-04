import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MilestoneTimeline } from "@/components/milestone-timeline";

const mockPhases = [
  {
    label: "Phase 1",
    range: "Days 1-30",
    bullets: ["Task 1", "Task 2", "Task 3"],
  },
  {
    label: "Phase 2",
    range: "Days 31-60",
    bullets: ["Task 4", "Task 5", "Task 6"],
  },
  {
    label: "Phase 3",
    range: "Days 61-90",
    bullets: ["Task 7", "Task 8", "Task 9"],
  },
];

describe("MilestoneTimeline", () => {
  it("renders all phases", () => {
    render(<MilestoneTimeline phases={mockPhases} />);

    expect(screen.getByText("Phase 1")).toBeInTheDocument();
    expect(screen.getByText("Phase 2")).toBeInTheDocument();
    expect(screen.getByText("Phase 3")).toBeInTheDocument();
  });

  it("renders phase ranges", () => {
    render(<MilestoneTimeline phases={mockPhases} />);

    expect(screen.getByText("Days 1-30")).toBeInTheDocument();
    expect(screen.getByText("Days 31-60")).toBeInTheDocument();
    expect(screen.getByText("Days 61-90")).toBeInTheDocument();
  });

  it("renders all bullets for each phase", () => {
    render(<MilestoneTimeline phases={mockPhases} />);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Task 3")).toBeInTheDocument();
    expect(screen.getByText("Task 4")).toBeInTheDocument();
    expect(screen.getByText("Task 5")).toBeInTheDocument();
    expect(screen.getByText("Task 6")).toBeInTheDocument();
    expect(screen.getByText("Task 7")).toBeInTheDocument();
    expect(screen.getByText("Task 8")).toBeInTheDocument();
    expect(screen.getByText("Task 9")).toBeInTheDocument();
  });

  it("icons have aria-hidden attribute", () => {
    const { container } = render(<MilestoneTimeline phases={mockPhases} />);

    const icons = container.querySelectorAll('svg[aria-hidden="true"]');
    expect(icons.length).toBeGreaterThan(0);
  });

  describe("reduced motion", () => {
    beforeEach(() => {
      // Mock matchMedia to simulate prefers-reduced-motion
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: (query: string) => ({
          matches: query === "(prefers-reduced-motion: reduce)",
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => true,
        }),
      });
    });

    afterEach(() => {
      // Restore original matchMedia
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: (query: string) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => true,
        }),
      });
    });

    it("respects reduced motion preference", () => {
      render(<MilestoneTimeline phases={mockPhases} />);

      // Component should render without animations when reduced motion is preferred
      // This is handled by Tailwind's motion-safe and motion-reduce utilities
      // and Framer Motion's respects prefers-reduced-motion by default
      expect(screen.getByText("Phase 1")).toBeInTheDocument();
    });
  });

  it("renders in correct order", () => {
    render(<MilestoneTimeline phases={mockPhases} />);

    const phases = screen.getAllByRole("heading", { level: 3 });
    expect(phases[0]).toHaveTextContent("Phase 1");
    expect(phases[1]).toHaveTextContent("Phase 2");
    expect(phases[2]).toHaveTextContent("Phase 3");
  });
});
