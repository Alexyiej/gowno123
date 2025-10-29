import React from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-gradient-to-r from-[#FF0000]/75 to-[#BD0303]/75 w-60 p-4 text-white">
        <h2>LSP</h2>
        <nav>
          <ul>
            <li><Link to="/kpi">Kpi</Link></li>
            <li><Link to="/alerts">Alerts</Link></li>
            <li><Link to="/trucktracker">Truck Tracker</Link></li>
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
