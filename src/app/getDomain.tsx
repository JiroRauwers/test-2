'use client'
import { useEffect, useState } from "react"
import { HomePage } from "./HomePage"

interface Props {
    [key:string]:string
}

export const GetDomain = ({data}:Props) => {
    const [domain,_] = useState<string>(()=>{
        if (typeof window !== 'undefined') {
            const hostname = window.location.hostname
            return Object.keys(data).map((key)=>
                key === hostname ? data[key as any] : ''
            )[0]
        }
        return ''
    })
    const [content,setcontent] = useState<JSX.Element>(<></>)

    useEffect(()=>{
        const func = async() =>{
        if (domain !== '') {
            setcontent( await HomePage({ site:domain}))
        }}
        func()
    }, [domain])

    
    return content}
