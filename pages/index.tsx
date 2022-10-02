import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="mx-auto bg-gradient-to-r from-[#374151] via-[#111827] to-[#000] grid place-items-center h-screen gap-4 ">
      <div className="grid gap-4 text-[#ffffffcc]">
        <Link href="/minside" passHref>
          <a className="flex ring-1 ring-[#ffffff88] p-6 text-xl text-default shadow-md rounded bg-[#475569] focus:outline-none">
            Min side demo
          </a>
        </Link>
        <Link href="/minside-nav-farger" passHref>
          <a className="flex ring-1 ring-[#ffffff88] p-6 text-xl text-default shadow-md rounded bg-[#475569] focus:outline-none">
            Min side NAV farger
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
