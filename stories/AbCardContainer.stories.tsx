import React from "react";
import { AbCardContainer } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/AbCard",
  component: AbCardContainer
} as ComponentMeta<typeof AbCardContainer>

const Template: ComponentStory<typeof AbCardContainer> = args => <AbCardContainer {...args} />

export const Main = Template.bind({});
