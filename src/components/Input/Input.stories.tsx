import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./index";

export default {
  title: "Input",
  argTypes: {
    label: {
      defaultValue: "Input",
      control: { type: "text" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    placeholder: {
      defaultValue: "fullName",
      control: { type: "text" },
    },
    type: {
      defaultValue: "text",
      control: { type: "select" },
      options: ["text", "password", "email", "number"],
    },
    isRequire: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = (props) => (
  <Input className="wrapper-field" {...props} />
);
