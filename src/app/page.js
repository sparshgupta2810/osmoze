'use client'
import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <div>
      <Link href={'/SignIn'}><h1>sign in</h1></Link>
      <Link href={'/SignUp'}><h1>sign up</h1></Link>
    </div>
  )
}

export default page



