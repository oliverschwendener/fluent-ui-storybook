import { Story, Meta } from "@storybook/react";
import { Dropdown, DropdownMenuItemType, IDropdownProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Dropdown",
    component: Dropdown,
    args: {
        options: [
            {
                key: "fruitsHeader",
                text: "Fruits",
                itemType: DropdownMenuItemType.Header,
            },
            { key: "apple", text: "Apple", selected: true },
            { key: "banana", text: "Banana" },
            { key: "orange", text: "Orange", disabled: true },
            { key: "grape", text: "Grape" },
            {
                key: "divider_1",
                text: "-",
                itemType: DropdownMenuItemType.Divider,
            },
            {
                key: "vegetablesHeader",
                text: "Vegetables",
                itemType: DropdownMenuItemType.Header,
            },
            { key: "broccoli", text: "Broccoli" },
            { key: "carrot", text: "Carrot" },
            { key: "lettuce", text: "Lettuce" },
        ],
    },
} as Meta<IDropdownProps>;

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
