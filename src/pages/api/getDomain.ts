import {NextApiRequest, NextApiResponse} from "next";

const handler = (
    req: NextApiRequest, res: NextApiResponse
) => {
    res.status(200).json({
        "localhost:3000": "https://s3.sa-east-1.amazonaws.com/template.centralcorretor.com.br/content/bf18d5f9-1fb7-11ed-8aec-0259ada850d2/35fcae87-69a4-11ed-8aec-0259ada850d2/content.json",
        "centraltr": "https://s3.sa-east-1.amazonaws.com/template.centralcorretor.com.br/content/bf18d5f9-1fb7-11ed-8aec-0259ada850d2/35fcae87-69a4-11ed-8aec-0259ada850d2/content.json",
        "centraltr.ee": "https://s3.sa-east-1.amazonaws.com/template.centralcorretor.com.br/content/bf18d5f9-1fb7-11ed-8aec-0259ada850d2/35fcae87-69a4-11ed-8aec-0259ada850d2/content.json"
    })
}

export default handler;