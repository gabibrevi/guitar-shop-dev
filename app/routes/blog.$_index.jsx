import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/posts.server";
import PostList from "../components/post-list";

export async function loader() {
    const posts = await getPosts();
    if (posts.data.length === 0) {
        throw new Response("", {
            status: 404,
            errorMessage: "Page not found",
        });
    }
    return posts.data;
}

const Blog = () => {
    const posts = useLoaderData();
    return <PostList posts={posts}></PostList>;
};
export default Blog;
