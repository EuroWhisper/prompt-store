import { useMutation, useQuery } from '@tanstack/react-query';
import Head from 'next/head';
import type { NextPage } from 'next';
import { useState } from 'react';

import Button from '../components/Button';
import { Prompt } from './api/prompts';
import PromptList from '../components/PromptList';
import TextArea from '../components/TextArea';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [prompt, setPrompt] = useState('');

  const { data, refetch } = useQuery(['prompts'], fetchPrompts);

  function fetchPrompts(): Promise<Prompt[]> {
    return fetch('/api/prompts').then((res) => res.json());
  }

  const { mutate } = useMutation(['prompt'], savePrompt);

  function savePrompt(): Promise<Prompt> {
    return fetch('/api/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    }).then((res) => {
      refetch();
      return res.json();
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className={styles.title}>Prompt Store</h1>

        <p className={styles.description}>Store your favorite prompts!</p>
        <TextArea onChange={handlePromptChange} />
        <div className="mt-2">
          <Button onClick={() => mutate()}>Save prompt</Button>
        </div>

        {data && data.length > 0 && (
          <section className="mt-8">
            <PromptList prompts={data} />
          </section>
        )}
      </main>

      <footer className={'mt-8 border-t-2 border-slate-600 text-center pt-2'}>
        By Laurence Juden
      </footer>
    </div>
  );

  function handlePromptChange(prompt: string) {
    setPrompt(prompt);
  }
};

export default Home;
