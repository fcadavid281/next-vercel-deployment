import React from "react";

import Link from "next/link";
import { MainLayout } from "../../Components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>
        {/* Ir a   <a style={{ color: 'blueviolet' }} href='/'>Home</a> */}
        Ir a{" "}
        <Link
          style={{ color: "blueviolet", textDecorationLine: "underline" }}
          href="/"
        >
          Home
        </Link>
      </h1>
      <p>
        She needs to talk her brother, every day I am from Colombia, I want to
        study every day Nextjs is very well, Thank you so much See you later See
        you tomorrow I love my wife forever, I do not speaks English the day
        week Monday Tuesday Wednesday Thursday Friday Saturday Sunday
      </p>
      <p>
        <code className={"code"}>Get started by editing {""}</code>
      </p>
    </MainLayout>
  );
}
