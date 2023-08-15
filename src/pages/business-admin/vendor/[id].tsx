import CrumbAndSearchLayer from "@/components/searchlayer";
import BankingInfo from "@/components/view-vendor/banking-info";
import CompanyContactInfo from "@/components/view-vendor/company-contact-info";
import CompanyOverview from "@/components/view-vendor/company-overview";
import DocumentVerification from "@/components/view-vendor/document-verification";

export default function VendorDetails(){
    return (
        <>
            <CrumbAndSearchLayer
                mode="view"
                searchbar={false}
                breadcrumbItems={[{ title: 'Vendor Management' }]}
                addTooltipText="Add vendor"/>

            <CompanyContactInfo/>
            <CompanyOverview/>
            <DocumentVerification/>
            <BankingInfo/>
        </>
    )
}