import { Story, Meta } from "@storybook/react";
import { Facepile, IFacepileProps, PersonaInitialsColor, PersonaSize } from "@fluentui/react";
import React from "react";

export default {
    title: "Items & Lists/Facepile",
    component: Facepile,
    args: {
        personaSize: PersonaSize.size48,
        maxDisplayablePersonas: 3,
        personas: [
            {
                personaName: "Marharyta Audra",
                imageUrl: "https://avatars.githubusercontent.com/u/15727229?v=4",
                imageInitials: "MA",
                initialsColor: PersonaInitialsColor.blue,
            },
            {
                personaName: "Željka Deo",
                imageUrl:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx" +
                    "waG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
                imageInitials: "ZD",
                initialsColor: PersonaInitialsColor.blue,
            },
            {
                personaName: "Ate Trofim",
                imageInitials: "AT",
                initialsColor: PersonaInitialsColor.blue,
            },
            {
                personaName: "Glika Blago",
                imageInitials: "GB",
                initialsColor: PersonaInitialsColor.blue,
            },
            {
                personaName: "Zotikos Lachesis",
                imageInitials: "ZL",
                initialsColor: PersonaInitialsColor.blue,
            },
        ],
    },
} as Meta<IFacepileProps>;

const Template: Story<IFacepileProps> = (args) => <Facepile {...args} />;
export const Default = Template.bind({});
