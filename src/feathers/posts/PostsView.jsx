import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const postsView = () => {
  const dispatch = useDispatch();
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h2>Posts View</h2>
      {isLoading && <h2>loading....</h2>}
      {error && <h2> {error.message} </h2>}
      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article key={post.id}>
                <h3>{post.title}</h3>
                <br />
                <p>{post.body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default postsView;
