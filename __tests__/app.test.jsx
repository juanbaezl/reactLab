import App from "../pages/app";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders ", () => {
    render(<App />);
  });
});