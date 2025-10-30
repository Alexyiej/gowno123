import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { LiaCarSideSolid } from "react-icons/lia";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="flex flex-col gap-6 bg-gradient-to-b from-[#FF0000] to-[#BD0303] w-60 p-4 text-white">
        <h2 className="text-3xl font-bold">LSP</h2>
        <nav>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3 text-2xl">
              <MdOutlineDashboard />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="flex items-center gap-3 text-2xl">
              <LiaCarSideSolid />
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
