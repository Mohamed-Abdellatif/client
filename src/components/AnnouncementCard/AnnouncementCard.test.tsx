import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AnnouncementCard from "./AnnouncementCard";
import GenericCard from "../GenericCard/GenericCard";

describe("AnnouncementCard", () => {
  const mockAnnouncement = {
    _id: 1,
    avatar: "A",
    name: "John Doe",
    subject: "Math",
    message: "Test announcement message",
  };

  it("renders announcement details correctly", () => {
    render(<AnnouncementCard announcement={mockAnnouncement} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Math")).toBeInTheDocument();
    expect(screen.getByText("Test announcement message")).toBeInTheDocument();
  });

  it("renders divider when not last item", () => {
    render(
      <GenericCard showDivider>
        <AnnouncementCard announcement={mockAnnouncement} />
      </GenericCard>
    );
    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });

  it("does not render divider for last item", () => {
    render(
      <GenericCard showDivider={false}>
        <AnnouncementCard announcement={mockAnnouncement} />
      </GenericCard>
    );
    expect(screen.queryByTestId("divider")).not.toBeInTheDocument();
  });
});
