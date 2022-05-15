import { Story, Meta } from "@storybook/react";
import { DatePicker, defaultDatePickerStrings, IDatePickerProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Galleries & Pickers/Date Picker",
    component: DatePicker,
    args: {
        placeholder: "Select a date",
        strings: defaultDatePickerStrings,
    },
} as Meta<IDatePickerProps>;

const Template: Story<IDatePickerProps> = (args) => <DatePicker {...args} />;
export const Default = Template.bind({});
