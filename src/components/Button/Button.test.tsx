import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("initial Button state", () => {
  test("Button renders the correct text ", () => {
    render(<Button text="BUTTON" type="button" />);
    const inputField = screen.getByTestId("button");
    expect(inputField.textContent).toBe("BUTTON");
  });
});
