import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Button, ButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text']},
    color: { control: 'select', options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { variant: 'contained', children: 'Текст' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, size: 'small'};