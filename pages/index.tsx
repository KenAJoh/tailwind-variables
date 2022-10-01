import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="mx-auto grid place-items-center h-screen gap-4 bg-gray-50">
      <a
        href="/minside"
        className="p-6 text-xl bg-white text-gray-900 shadow-md rounded ring-1 ring-gray-900/10 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
      >
        Theming min side
      </a>
    </div>
  );
};

export default Home;
