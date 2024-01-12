
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthContextProvider } from "./firebase/page";
// import SignIn from "./SignIn"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        {/* <SignIn/> */}
      <body className={inter.className}>{children}</body>
      </AuthContextProvider>
    </html>
  )
}
