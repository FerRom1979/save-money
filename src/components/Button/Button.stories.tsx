import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
  title: "Button",
  argTypes: {
    text: {
      defaultValue: "Button",
      control: { type: "text" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    className: {
      defaultValue: "contained",
      control: { type: "select" },
      options: ["contained", "outlined", "text"],
    },
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);
