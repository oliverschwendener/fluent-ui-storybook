import { Story, Meta } from "@storybook/react";
import { ChoiceGroup, IChoiceGroupProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Choice Group",
    component: ChoiceGroup,
    args: {
        options: [
            { key: "A", text: "Option A" },
            { key: "B", text: "Option B" },
            { key: "C", text: "Option C", disabled: true },
            { key: "D", text: "Option D" },
        ],
    },
} as Meta<IChoiceGroupProps>;

const Template: Story<IChoiceGroupProps> = (args) => <ChoiceGroup {...args} />;

export const Default = Template.bind({});
