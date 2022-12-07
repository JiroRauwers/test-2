import React, { Suspense } from "react";
import { getData } from "./fetchApi";
import { GetDomain } from "./getDomain";

const Page = async () => {
    const data = await getData<string>("https://centraltr.ee/api/getDomain")

    // @ts-ignore
    return <Suspense fallback={<></>}>
        <GetDomain data={data}/>
        </Suspense>

}

export default Page;