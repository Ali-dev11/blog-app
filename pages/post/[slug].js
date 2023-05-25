import React from 'react';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '@/components';
import { getPosts, getPostDetails } from '@/services';

const PostDetails = () => {
  
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail />
            <Author />
            <CommentsForm />
            <Comments />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

export async function getStaticProps({ params }) {
    const posts = (await getPosts()) || []
  
    return {
      props: { posts }
    }
  }
  