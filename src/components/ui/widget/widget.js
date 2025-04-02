import React from "react";
import FlexContainer from "../FlexContainer";
import BoxContainer from "../BoxContainer";
import { Heading, Icon, Text } from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../menu";
import ButtonIcon from "../ButtonIcon";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

export const WidgetRoot = (props) => {
    const { children, ...rest } = props;
    return (
        <FlexContainer
            w="full"
            h="full"
            bg="bg"
            border="1px solid"
            borderColor="border"
            borderRadius={"md"}
            overflow="hidden"
            direction="column"
            {...rest}
        >
            {children}
        </FlexContainer>
    );
};

export const WidgetHeader = ({ children, ...props }) => {
    return (
        <FlexContainer
            flexGrow={0}
            justify="space-between"
            px="4"
            h="50px"
            alignItems="center"
            borderBottom="1px solid"
            borderColor="border"
            className="drag-handle"
            {...props}
        >
            {children}
        </FlexContainer>
    );
};

export const WidgetBody = ({ children, ...props }) => {
    return (
        <BoxContainer w="full" h="calc(100% - 50px)" ps="0" py="3" pe="2" {...props}>
            {children}
        </BoxContainer>
    );
};

export const WidgetTitle = ({ children, ...props }) => {
    return (
        <Heading size="lg" color="fg.muted" {...props}>
            {children}
        </Heading>
    );
};

export const WidgetAction = ({ editWidgetUrl }) => {
    return (
        <MenuRoot>
            <MenuTrigger asChild>
                <ButtonIcon size="md" h="20px" variant="ghost" colorPalette="gray">
                    <Icon>
                        <BsThreeDots />
                    </Icon>
                </ButtonIcon>
            </MenuTrigger>
            <MenuContent>
                <MenuItem asChild value="edit">
                    <Link href={editWidgetUrl || "#"}>
                        <FlexContainer gap="2" alignItems="center">
                            <FaRegEdit size={14} />
                            <Text verticalAlign={"baseline"}>Edit </Text>
                        </FlexContainer>
                    </Link>
                </MenuItem>
                <MenuItem color="fg.error" _hover={{ bg: "bg.error", color: "fg.error" }} asChild value="delete">
                    <Link href="#">
                        <FlexContainer gap="2" alignItems="center">
                            <IoTrashOutline size={14} />
                            <Text verticalAlign={"baseline"}>Delete</Text>
                        </FlexContainer>
                    </Link>
                </MenuItem>
            </MenuContent>
        </MenuRoot>
    );
};
