import Link from "next/link";
import Image from "next/image";
import React from "react";
import { RxBarChart, RxDashboard, RxAvatar } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

type Props = {
  children: React.ReactNode;
};

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="flex">
        <div className="fixed w-20 h-screen p-4 bg-white border-r-2 flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <Link href="/">
              <div className="bg-blue-400 hover:bg-blue-200 text-white hover:text-blue-400 p-3 rounded-lg inline-block">
                <RxBarChart size={20} />
              </div>
            </Link>
            <span className="border-b-2 border-gray-200 w-full p-2"></span>
            <Link href="/dashboard">
              <div className="bg-gray-300 hover:bg-gray-600 text-white my-4 p-3 rounded-lg inline-block">
                <RxDashboard size={20} />
              </div>
            </Link>
            <Link href="/customer">
              <div className="bg-gray-300 hover:bg-gray-600 text-white my-4 p-3 rounded-lg inline-block">
                <RxAvatar size={20} />
              </div>
            </Link>
            <Link href="/orders">
              <div className="bg-gray-300 hover:bg-gray-600 text-white my-4 p-3 rounded-lg inline-block">
                <HiOutlineShoppingBag size={20} />
              </div>
            </Link>
          </div>
          <div>
            <Link href="/settings">
              <div className="bg-blue-400 hover:bg-blue-200 text-white hover:text-blue-400 p-3 rounded-lg inline-block">
                <FiSettings size={20} />
              </div>
            </Link>
          </div>
        </div>
        <main className="ml-20 w-full">{props.children}</main>
      </div>
    </>
  );
};

export default Sidebar;
