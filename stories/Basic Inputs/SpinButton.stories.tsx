import { Story, Meta } from "@storybook/react";
import { SpinButton, ISpinButtonProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Spin Button",
    component: SpinButton,
    args: {
        label: "This is a spin button",
        min: 0,
        max: 100,
        step: 10,
        disabled: false,
    },
} as Meta<ISpinButtonProps>;

const Template: Story<ISpinButtonProps> = (args) => <SpinButton {...args} />;
export const Default = Template.bind({});
