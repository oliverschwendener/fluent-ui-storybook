import { Story, Meta } from "@storybook/react";
import { DefaultButton, IButtonProps } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import React from "react";

initializeIcons();

export default {
    title: "Basic Inputs/Default Button",
    component: DefaultButton,
    args: {
        text: "Default Button",
        primary: false,
        disabled: false,
        checked: false,
    },
} as Meta<IButtonProps>;

const Template: Story<IButtonProps> = (args) => <DefaultButton {...args} />;

export const Default = Template.bind({});

export const ContextualButton = Template.bind({});
ContextualButton.args = {
    iconProps: { iconName: "Add" },
    menuProps: {
        items: [
            {
                key: "emailMessage",
                text: "Email message",
                iconProps: { iconName: "Mail" },
            },
            {
                key: "calendarEvent",
                text: "Calendar event",
                iconProps: { iconName: "Calendar" },
            },
        ],
    },
} as IButtonProps;

export const SplitButton = Template.bind({});
SplitButton.args = {
    text: "Split Button",
    primary: false,
    disabled: false,
    checked: false,
    splitButtonAriaLabel: "See options",
    menuProps: {
        items: [
            {
                key: "emailMessage",
                text: "Email message",
                iconProps: { iconName: "Mail" },
            },
            {
                key: "calendarEvent",
                text: "Calendar event",
                iconProps: { iconName: "Calendar" },
            },
        ],
    },
} as IButtonProps;
