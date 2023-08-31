import { ReactElement, useEffect, useCallback, useState } from 'react';
import CrumbAndSearchLayer from "@/components/searchlayer";
import RegistrationStepper from '@/components/vendor/business-profile-stepper';
import { useRouter } from 'next/router';
import { fetchVendorBusinessDetails } from '@/httpServices/userService';
import PageLevelLoader from '@/components/pageLoader';
import moment from 'moment';
import { generateFileObj } from '@/utils';
import { businessAdminId } from '@/assets/constant';
import { useSession } from 'next-auth/react';


export default function UpdateBusinessProfile() {

    const router = useRouter();
    const [formStep, setFormStep] = useState<number>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [businessData, setBusinessData] = useState()
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/auth/signin')
        },
    })
    const fetchFormStep = useCallback(async () => {
        if(!session?.user.id) return null;
        try {
            setError(null);
            setLoading(true);

            const response = await fetchVendorBusinessDetails(session?.user.id);
            const { data } = response;

            const {
                formStep: step,
                address,
                identityProof,
                addressProof,
                businessRegCert,
                dateOfEstablishment,
                ...vendorBusinessData
            } = data;


            const identityProofObj = identityProof ?[generateFileObj('Identity Proof', identityProof)]: null;
            const businessRegCertObj =  businessRegCert ?[generateFileObj('Business Registration Certificate', businessRegCert)]: null;
            const addressProofObj = addressProof ?[generateFileObj('Address Proof', addressProof)]: null;

            const dateOfEstablishmentVal = dateOfEstablishment ? moment(dateOfEstablishment):
                    dateOfEstablishment;

            const updatedBusinessData = address !== null
                ? { ...address, ...vendorBusinessData }
                : { ...vendorBusinessData };

            setBusinessData({
                ...updatedBusinessData,
                addressProof: addressProofObj,
                businessRegCert: businessRegCertObj,
                identityProof: identityProofObj,
                dateOfEstablishment: dateOfEstablishmentVal,
            });

            setFormStep(step);
            setLoading(false);
        } catch (error: any) {
            if (error?.message) {
                setError(error.message);
            } else {
                setError('An error occurred. Please try again later.');
            }
            setLoading(false);
        }
    }, [session?.user.id]);


    useEffect(() => {
        fetchFormStep()
    }, [fetchFormStep])

    const goBack = () => {
        router.back();
    }

    const onRefresh = () => {
        router.reload()
    }

    return (
        <>
            <CrumbAndSearchLayer
                mode="basic"
                searchbar={false}
                goBack={goBack}
                breadcrumbItems={[{ title: 'Vendor Management' }]}
                addTooltipText="Add vendor" />

            {(formStep && formStep < 5) &&
                <RegistrationStepper
                    formStep={formStep}
                    businessData={businessData} />}
            <PageLevelLoader
                loader={loading}
                error={error}
                success={formStep === 5}
                onRetry={onRefresh} />
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