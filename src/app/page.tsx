import React, { Suspense } from "react";
import { getData } from "./fetchApi";
import { GetDomain } from "./getDomain";

const Page = async () => {
    const data = await getData<string>("http://localhost:3000/api/getDomain")

    // @ts-ignore
    return <Suspense fallback={<></>}>
        <GetDomain data={data}/>
        </Suspense>

}

export default Page;