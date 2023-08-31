import { useEffect, useRef, useState, useCallback } from "react";
import { type InputRef } from 'antd';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { getVendorProfileStatus } from "@/httpServices/userService";
import { VendorStatusEnum } from "@/assets/constant";


export interface VendorDataType {
    key: number;
    sno: number,
    vendorName: string;
    mobileNumber: string;
    email: string;
    joiningDate: string;
    verificationStatus: 'Verified' | 'Rejected' | 'Pending';
}

export type VendorDataIndex = keyof VendorDataType;


export default function () {
    const router = useRouter()

    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/auth/signin')
        },
    })

    const [searchText, setSearchText] = useState('');
    const searchInput = useRef<InputRef>(null);

    const searchHandler = () => { }
    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };


    const goToStepperForm = () => { 
        router.replace('/vendor/update-profile')
    }

    const [openWelcomeModal, setOpenWelcomeModal] = useState(false)

    // useEffect(()=>{
    //     getProfileStatus()
    // },[])

    // const getProfileStatus = useCallback(async () => {
    //     const { data } = await getVendorProfileStatus(session?.user.id)
    //     if(data.status === VendorStatusEnum.DETAILS_SUBMISSION_INCOMPLETE){
    //         setOpenWelcomeModal(true)
    //     }
    // }, [])

    return (
        <>
            <p className="text-xl">Work in progress</p>
        </>
    )
}