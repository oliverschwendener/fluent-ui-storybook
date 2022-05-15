import { Story, Meta } from "@storybook/react";
import { Calendar, ICalendarProps, defaultCalendarStrings } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import React from "react";

initializeIcons();

export default {
    title: "Galleries & Pickers/Calendar",
    component: Calendar,
    args: {
        showGoToToday: true,
        strings: defaultCalendarStrings,
    },
} as Meta<ICalendarProps>;

const Template: Story<ICalendarProps> = (args) => <Calendar {...args} />;
export const Default = Template.bind({});
