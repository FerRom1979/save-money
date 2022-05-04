import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("initial Title state", () => {
  render(<Title text="Title" variant="h1" color="red" />);
  const title = screen.getByTestId("title");

  test("The tile to render text", () => {
    expect(title.textContent).toBe("Title");
  });

  test("The title to have class", () => {
    expect(title.getAttribute("color")).toBe("red");
  });
});
