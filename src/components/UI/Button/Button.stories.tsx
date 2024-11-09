// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Variant: Story = {
  args: {
    variant: "variant",
    children: "Кнопка",
  },
};
