import React from "react";
import { AbQuantityInput, AbQuantityInputProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/AbQuantityInput",
  component: AbQuantityInput
} as ComponentMeta<typeof AbQuantityInput>;

const Template: ComponentStory<typeof AbQuantityInput> = args => <AbQuantityInput {...args} />;

export const Component = Template.bind({});

Component.args = {
  label: "Quantity"
} as AbQuantityInputProps;
