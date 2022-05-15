import { Story, Meta } from "@storybook/react";
import { CompoundButton, IButtonProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Compound Button",
    component: CompoundButton,
    args: {
        text: "Compound Button",
        secondaryText: "This is the secondary text",
        primary: false,
        disabled: false,
    },
} as Meta<IButtonProps>;

const Template: Story<IButtonProps> = (args) => <CompoundButton {...args} />;

export const Default = Template.bind({});
