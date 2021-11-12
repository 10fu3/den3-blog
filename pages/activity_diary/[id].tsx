import {NextPage} from "next";
import {useRouter} from "next/router";

const Blog:NextPage = ()=>{

    const router = useRouter();
    const { id } = router.query;

    return <div>
        {id}
    </div>
}

export default Blog