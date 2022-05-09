import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("initial Input state", () => {
  render(
    <Input
      label="Input"
      name="input"
      type="text"
      disabled
      className="wrapper-field"
    />
  );

  const input = screen.getByTestId("input");

  test("input renders the correct text ", () => {
    expect(input?.previousSibling?.textContent).toBe("Input");
  });

  test("The input is disabled", () => {
    expect(input).toBeDisabled();
  });

  test("The Input contain la class wrapper-field", () => {
    expect(input?.parentElement).toHaveClass("wrapper-field");
  });
});
