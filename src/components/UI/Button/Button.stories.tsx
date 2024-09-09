import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      name: "Type",
      description: "Виды кнопки",
      options: ["default", "variant"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "default" },
  render: (arg) => <Button variant={arg.variant}>Click me</Button>,
};
