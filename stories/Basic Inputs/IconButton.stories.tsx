import { Story, Meta } from "@storybook/react";
import { IconButton, IButtonProps } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import React from "react";

initializeIcons();

export default {
    title: "Basic Inputs/Icon Button",
    component: IconButton,
    args: {
        title: "Icon Button",
        iconProps: { iconName: "Emoji2" },
    },
} as Meta<IButtonProps>;

const Template: Story<IButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});

export const SplitIconButton = Template.bind({});
SplitIconButton.args = {
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
