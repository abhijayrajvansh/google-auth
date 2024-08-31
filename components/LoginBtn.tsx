'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const LoginBtn = () => {
  return (
    <div>
      <Button size={"custom"} className="bg-blue-500 hover:bg-blue-400 px-3 py-2 text-base gap-3">
          <Link href={'/login'}> click here to login</Link>
        </Button>
    </div>
  )
}

export default LoginBtn
