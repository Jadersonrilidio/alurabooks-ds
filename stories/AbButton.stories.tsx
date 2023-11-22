import React from "react";
import { AbButton, AbButtonProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/AbButton",
  component: AbButton
} as ComponentMeta<typeof AbButton>

const Template: ComponentStory<typeof AbButton> = (args) => <AbButton {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary AbButton",
  type: "primary"
} as AbButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary AbButton",
  type: "secondary"
} as AbButtonProps;
