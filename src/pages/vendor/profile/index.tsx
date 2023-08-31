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

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/auth/signin')
        },
    })

    const router = useRouter()

    const [profileData, setProfileData] = useState<VendorBusinessInterface>()
    const getProfileDetails = useCallback(async () => {
        if(session?.user.id){
            const { data } = await getVendorBusinessDetails(session?.user.id)
            setProfileData(data)
        }
    }, [session?.user.id])

    const [ profileStatus, setProfileStatus] = useState()

    const goToStepperForm = () => { 
        router.replace('/vendor/update-profile')
    }

    const [openWelcomeModal, setOpenWelcomeModal] = useState(false)

    const getProfileStatus = useCallback(async () => {
        console.log(session?.user)
        if(session?.user.id) {
            const { data } = await getVendorProfileStatus(session?.user.id)
            console.log(data)
            if(data.status === VendorStatus.DETAILS_SUBMISSION_INCOMPLETE){
                setOpenWelcomeModal(true)
            }
            setProfileStatus(data.status)
        }
    }, [session?.user.id])
    
    useEffect(() => {
        getProfileDetails();
    }, [getProfileDetails])

    useEffect(()=>{
        getProfileStatus()
    },[getProfileStatus])


    return (
        <>
            <CompanyContactInfo profileData={profileData} profileStatus={profileStatus}/>
            <CompanyOverviewInfo profileData={profileData} />
            {/* <DocumentInfo profileData={profileData} /> */}
            <BankingInfo profileData={profileData} />
            <WelcomeBackModal
                isOpen={openWelcomeModal} 
                closeIcon={null}
                children={<WelcomeBack onClickHandler={goToStepperForm}/>}
                width={'60%'}
                footerBtn={null}/>
        </>
    )
}


export default Profile;