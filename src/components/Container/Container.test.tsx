import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("initial Container state", () => {
  render(
    <Container>
      <h2>title</h2>
    </Container>
  );
  const container = screen.getByTestId("container");

  test("The container to render child", () => {
    expect(container.lastChild).toContainHTML("h2");
  });
});
