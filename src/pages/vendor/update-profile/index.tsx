import { ReactElement, useEffect, useCallback, useState } from 'react';
import CrumbAndSearchLayer from "@/components/searchlayer";
import RegistrationStepper from '@/components/vendor/business-profile-stepper';
import { useRouter } from 'next/router';
import { CompanyInfoInterface } from '@/types';
import { fetchVendorBusinessDetails, fetchVendorRegistrationProgress } from '@/httpServices/userService';
import PageLevelLoader from '@/components/pageLoader';
import { BASEURL } from '@/assets/constant';


export default function UpdateBusinessProfile() {

    const router = useRouter();
    const [formStep, setFormStep] = useState<number>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [businessData, setBusinessData] = useState()

    const fetchFormStep = useCallback(async () => {
        try {
            setError(null)
            setLoading(true)
            // const response = await fetchVendorRegistrationProgress(7);
            const response = await await fetchVendorBusinessDetails(7);
            const { data } = response;
            const { formStep: step, address, identityProof,
                addressProof, businessRegCert, ...vendorBusinessData } = data

            const identityProofObj = [{
                name: 'identity proof',
                url: `${BASEURL}/${identityProof}`
            },]

            const businessRegCertObj = [{
                name: 'identity proof',
                url: `${BASEURL}/${businessRegCert}`
            },]

            const addressProofObj = [{
                name: 'identity proof',
                url: `${BASEURL}/${addressProof}`
            },]

            if (address !== null) {
                setBusinessData({
                    ...address, ...vendorBusinessData,
                    addressProof: addressProofObj,
                    businessRegCert: businessRegCertObj, identityProof: identityProofObj
                })
            } else {
                setBusinessData({
                    ...vendorBusinessData, addressProof: addressProofObj,
                    businessRegCert: businessRegCertObj, identityProof: identityProofObj
                })
            }
            setFormStep(step)
            console.log(vendorBusinessData)
            setLoading(false)
        } catch (error: any) {
            if (error && error.message) {
                setError(error?.message)
            } else {
                setError("This could be due to a network problem, a temporary disruption, or issues with your device's connectivity, plz try again!!")
            }
            setLoading(false)
        }
    }, [])


    useEffect(() => {
        fetchFormStep()
    }, [])

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

            {formStep &&
                <RegistrationStepper
                    formStep={formStep}
                    businessData={businessData} />}
            <PageLevelLoader
                loader={loading}
                error={error}
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