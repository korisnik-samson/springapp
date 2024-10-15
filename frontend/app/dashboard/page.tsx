import React from 'react'
import Header from "@/components/Header";
import WorkspaceList from "@/components/WorkspaceList";
import { SearchParamProps } from "@/types";
import { getProjectById, getUserById } from "@/lib";

const Page = async ({ params: { userId, projectId } }: SearchParamProps): Promise<JSX.Element> => {
    const user = await getUserById(userId);
    const projects = await getProjectById(projectId);

    return (
        <div>
            <Header />
            <WorkspaceList user={user} projects={projects} />
        </div>
    );
}

export default Page;