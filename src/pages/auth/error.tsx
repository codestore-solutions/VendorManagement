import { useRouter } from "next/router";
import z from "zod";
import { type ReactElement } from 'react'
import { Button } from "antd";
import {
    CloseCircleOutlined
} from '@ant-design/icons';
import AuthContainer from "@/app/AuthContainer";


const querySchema = z.object({
    error: z.string().optional(),
});

export default function Error() {
    const router = useRouter();
    const { error } = querySchema.parse(router.query);
    const isTokenVerificationError = error?.toLowerCase() === "verification";
    let errorMsg;
    if (router.isReady) {
        errorMsg = isTokenVerificationError ? 'Token is either invalid or expired.' :
            'An error occurred when logging you in. Head back to the login screen and try again.';
    }

    const goToLoginPage = () => {
        router.push('/auth/signin')
    }

    return (
        <>
            <div className="mb-4">
                <div className="bg-success mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                    <CloseCircleOutlined className = "h-6 w-6 text-red-600 text-3xl" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-emphasis text-lg font-medium leading-6" id="modal-title">
                        {error}
                    </h3>
                    <div className="mt-2 px-6">
                        <p className="text-subtle text-sm">{errorMsg}</p>
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

Error.getLayout = function getLayout(page: ReactElement) {
    return (
        <AuthContainer title="" description="">
            {page}
        </AuthContainer>
    )
}