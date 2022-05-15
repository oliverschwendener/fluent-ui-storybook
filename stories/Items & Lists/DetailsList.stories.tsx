import { Story, Meta } from "@storybook/react";
import { DetailsList, IDetailsListProps, IColumn } from "@fluentui/react";
import React from "react";

interface IDocument {
    programName: string;
    value: string;
    filePath: string;
    icon: string;
    fileSize: string;
}

const columns: IColumn[] = [
    {
        key: "icon",
        name: "Icon",
        minWidth: 50,
        maxWidth: 50,
        fieldName: "icon",
        isResizable: true,
        onRender: (document: IDocument) => <img width="20" src={document.icon} />,
    },
    {
        key: "program-name",
        name: "Program Name",
        minWidth: 100,
        maxWidth: 200,
        fieldName: "programName",
        isResizable: true,
    },
    {
        key: "file-path",
        name: "File Path",
        minWidth: 0,
        fieldName: "filePath",
        isResizable: true,
    },
    {
        key: "file-size",
        name: "File Size",
        minWidth: 0,
        fieldName: "fileSize",
        isResizable: true,
    },
];

const items: IDocument[] = [
    {
        programName: "Adobe Photoshop",
        value: "adobe-photoshop",
        filePath: "/Applications/Adobe Photoshop.app",
        icon: "https://img.icons8.com/color/344/adobe-photoshop--v1.png",
        fileSize: "4.5 GB",
    },
    {
        programName: "Adobe Lightroom",
        value: "adobe-lightroom",
        filePath: "/Applications/Adobe Lightroom.app",
        icon: "https://img.icons8.com/color/344/adobe-lightroom--v1.png",
        fileSize: "1.2 GB",
    },
    {
        programName: "Adobe Illustrator",
        value: "adobe-illustrator",
        filePath: "/Applications/Adobe Illustrator.app",
        icon: "https://img.icons8.com/color/344/adobe-illustrator--v1.png",
        fileSize: "3.5 GB",
    },
    {
        programName: "Adobe InDesign",
        value: "adobe-indesign",
        filePath: "/Applications/Adobe InDesign.app",
        icon: "https://img.icons8.com/color/344/adobe-indesign--v1.png",
        fileSize: "7.8 GB",
    },
    {
        programName: "Adobe Premiere Pro",
        value: "adobe-premiere-pro",
        filePath: "/Applications/Adobe Premiere Pro.app",
        icon: "https://img.icons8.com/color/344/adobe-premiere-pro--v1.png",
        fileSize: "10.2 GB",
    },
    {
        programName: "Adobe Media Encoder",
        value: "adobe-media-encoder",
        filePath: "/Applications/Adobe Media Encoder.app",
        icon: "https://img.icons8.com/color/344/adobe-media-encoder--v1.png",
        fileSize: "980 MB",
    },
    {
        programName: "Adobe After Effects",
        value: "adobe-after-effects",
        filePath: "/Applications/Adobe After Effects.app",
        icon: "https://img.icons8.com/color/344/adobe-after-effects--v1.png",
        fileSize: "6.7 GB",
    },
    {
        programName: "Adobe Creative Cloud",
        value: "adobe-creative-cloud",
        filePath: "/Applications/Adobe Creative Cloud.app",
        icon: "https://img.icons8.com/color/344/adobe-creative-cloud--v1.png",
        fileSize: "380 MB",
    },
];

export default {
    title: "Items & Lists/Details List",
    component: DetailsList,
    args: {
        compact: false,
        layoutMode: 1,
        columns,
        items,
    },
    argTypes: {
        layoutMode: {
            control: {
                options: [0, 1],
                labels: {
                    0: "Fixed columns",
                    1: "Justified",
                },
                type: "select",
            },
        },
    },
} as Meta<IDetailsListProps>;

const Template: Story<IDetailsListProps> = (args) => <DetailsList {...args} />;
export const Default = Template.bind({});
