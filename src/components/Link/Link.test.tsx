import React from "react";
import { render, screen } from "@testing-library/react";
import Link from "./LinkComponent";
import { BsFacebook } from "react-icons/bs";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("initial Link state", () => {
  render(
    <Router
      location="/"
      navigator={createMemoryHistory({ initialEntries: ["/"] })}
    >
      <Link routed="/" text="Link" className="link-text">
        <BsFacebook />
      </Link>
    </Router>
  );
  const link = screen.getByTestId("link");

  test("The Link to render child", () => {
    expect(link.lastChild).toContainHTML("svg");
  });

  test("The Link to render text", () => {
    expect(link.textContent).toBe("Link");
  });

  test("The Link to have class", () => {
    expect(link).toHaveClass("link-text");
  });

  test("The Link to have attribute to", () => {
    expect(link.getAttribute("href")).toBe("/");
  });
});
