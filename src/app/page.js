import { auth } from "@/auth";
import FlexContainer from "@/components/ui/FlexContainer";
import { routes } from "@/lib/route";

import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await auth();
    if (!session) redirect("api/auth/signin");
    return (
        <FlexContainer minH="100dvh" justifyContent="center" alignItems="center">
            <Link href={routes.home}>
                <h1>Go to Dashboards</h1>
            </Link>
        </FlexContainer>
    );
}
