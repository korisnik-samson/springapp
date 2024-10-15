import React from 'react'
import Header from "@/components/Header";
import WorkspaceList from "@/components/WorkspaceList";
import { SearchParamProps } from "@/types";

const Page = async ({ params: { userId } }: SearchParamProps): Promise<JSX.Element> => {
    return (
        <div>
            <Header />
            <WorkspaceList userId={userId} />
        </div>
    );
}

export default Page;