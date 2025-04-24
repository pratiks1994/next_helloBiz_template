import HomeNav from "@/components/features/home/HomeNav";
import ThemeToggler from "@/components/features/ThemeToggler";
import FlexContainer from "@/components/ui/FlexContainer";
import React from "react";
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/auth/getAuth";

async function HomeLayout({ children }) {
    const session = await getAuth();
    console.log("session", session);
    if (!session) {
        // Redirect to the sign-in page if not authenticated
        redirect("/api/auth/signin");
    }
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
