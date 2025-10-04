import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AssuranceStack } from "@/components/assurance-stack";
import { FileText } from "lucide-react";

const mockItems = [
  {
    icon: <FileText className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Test Item 1",
    summary: "Test summary 1",
    downloadHref: "/test1.pdf",
    popover: {
      heading: "Test Details",
      bullets: ["Detail 1", "Detail 2", "Detail 3"],
    },
  },
  {
    icon: <FileText className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Test Item 2",
    summary: "Test summary 2",
  },
  {
    icon: <FileText className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Test Item 3",
    summary: "Test summary 3",
    downloadHref: "/test3.pdf",
  },
  {
    icon: <FileText className="h-6 w-6 text-teal" aria-hidden="true" />,
    title: "Test Item 4",
    summary: "Test summary 4",
  },
];

describe("AssuranceStack", () => {
  it("renders all cards", () => {
    render(<AssuranceStack items={mockItems} />);

    expect(screen.getByText("Test Item 1")).toBeInTheDocument();
    expect(screen.getByText("Test Item 2")).toBeInTheDocument();
    expect(screen.getByText("Test Item 3")).toBeInTheDocument();
    expect(screen.getByText("Test Item 4")).toBeInTheDocument();
  });

  it("renders summaries for each card", () => {
    render(<AssuranceStack items={mockItems} />);

    expect(screen.getByText("Test summary 1")).toBeInTheDocument();
    expect(screen.getByText("Test summary 2")).toBeInTheDocument();
    expect(screen.getByText("Test summary 3")).toBeInTheDocument();
    expect(screen.getByText("Test summary 4")).toBeInTheDocument();
  });

  it("renders download buttons for items with downloadHref", () => {
    render(<AssuranceStack items={mockItems} />);

    const downloadButtons = screen.getAllByText("Download");
    expect(downloadButtons).toHaveLength(2);
  });

  it("renders info button for items with popover", () => {
    render(<AssuranceStack items={mockItems} />);

    const infoButton = screen.getByLabelText(
      "More information about Test Item 1"
    );
    expect(infoButton).toBeInTheDocument();
  });

  it("reveals popover details on click", async () => {
    const user = userEvent.setup();
    render(<AssuranceStack items={mockItems} />);

    const infoButton = screen.getByLabelText(
      "More information about Test Item 1"
    );
    await user.click(infoButton);

    expect(screen.getByText("Test Details")).toBeInTheDocument();
    expect(screen.getByText("Detail 1")).toBeInTheDocument();
    expect(screen.getByText("Detail 2")).toBeInTheDocument();
    expect(screen.getByText("Detail 3")).toBeInTheDocument();
  });

  it("all cards are keyboard accessible", async () => {
    const user = userEvent.setup();
    render(<AssuranceStack items={mockItems} />);

    // Tab to first info button
    await user.tab();
    const infoButton = screen.getByLabelText(
      "More information about Test Item 1"
    );
    expect(infoButton).toHaveFocus();

    // Press Enter to open popover
    await user.keyboard("{Enter}");
    expect(screen.getByText("Test Details")).toBeInTheDocument();

    // Press Escape to close popover
    await user.keyboard("{Escape}");
    expect(screen.queryByText("Test Details")).not.toBeInTheDocument();
  });

  it("download links have correct href", () => {
    render(<AssuranceStack items={mockItems} />);

    const downloadLinks = screen.getAllByRole("link", { name: /download/i });
    expect(downloadLinks[0]).toHaveAttribute("href", "/test1.pdf");
    expect(downloadLinks[1]).toHaveAttribute("href", "/test3.pdf");
  });
});
