import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { LinkProps } from "./types";

export default {
  title: "Link",
  argTypes: {
    children: {
      defaultValue: "Link",
      control: { type: "text" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    className: {
      defaultValue: "btn-contained",
      control: { type: "select" },
      options: ["btn-contained", undefined],
    },
  },
} as ComponentMeta<typeof Link>;

export const Template: ComponentStory<typeof Link> = ({
  children,
  ...rest
}: LinkProps) => (
  <Router
    location="/"
    navigator={createMemoryHistory({ initialEntries: ["/"] })}
  >
    <Link {...rest}>{children}</Link>
  </Router>
);
