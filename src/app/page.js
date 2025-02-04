import { auth } from "@/auth";
import Demo from "@/components/features/Demo";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await auth();
    if (!session) redirect("api/auth/signin");
    return (
        <div>
            <Demo />
        </div>
    );
}
