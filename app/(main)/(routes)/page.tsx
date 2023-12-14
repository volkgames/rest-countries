"use client"

import countries from "@/public/data.json";
import Image from "next/image";
import Header from "./_components/header";
import Nav from "./_components/nav";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const redirectToPage = (idx: string) => {
    const code = countries.find((c) =>  c.numericCode == idx);
    router.push(`/${code?.numericCode}`);
  }
  
  return (
    <main className={""}>
      <section className="px-16">
        <Nav search={search} onSearchChange={setSearch} onFilterChange={setFilter} filter={filter} />
        <div className="grid w-full h-full grid-cols-1 gap-7 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-7">
          {countries.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) && (filter == "all" ? true : filter == c.region.toLowerCase())).map((c, idx) => (
            <article
              key={c.numericCode}
              className=" w-[18rem] shadow-xl cursor-pointer aspect-square bg-primary h-max rounded-md mx-2 text-[14px]"
              onClick={() => redirectToPage(c.numericCode)}
            >
              <div className="relative w-full rounded-lg aspect-video">
                <Image
                  src={c.flag}
                  fill
                  alt=""
                  className="rounded-t-md object-cover"
                />
              </div>
              <div className="py-2 px-7">
                <h1 className="mb-2 text-2xl font-extrabold">{c.name}</h1>
                <ul className="list">
                  <li>
                      Population: {" "}
                    <span>{c.population}</span>
                  </li>
                  <li>
                      Region: {" "}
                    <span>{c.region}</span>
                  </li>
                  <li>
                      Capital: {" "}
                    <span>{c.capital}</span>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
