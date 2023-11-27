import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbTag, AbTagProps } from "../src";

export default {
  title: "Components/AbTag",
  component: AbTag
} as ComponentMeta<typeof AbTag>;

const Template: ComponentStory<typeof AbTag> = args => <AbTag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "AbTag"
} as AbTagProps;
