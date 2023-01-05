import { render, screen } from "@testing-library/react";
import { Size, useWindowSize } from "core/custom-hooks/use_window_size";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";
import Home from "../home/home";

test("Navigation Container renders correctly", async () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  const containerEl = screen.getByTestId("navigationContainer");
  expect(containerEl).toBeInTheDocument();

  const contentEl = screen.getByTestId("navigationContent") as HTMLImageElement;
  expect(contentEl).toHaveStyle("overflow: hidden");
});

it("renders without crashing", async () => {
  const wrapper = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  expect(wrapper).toMatchSnapshot();
  wrapper.unmount();
});
