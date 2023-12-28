import type { Meta, StoryObj } from '@storybook/react';
import Button  from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      name:"Type",
      description:"Виды кнопки",
      options: ['default', 'variant'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (arg) => <Button variant={arg.variant}>Click me</Button>,
};