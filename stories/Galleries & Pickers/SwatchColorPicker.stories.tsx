import { Story, Meta } from "@storybook/react";
import { SwatchColorPicker, ISwatchColorPickerProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Galleries & Pickers/Swatch Color Picker",
    component: SwatchColorPicker,
    args: {
        columnCount: 4,
        cellShape: "circle",
        cellWidth: 25,
        cellHeight: 25,
        colorCells: [
            { id: "a", label: "a", color: "#2d3436" },
            { id: "b", label: "b", color: "#636e72" },
            { id: "c", label: "c", color: "#b2bec3" },
            { id: "d", label: "d", color: "#dfe6e9" },
            { id: "e", label: "e", color: "#e84393" },
            { id: "f", label: "f", color: "#fd79a8" },
            { id: "g", label: "g", color: "#6c5ce7" },
            { id: "h", label: "h", color: "#a29bfe" },
            { id: "i", label: "i", color: "#00b894" },
            { id: "j", label: "j", color: "#55efc4" },
            { id: "k", label: "k", color: "#00cec9" },
            { id: "l", label: "l", color: "#81ecec" },
        ],
    },
    argTypes: {
        cellShape: {
            options: ["circle", "square"],
            control: "select",
        },
    },
} as Meta<ISwatchColorPickerProps>;

const Template: Story<ISwatchColorPickerProps> = (args) => <SwatchColorPicker {...args} />;
export const Default = Template.bind({});
