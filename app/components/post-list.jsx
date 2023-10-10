import Post from "./post";

const PostList = ({ posts }) => {
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {posts.map((post) => (
                    <Post key={post.id} post={post.attributes}></Post>
                ))}
            </div>
        </>
    );
};

export default PostList;
