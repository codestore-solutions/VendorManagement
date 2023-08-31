import { GetServerSidePropsContext } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"


export default function Redirect() {
    return <></>;
}


export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
    const session = await getServerSession(req, res, authOptions)
    if (!session?.user) {
        return { redirect: { permanent: false, destination: "/auth/signin" } };
    }

    const { role } = session?.user;

    if (role === 2) {
        return { redirect: { permanent: false, destination: "/business-admin/vendor" } }
    }

    if (role === 3) {
        return { redirect: { permanent: false, destination: "/vendor/profile" } }
    }
}