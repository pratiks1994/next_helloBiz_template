import FlexContainer from "@/components/ui/FlexContainer";
import { getAuth } from "@/lib/auth/getAuth";
import { routes } from "@/lib/route";

import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getAuth();
    console.log(session);
    if (!session) redirect("/api/auth/signin");
    return (
        <FlexContainer minH="100dvh" justifyContent="center" alignItems="center">
            <Link href={routes.home}>
                <h1>Go to Dashboards</h1>
            </Link>
        </FlexContainer>
    );
}
