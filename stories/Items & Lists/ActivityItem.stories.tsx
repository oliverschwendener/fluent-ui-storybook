import { Story, Meta } from "@storybook/react";
import { ActivityItem, IActivityItemProps, Icon } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import React from "react";

initializeIcons();

export default {
    title: "Items & Lists/Activity Item",
    component: ActivityItem,
    args: {
        activityDescription: "Someone commented",
        activityIcon: <Icon iconName="Message" />,
        comments: ["Hi, I'm making a comment here   "],
        timeStamp: "Just now",
    },
} as Meta<IActivityItemProps>;

const Template: Story<IActivityItemProps> = (args) => <ActivityItem {...args} />;
export const Default = Template.bind({});
