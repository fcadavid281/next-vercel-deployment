import { useRouter } from "next/router";
import Link from "next/link";
import { CSSProperties, FC } from "react";

const styleLink: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link style={asPath === href ? styleLink : undefined} href={href}>
      {text}
    </Link>
  );
};
