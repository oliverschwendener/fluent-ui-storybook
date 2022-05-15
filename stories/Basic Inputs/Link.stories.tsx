import { Story, Meta } from "@storybook/react";
import { Text, Link, ILinkProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Link",
    component: Link,
    args: {
        href: "https://duckduckgo.com",
        underline: false,
        disabled: false,
        target: "_blank",
    },
} as Meta<ILinkProps>;

const Template: Story<ILinkProps> = (args) => {
    return (
        <>
            <Text>
                When a link has an href, <Link {...args}>it renders as an anchor tag.</Link> Without an href,{" "}
                <Link {...args}>the link is rendered as a button</Link>. You can also use the disabled attribute to
                create a <Link {...args}>disabled link.</Link>
            </Text>
            <Text>
                It's not recommended to use Links with imgs because Links are meant to render textual inline content.
                Buttons are inline-block or in the case of imgs, block. However, it is possible to create a linked image
                button by making a button with an unstyled variant and adding the img content and href source to that.
            </Text>
        </>
    );
};
export const Default = Template.bind({});
