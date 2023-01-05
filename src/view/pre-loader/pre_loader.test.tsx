import { render, screen } from "@testing-library/react";
import PreLoader from "./pre_loader";

test("Box renders correctly", () => {
  render(<PreLoader />);

  const enabledButtonRl = screen.getByTestId(
    "errorPreLoader"
  ) as HTMLImageElement;
  expect(enabledButtonRl).toBeInTheDocument();
});
