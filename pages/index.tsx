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
    <div>
      <h2>POSTの一覧</h2>
      <div>
	{props.posts.map((post, index) =>
	  <div key={index}>
	    <div>{post.id}.</div>
	    <div>{post.title}</div>
	  </div>
        )}
      </div>
    </div>
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