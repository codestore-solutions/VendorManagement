import { ReactElement } from 'react';
import CrumbAndSearchLayer from "@/components/searchlayer";
import RegistrationStepper from '@/components/vendor/business-profile-stepper';
import { useRouter } from 'next/router';


export default function UpdateBusinessProfile() {

    const router = useRouter();

    const goBack = () => {
        router.back();
    }
    return (
        <>
            <CrumbAndSearchLayer
                mode="basic"
                searchbar={false}
                goBack={goBack}
                breadcrumbItems={[{ title: 'Vendor Management' }]}
                addTooltipText="Add vendor" />
            <RegistrationStepper />
        </>
    )
}

UpdateBusinessProfile.getLayout = function getLayout(page: ReactElement) {
    return (
        <div className='px-20 py-8'>
            {page}
        </div>
    )
}