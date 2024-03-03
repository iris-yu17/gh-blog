"use server";

import { Beer } from "@/type";

export default async function fetchBeers(page: number) {
  const perPage = 5;
  const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data as Beer[];
  } catch (e) {
    console.log(`Error fetching data: ${e}`);
    return null;
  }
}