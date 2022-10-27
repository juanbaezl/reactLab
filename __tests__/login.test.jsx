import Login from "../pages/index";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders ", () => {
    render(<Login />);
  });
});