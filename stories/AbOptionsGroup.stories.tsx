import React from "react";
import { AbOptionsGroup, AbOptionsGroupProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/AbOptionsGroup",
  component: AbOptionsGroup
} as ComponentMeta<typeof AbOptionsGroup>;

const Template: ComponentStory<typeof AbOptionsGroup> = args => <AbOptionsGroup {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  options: [
    {
      id: 1,
      title: "E-book",
      body: "R$ 22,00",
      footer: ".pdf, .epub, .mob"
    },
    {
      id: 2,
      title: "Book",
      body: "R$ 47,00",
      footer: ".pdf, .epub, .mob"
    },
    {
      id: 3,
      title: "Hardcover Book",
      body: "R$ 94,00",
      footer: ".pdf, .epub, .mob"
    }
  ],
  direction: "column",
  defaultOption: 1
} as AbOptionsGroupProps;
