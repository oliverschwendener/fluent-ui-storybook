import { Story, Meta } from "@storybook/react";
import { ComboBox, IComboBoxProps, SelectableOptionMenuItemType } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Combobox",
    component: ComboBox,
    args: {
        allowFreeform: false,
        autoComplete: "on",
        multiSelect: false,
        options: [
            {
                key: "Header1",
                text: "First heading",
                itemType: SelectableOptionMenuItemType.Header,
            },
            { key: "A", text: "Option A" },
            { key: "B", text: "Option B" },
            { key: "C", text: "Option C" },
            { key: "D", text: "Option D" },
            {
                key: "divider",
                text: "-",
                itemType: SelectableOptionMenuItemType.Divider,
            },
            {
                key: "Header2",
                text: "Second heading",
                itemType: SelectableOptionMenuItemType.Header,
            },
            { key: "E", text: "Option E" },
            { key: "F", text: "Option F", disabled: true },
            { key: "G", text: "Option G" },
            { key: "H", text: "Option H" },
            { key: "I", text: "Option I" },
            { key: "J", text: "Option J" },
        ],
    },
} as Meta<IComboBoxProps>;

const Template: Story<IComboBoxProps> = (args) => <ComboBox {...args} />;

export const Default = Template.bind({});
