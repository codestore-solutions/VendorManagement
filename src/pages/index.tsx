import { GetServerSidePropsContext } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"


export default function Redirect() {
    return null;
}


export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
    const session = await getServerSession(req, res, authOptions)

    if (!session?.user) {
        return { redirect: { permanent: false, destination: "/auth/signin" } };
    }

    return { redirect: { permanent: false, destination: "/vendor" } };
}