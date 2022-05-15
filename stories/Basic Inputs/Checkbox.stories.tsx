import { Story, Meta } from "@storybook/react";
import { Checkbox, ICheckboxProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Checkbox",
    component: Checkbox,
    args: {
        checked: false,
        disabled: false,
        label: "This is a checkbox",
        indeterminate: false,
    },
} as Meta<ICheckboxProps>;

const Template: Story<ICheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
