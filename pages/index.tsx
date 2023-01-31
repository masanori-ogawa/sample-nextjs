import React, { FC } from "react";
import { GetStaticProps } from "next";

type Post = {
  id: number;
  title: string;
}

type Props = {
  posts: Post[];
}

const Home: FC<Props> = (props) => {
  return (
    <>
      <h2>POSTの一覧</h2>
      <div>
	{props.posts.map((post) =>
	  <div>
	    <div>{post.id}.</div>
	    <div>{post.title}</div>
	  </div>
        )}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const response = await fetch("http://localhost/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;