import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { Footer } from '@/components/Footer';

type Post = {
  id: number;
  title: string;
};

type Props = {
  posts: Post[];
};

const Home: FC<Props> = props => {
  return (
    <div>
      <h2>Index Page</h2>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {},
  };
};

export default Home;
