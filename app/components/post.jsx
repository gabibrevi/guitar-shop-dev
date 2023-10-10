import { Link } from "@remix-run/react";
import { dateFormat } from "../utils/helpers";

const Post = ({ post }) => {
    const { title, content, image, url, publishedAt } = post;

    return (
        <article className="post ">
            <img
                className="image"
                src={image.data.attributes.formats.small.url}
                alt={`image blog ${title}`}
            />
            <div className="contain">
                <h3 className="title">{title}</h3>
                <p className="date">{dateFormat(publishedAt)}</p>

                <p className="description">{content}</p>
                <Link className="link" to={`/blog/${url}`}>
                    Read
                </Link>
            </div>
        </article>
    );
};

export default Post;
