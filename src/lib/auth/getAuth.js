import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

export const getAuth = async () => {
    return await getServerSession(authOptions);
};
