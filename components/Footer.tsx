import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t-2 border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image src="/logo.svg" alt="Logo" width={118} height={18} className="object-contain"/>
                <p className="text-base text-gray-700">
                    CarHub 2024 <br />
                    All right reserved &copy;
                </p>
            </div>

            <div className="footer__links">
                {footerLinks.map((link)=>(
                    <div key={link.title} className="footer__link">
                        <h3 className="font-bold">{link.title}</h3>
                        {link.links.map((item)=>(
                            <Link key={item.title} href={item.url} className="text-gray-500">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>


        <div className="flex justify-between items-center flex-wrap
                            mt-10 border-t-2 border-gray-100 sm:px-16 px-6 py-8">

            <p>@2024 CarHub. All Right Reserved</p>
            <div className="footer__copyrights-link">
                <Link className="text-gray-500" href="/">
                    Privacy Policy
                </Link>
                <Link className="text-gray-500" href="/">
                    Terms of Use
                </Link>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer