import Link from "next/link"
import Image from "next/image"

import { CustomButton } from "."

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-screen-2xl mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className="flex justify-center items-center">
                <Image src="/logo.svg" alt="Car Hub logo" width={118} height={18} className="object-contain"/>
            </Link>

            <CustomButton btnType="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]">
                Sign In
            </CustomButton>
        </nav>
    </header>
    )
}

export default Navbar