import { useCallback, useEffect, useState } from 'react'
import { VendorStatus, VendorStatusEnum } from '@/assets/constant'
import BankingInfo from '@/components/vendor-profile/Banking-info'
import CompanyContactInfo from '@/components/vendor-profile/Company-contact-info'
import CompanyOverviewInfo from '@/components/vendor-profile/Company-overview'
import DocumentInfo from '@/components/vendor-profile/Document'
import { getVendorBusinessDetails, getVendorProfileStatus } from '@/httpServices/userService'
import { VendorBusinessInterface } from '@/types'
import { useRouter } from 'next/router'
import WelcomeBack from "@/components/vendor/welcome-back";
import WelcomeBackModal from "@/components/modal";
import { useSession } from 'next-auth/react'


function Profile() {
    const router = useRouter()
    const { id } = router.query;
    console.log(id, 'id');
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/auth/signin')
        },
    })
    const [profileData, setProfileData] = useState<VendorBusinessInterface>()
    const getProfileDetails = useCallback(async () => {
        if(!id) return;
        let parsedId
        if(typeof id  === 'string') {
            parsedId = parseInt(id)
        } else return;
        const { data } = await getVendorBusinessDetails(parsedId)
        setProfileData(data)
    }, [id])

    useEffect(() => {
        getProfileDetails();
    }, [getProfileDetails])


    return (
        <>
            <CompanyContactInfo profileData={profileData}/>
            <CompanyOverviewInfo profileData={profileData} />
            {/* <DocumentInfo profileData={profileData} /> */}
            <BankingInfo profileData={profileData} />
        </>
    )
}


export default Profile;