import { useRouter } from "next/router"
import Link from "next/link"

const styleLink={
    color:'#0070f3',
    textDecoration:'underline'
}

export const ActiveLink = ({text,href}) => {

 const {asPath} =useRouter();
  return (
        <Link style={asPath === href ? styleLink:null} href={href}>
            {text}
        </Link>
  )
}
