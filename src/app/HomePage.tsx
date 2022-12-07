import Image from "next/image";
import Theme from '../styles/Home.module.sass'
import {getData, siteData} from "./fetchApi";
import { Suspense } from "react";

type Props = {
    site:string
}

export const HomePage = async ({site}: Props) => {
    const {Colors, Items, Title, galleries} = await getData<siteData>(site)
    const logo = galleries[0].files[0].file

    return (
        <Suspense fallback={<></>} >
            <div style={{background: Colors.background}} className={Theme.Wrapper}>
                <div className={Theme.central}>
                    Desenvolvido por
                    <Image src={'/logocentral.svg'} alt={'logo central corretor'} width={20} height={20}/>
                </div>
                <Image className={Theme.BgImage} src={logo} alt={'logo da empresa'} width={200} height={200}/>
                <div className={Theme.Logo}>
                    <Image src={logo} alt={Title} width={300} height={150}/>
                    site em desenvolvimento
                </div>
                <div style={{background: Colors.box}} className={Theme.Box}>
                    <PlaceItem item={Items[0]} Colors={Colors}/>
                    <PlaceItem item={Items[1]} Colors={Colors}/>
                </div>
            </div>
        </Suspense>
    )
}




const PlaceItem = ({
    item, Colors
}:{
    item: {icon:string, title:string, content:string}
    Colors: {logo:string, text:string}
}) => (
    <>
        <Image color={Colors.logo} src={"/" + item.icon + ".svg"}
        alt={'icon'} width={30} height={30}
        className={Theme.icon}/>
        <div style={{color: Colors.text}} className={Theme.Text}>
        <h1 className={Theme.Title}>{item.title}</h1>
        <p className={Theme.Content}>{item.content}</p>
</div>
</>
)