import React from "react";
import { data } from "../data/data.js";
import { ShoppingBag } from "@phosphor-icons/react";

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[50vh] h-[40vh] p-4 rounded-lg bg-white overflow-auto">
      <h2 className="font-bold text-[22px]">Recent Orders</h2>

      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3">
              <ShoppingBag className="text-purple-800 text-[26px]" />
            </div>

            <div className="pl-4 ">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">${order.name.first}</p>
            </div>

            <p className="lg:flex md:hidden absolute right-6">{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
