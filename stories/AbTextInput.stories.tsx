import React from "react";
import { AbTextInput, AbTextInputProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/AbTextInput",
  component: AbTextInput,
  argTypes: { label: { control: "text" } },
  parameters: { actions: { argTypesRegex: "^on.*" } }
} as ComponentMeta<typeof AbTextInput>;

const Template: ComponentStory<typeof AbTextInput> = args => <AbTextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "E-mail",
  placeholder: "seuemail@maneiro.com"
} as AbTextInputProps;
