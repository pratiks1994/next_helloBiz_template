import ButtonIcon from "@/components/ui/ButtonIcon";
import FlexContainer from "@/components/ui/FlexContainer";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { routes } from "@/lib/route";
import { Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

export const DashboardCardAction = () => {
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
                <MenuItem asChild value="view">
                    <Link href={routes.view_dashboard}>
                        <FlexContainer gap="2" alignItems="center">
                            <FaEye />
                            <Text>View </Text>
                        </FlexContainer>
                    </Link>
                </MenuItem>
                <MenuItem asChild value="edit">
                    <Link href={routes.create_dashboard}>
                        <FlexContainer gap="2" alignItems="center">
                            <FaRegEdit />
                            <Text>Edit </Text>
                        </FlexContainer>
                    </Link>
                </MenuItem>
                <MenuItem color="fg.error" _hover={{ bg: "bg.error", color: "fg.error" }} asChild value="delete">
                    <Link href="#">
                        <FlexContainer gap="2" alignItems="center">
                            <IoTrashOutline />
                            <Text>Delete </Text>
                        </FlexContainer>
                    </Link>
                </MenuItem>
            </MenuContent>
        </MenuRoot>
    );
};
