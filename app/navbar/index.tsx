import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-6 bg-[green] p-2 py-3">
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/contact'}>Contact</Link>
      <Link href={'/users'}>Users</Link>
    </div>
  );
}

export default Navbar