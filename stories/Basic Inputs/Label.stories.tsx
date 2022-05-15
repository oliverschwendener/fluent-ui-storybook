import { Story, Meta } from "@storybook/react";
import { Label, ILabelProps } from "@fluentui/react";
import React from "react";

interface Props extends ILabelProps {
    text: string;
}

export default {
    title: "Basic Inputs/Label",
    component: Label,
    args: {
        text: "This is a label",
        disabled: false,
        required: false,
    },
} as Meta<ILabelProps>;

const Template: Story<Props> = (args) => <Label {...args}>{args.text}</Label>;
export const Default = Template.bind({});
