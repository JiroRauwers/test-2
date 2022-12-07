import {ReactNode} from "react";

import '../styles/tailwind.css'
import '../styles/globals.scss'

const RootLayout = ({children}: { children: ReactNode }) => (
    <html lang={"pt-br"}>
    <body className={'min-w-screen min-h-screen'}>
    {children}
    </body>
    </html>
);

export default RootLayout;