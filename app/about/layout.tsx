import {Inter} from 'next/font/google'
import React from "react";
import {Metadata} from "next";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'TEAM|CONTACTS',
}

export default function AboutLayout({children,}: {
    children: React.ReactNode
}) {
    return (
       <div>
           <h1>About us</h1>
           <ul>
               <li><Link href='/about/contacts'>Contacts</Link></li>
               <li><Link href='/about/team'>Team</Link></li>
           </ul>
           {children}
       </div>
    )
}
