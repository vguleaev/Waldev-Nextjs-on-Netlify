import Head from 'next/head';
import { useState } from 'react';
import catService from '../services/catService';

export default function Home({ catFact }) {
  const [fact, setFact] = useState(catFact);

  const getRandomFact = async () => {
    const { data } = await catService.getRandomFact();
    return setFact(data.fact);
  };

  return (
    <div className="container">
      <Head>
        <title>Cat Facts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header">Cat Facts</div>
        <div className="logo">🐈</div>
        <div className="fact">{fact}</div>
        <div className="button">
          <button onClick={getRandomFact}>New Fact</button>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await catService.getRandomFact();
  return {
    props: {
      catFact: data.fact
    }
  };
}
