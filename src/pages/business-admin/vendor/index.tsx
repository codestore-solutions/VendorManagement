import DataTable from "@/components/table";
import fetchVendorColumns, { vendors } from "./components/column";
import { useCallback, useEffect, useRef, useState } from "react";
import type { InputRef } from 'antd';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import SearchLayer from "@/components/searchlayer";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import { getVendorsOfBusinessAdmin } from "@/httpServices/businessAdminService";


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

    const goToAddVendor = () => {
        router.push('/business-admin/add-vendor')
    }

    const [vendors, setVendors ] = useState([])
    const fetchVendors = useCallback(async ()=>{
        if(!session?.user.id) return null;
        const { data } = await getVendorsOfBusinessAdmin(session?.user.id)
        const data_: any = data.map((item: any, index: number) => ({ ...item , sno: index+1}));
        setVendors(data_)
    }, [session?.user.id])
    
    useEffect(()=>{
        fetchVendors()
    },[fetchVendors])

    return (
        <div>
            <SearchLayer
                mode="list"
                searchbar={true}
                searchText={searchText}
                breadcrumbItems={[{ title: 'Vendor Management' }]}
                handleSearch={searchHandler}
                addTooltipText="Add vendor"
                btnOnClickHandler={goToAddVendor}/>
            <DataTable
                data={vendors}
                columns={fetchVendorColumns({
                    searchInput,
                    handleSearch,
                    handleReset,
                })} />
        </div>
    )
}