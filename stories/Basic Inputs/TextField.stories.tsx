import { Story, Meta } from "@storybook/react";
import { TextField, ITextFieldProps } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import React from "react";

initializeIcons();

export default {
    title: "Basic Inputs/Text field",
    component: TextField,
    args: {
        disabled: false,
        readOnly: false,
        required: false,
    },
} as Meta<ITextFieldProps>;

const Template: Story<ITextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Standard",
} as ITextFieldProps;

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
    label: "With error message",
    errorMessage: "Error message",
} as ITextFieldProps;

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    label: "With placeholder",
    placeholder: "Please enter text here",
} as ITextFieldProps;

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "With icon",
    iconProps: {
        iconName: "Calendar",
    },
} as ITextFieldProps;

export const Password = Template.bind({});
Password.args = {
    label: "Password",
    type: "password",
    canRevealPassword: true,
} as ITextFieldProps;
