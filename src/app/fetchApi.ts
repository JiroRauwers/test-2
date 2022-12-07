export type siteData = {
    Title: string
    Colors: {
        background: string
        box: string
        text: string
        logo: string
    },
    Items: [
        {
            icon: string
            title: string
            content: string
        },
        {
            icon: string
            title: string
            content: string
        }
    ],
    galleries: [
        {
            files: [{ file: string }],
        }
    ]

}


export const getData= async <T> (url:string):Promise<T> => {
    const response = await fetch(url)
    const data: T = await response.json()
    return data
}