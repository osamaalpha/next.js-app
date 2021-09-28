import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SingleProduct } from "./singleProduct";

export default {
  title: "Example/Card",
  component: SingleProduct,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SingleProduct>;

// Default card
const Template: ComponentStory<typeof SingleProduct> = (args) => (
  <SingleProduct {...args} />
);

// Small product card
export const ProductCardSmall = Template.bind({});
ProductCardSmall.args = {
  size: "small",
};

// Large product card
export const ProductCardLarge = Template.bind({});
ProductCardLarge.args = {
  size: "large",
};
