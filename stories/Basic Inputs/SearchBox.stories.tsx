import { Story, Meta } from "@storybook/react";
import { SearchBox, ISearchBoxProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Search box",
    component: SearchBox,
    args: {
        placeholder: "Search",
        disableAnimation: false,
        underlined: false,
    },
} as Meta<ISearchBoxProps>;

const Template: Story<ISearchBoxProps> = (args) => <SearchBox {...args} />;
export const Default = Template.bind({});
