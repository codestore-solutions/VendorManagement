
interface Props {
    title?: string;
    description?: string;
    footerText?: React.ReactNode | string;
    showLogo?: boolean;
    heading?: string;
    loading?: boolean;
}

export default function AuthContainer(props: React.PropsWithChildren<Props>) {
    return (
        <div className="flex justify-center items-center w-full bg-[#f5f5f5] min-h-screen py-12 sm:px-6 lg:px-8 ">
            <div className="my-auto sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-default border-subtle mx-2 
                    rounded-md border bg-white flex items-center flex-col py-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
