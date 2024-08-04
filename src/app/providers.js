"use client"
import react from "react";
import { ThemeProvider } from "next-themes" ;

export default function Providers({children}) {
    return(
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}