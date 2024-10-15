import api from "@/lib/api";
import { AxiosResponse } from "axios";

export async function getStaticProps() { // or getServerSideProps
    try {
        const response: AxiosResponse<any, any> = await api.get('/api/user'); // Fetch user data
        const users = response.data;

        return { props: { users } };

    } catch (error) {
        console.error('Error fetching users:', error);

        return {
            props: { users: [] },
        };
    }
}