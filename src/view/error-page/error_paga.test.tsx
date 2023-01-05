import { render, screen } from "@testing-library/react";
import ErrorPage from "./error_page";

test("Image renders correctly", () => {
  render(<ErrorPage />);

  const imageEl = screen.getByRole("img") as HTMLImageElement;
  expect(imageEl).toBeInTheDocument();
  expect(imageEl.src).toContain("http://localhost:3000/error_page.png");
});

test("typography renders correctly", () => {
  render(<ErrorPage />);

  const typographyEl = screen.getByTestId("errorMessage") as HTMLImageElement;
  expect(typographyEl).toBeInTheDocument();
});
