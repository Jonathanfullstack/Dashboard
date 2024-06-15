import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-600 min-h-screen ">
        <Header title="Dashboard" />
        <TopCards />
        <div className="grid p-4 md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
