"use client";

import React from "react";
import countries from "@/public/data.json";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const country = countries.find((c) => c.numericCode == params.id);
  const router = useRouter();

  return (
    <div className="w-full min-h-screen text-[16px] text-foreground p-7 sm:px-10">
      <Button className="text-foreground shadow-lg" size={"lg"} onClick={() => router.back()}><MoveLeftIcon /> Back</Button>
      {country ? (
        <div className="mt-20 flex flex-col lg:flex-row items-start justify-start sm:gap-24">
          <div className="relative w-full aspect-video min-h-[20rem]">
            <Image fill alt="" src={country.flag} className="sm:object-cover object-fill" />
          </div>
          <div className="p-7 px-12">
            <h1 className="text-3xl font-bold my-4">{country.name}</h1>
            <div className="sm:grid md:block xl:grid grid-cols-2 grid-rows-2 gap-16">
              <ul className="list [&>li]:my-2">
                <li>Native Name: <span>{country.nativeName}</span></li>
                <li>Population: <span>{country.population}</span></li>
                <li>Region: <span>{country.region}</span></li>
                <li>Sub Region: <span>{country.subregion}</span></li>
                <li>Capital: <span>{country.capital}</span></li>
              </ul>
              <ul className="list my-6 [&>li]:my-2">
                <li>Top Level Domain: <span>{country.topLevelDomain}</span></li>
                <li>Currencies: <span>{country.currencies?.map((cu, idx) => idx !== country.currencies.length ? cu.name : cu.name + ", ")}</span></li>
                <li>Languages: <span>{country.languages?.map((la, idx) => idx !== country.languages.length ? la.name : la.name + ", ")}</span></li>
              </ul>
              <div className="flex flex-col sm:flex-row items-start justify-start col-start-1 col-end-3 xl:h-3 gap-3 w-full">
                <h3>Border Countries: </h3>
                <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
                  {
                    country.borders?.map((b, idx) => (
                      <li key={idx} className="px-5 py-1 w-max rounded-lg bg-primary">{countries.find((c) => c.alpha3Code === b)?.name}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "no country found"
      )}
    </div>
  );
};

export default Page;
