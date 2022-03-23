import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import { ApiResults } from '../typing'
import requests from '../utils/requests'


export default function Home({results}:ApiResults) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}

      <Header/>

      {/*Navbar*/}

      <Nav/>

      {/*Results*/}

      <Results results={results}/>

    </div>
       
  )
}


export const getServerSideProps = async (ctx:any) => {

  const genre = ctx.query.genre;

  const requests1:any = requests

  
  const request = await fetch(
    `https://api.themoviedb.org/3${requests1[genre]?.url || requests1.fetchTrending.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };

}