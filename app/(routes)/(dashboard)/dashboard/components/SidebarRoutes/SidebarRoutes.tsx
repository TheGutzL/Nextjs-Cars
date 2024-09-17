"use client";

import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { SidebarItem } from "./SidebarItem";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";

const SidebarRoutes = () => {
  const { userId } = useAuth();

  if (!userId) return redirect("/");

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6 border-b">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
            />
          ))}
        </div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataAdminSidebar.map((item) => (
            <SidebarItem
              key={item.label}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarRoutes;
