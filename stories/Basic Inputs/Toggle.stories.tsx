import { Story, Meta } from "@storybook/react";
import { Toggle, IToggleProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Toggle",
    component: Toggle,
    args: {
        label: "This is a toggle",
        checked: false,
        disabled: false,
        inlineLabel: false,
        onText: "Checked",
        offText: "Unchecked",
    },
} as Meta<IToggleProps>;

const Template: Story<IToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {} as IToggleProps;
