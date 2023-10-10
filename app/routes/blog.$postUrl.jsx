import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server";
import { dateFormat } from "../utils/helpers";

export function meta({ data }) {
    if (!data) {
        return [
            {
                title: "Guitar LA - Page not found",
                description:
                    "Guitar Shopping - Shopping guitar - Page not found ",
            },
        ];
    }
    return [
        {
            title: `GuitarLA - ${data?.data[0].attributes.title} `,
            description: "Guitar Shopping - Guitar Selling ",
        },
    ];
}
export async function loader({ params }) {
    const { postUrl } = params;
    const post = await getPost(postUrl);

    if (post.data.length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Post not found",
        });
    }
    return post;
}

const PostUrl = () => {
    const post = useLoaderData();
    const {
        title,
        content = useContext(second),
        image,
        publishedAt,
        url,
    } = post?.data[0]?.attributes;

    return (
        <article className=" post mt-3">
            <img src={image.data.attributes.url} alt={`Post ${title}`} />
            <div className="contain">
                <h3>{title}</h3>
                <p className="date">{dateFormat(publishedAt)}</p>
                <p className="text">{content}</p>
            </div>
        </article>
    );
};

export default PostUrl;
