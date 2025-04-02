import ButtonIcon from "@/components/ui/ButtonIcon";
import FlexContainer from "@/components/ui/FlexContainer";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaRegBell, FaRegUser } from "react-icons/fa";

function HomeNav() {
    return (
        <FlexContainer w="100%" h={{ base: 14, md: 16 }} bg="brand" px={{ base: 4, md: 6 }} alignItems="center" justify={"space-between"}>
            <Text textStyle={"xl"} color="brand.contrast">
                HelloBiz
            </Text>
            <FlexContainer gap="1">
                <ButtonIcon>
                    <Link href="#">
                        <FaRegBell />
                    </Link>
                </ButtonIcon>
                <ButtonIcon>
                    <Link href="#">
                        <FaRegUser />
                    </Link>
                </ButtonIcon>
            </FlexContainer>
        </FlexContainer>
    );
}

export default HomeNav;
