import PageBreadcrumb from "@/app/components/common/PageBreadCrumb";
import ComponentCard from "@/app/components/common/ComponentCard";
// import BasicTableOne from "@/app/components/tables/BasicTableOne";
import UserBasicTable from "@/app/components/UserBasicTable";


export default function UserTable() {

    return (
        <div>
            <PageBreadcrumb pageTitle="Basic Table" />
            <div className="space-y-6">
                <ComponentCard title="Basic Table 1">
                    {/*<BasicTableOne />*/}
                    <UserBasicTable/>
                </ComponentCard>
            </div>
        </div>
    );
}
