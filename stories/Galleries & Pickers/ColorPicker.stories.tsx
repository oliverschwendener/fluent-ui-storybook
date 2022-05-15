import { Story, Meta } from "@storybook/react";
import { ColorPicker, IColorPickerProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Galleries & Pickers/Color Picker",
    component: ColorPicker,
    args: {
        showPreview: true,
    },
    argTypes: {
        alphaType: {
            options: ["alpha", "transparency", "none"],
            control: { type: "select" },
        },
    },
} as Meta<IColorPickerProps>;

const Template: Story<IColorPickerProps> = (args) => <ColorPicker {...args} />;
export const Default = Template.bind({});
