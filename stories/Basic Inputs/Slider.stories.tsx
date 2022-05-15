import { Story, Meta } from "@storybook/react";
import { Stack, Slider, ISliderProps } from "@fluentui/react";
import React from "react";

export default {
    title: "Basic Inputs/Slider",
    component: Slider,
    args: {
        label: "This is a slider",
        min: 0,
        max: 100,
        step: 10,
        showValue: true,
        disabled: false,
        snapToStep: true,
        vertical: false,
    },
} as Meta<ISliderProps>;

const Template: Story<ISliderProps> = (args) => (
    <Stack {...{ horizontal: args.vertical }} styles={{ root: { height: 200 } }} tokens={{ childrenGap: 20 }}>
        <Slider {...args} />
    </Stack>
);
export const Default = Template.bind({});

export const Ranged = Template.bind({});
Ranged.args = {
    ranged: true,
} as ISliderProps;
