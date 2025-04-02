import HomeNav from "@/components/features/home/HomeNav";
import ThemeToggler from "@/components/features/ThemeToggler";
import FlexContainer from "@/components/ui/FlexContainer";
import React from "react";

function HomeLayout({ children }) {
    return (
        <>
            <FlexContainer minH="100dvh" bg="bg.muted" direction="column" position={"relative"}>
                <HomeNav />
                <ThemeToggler />
                {children}
            </FlexContainer>
        </>
    );
}

export default HomeLayout;
