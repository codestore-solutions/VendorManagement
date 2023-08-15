import { Button } from "antd";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
    CheckCircleOutlined
} from '@ant-design/icons';
import { type ReactElement } from 'react'
import AuthContainer from "@/app/AuthContainer";


export function Logout() {
    const { status } = useSession();
    const { data: session } = useSession()
    const router = useRouter()

    if (session) {
        router.replace('/vendor')
    }
    
    if (status === "authenticated") signOut({ redirect: false });

    const goToLoginPage = () => {
        router.push('/auth/signin')
    }

    return (
        <>
            <div className="mb-4">
                <div className="bg-success mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                    <CheckCircleOutlined className="h-6 w-6 text-[#545BFC] text-3xl" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-emphasis text-lg font-medium leading-6" id="modal-title">
                        You've been logged out
                    </h3>
                    <div className="mt-2">
                        <p className="text-subtle text-sm">We hope to see you again soon!</p>
                    </div>
                </div>
            </div>
            <Button onClick={goToLoginPage} className="w-1/2 bg-[#545BFC] text-white items-center text-sm font-medium 
                relative rounded-md transition-colors h-9 px-4 py-2.5 bg-brand-default 
                hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-2 
                focus-visible:ring-brand-default text-brand flex justify-center">
                Go back to the login page
            </Button>
        </>
    );
}

export default Logout;

Logout.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthContainer>
            {page}
        </AuthContainer>
    )
}