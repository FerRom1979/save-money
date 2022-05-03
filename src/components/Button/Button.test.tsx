import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import { BsFacebook } from "react-icons/bs";

describe("initial Button state", () => {
  const mockHandler = jest.fn();

  render(
    <Button
      text="BUTTON"
      type="button"
      onClick={mockHandler}
      disabled
      className="btn-icon"
    >
      <BsFacebook size={24} />
    </Button>
  );

  const button = screen.getByTestId("button");

  test("Button renders the correct text ", () => {
    expect(button.textContent).toBe("BUTTON");
  });

  test("Clicking the button calls event handler once", () => {
    fireEvent.click(button);
    expect(mockHandler.mock.calls).toHaveLength(0);
  });

  test("The button is disabled", () => {
    expect(button).toBeDisabled();
  });

  test("The button render icon", () => {
    expect(button.lastChild).toContainHTML("svg");
  });
  test("The button contain la class btn-icon", () => {
    expect(button).toHaveClass("btn-icon");
  });
});
