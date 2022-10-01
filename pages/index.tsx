import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="mx-auto from-surface-decorative-1 to-surface-success-subdued bg-gradient-to-br grid place-items-center h-screen gap-4 bg-surface-neutral-subdued">
      <div className="bg-surface rounded">
        <Link href="/minside" passHref>
          <a className="ring-subtle h-full flex p-6 text-xl text-default shadow-md rounded hover:bg-surface-hover focus:outline-none">
            Min side demo
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
