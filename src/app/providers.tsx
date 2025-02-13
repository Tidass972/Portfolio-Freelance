"use client"

import { useEffect } from "react"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('Providers mounted');
    console.log('Document ready state:', document.readyState);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <Toaster position="top-right" />
      {children}
    </ThemeProvider>
  )
}
