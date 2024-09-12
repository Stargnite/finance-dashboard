import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/logo.svg"


const HeaderLogo = () => {
	return (
		<Link href="/">
			<div className="items-center hidden lg:flex">
				<Image src={Logo} alt="logo" width={28} height={28} />
				<p className="font-semibold text-white text-2xl ml-2.5">Finance</p>
			</div>
		</Link>
	)
}

export default HeaderLogo
