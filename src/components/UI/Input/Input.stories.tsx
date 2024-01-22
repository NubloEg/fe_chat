import type { Meta, StoryObj } from '@storybook/react';
import Input  from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    variant: {
      name:"Type",
      description:"Виды инпута",
      options: ['default', 'purpule'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (arg) => <Input variant={arg.variant} title='Input'/>
};