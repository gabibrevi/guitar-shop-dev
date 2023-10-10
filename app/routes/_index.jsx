import { useLoaderData } from "react-router";
import { getGuitars } from "../models/guitars.server";
import { getPosts } from "../models/posts.server";
import { getCourse } from "../models/course.server";
import GuitarList from "../components/guitar-list";
import stylesGuitars from "../styles/guitars.css";
import stylesPosts from "../styles/blog.css";
import stylesCourse from "../styles/course.css";
import PostList from "../components/post-list";
import Course from "../components/course";

export function meta() {}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: stylesGuitars,
        },
        {
            rel: "stylesheet",
            href: stylesPosts,
        },
        {
            rel: "stylesheet",
            href: stylesCourse,
        },
    ];
}

export async function loader() {
    const [guitars, blogs, course] = await Promise.all([
        getGuitars(),
        getPosts(),
        getCourse(),
    ]);

    return {
        guitars: guitars.data,
        blogs: blogs.data,
        course: course.data,
    };
}

function Index() {
    const { guitars, blogs, course } = useLoaderData();

    return (
        <>
            <main className="container">
                <GuitarList guitars={guitars}></GuitarList>
            </main>

            <Course course={course.attributes} />

            <section className="container">
                <PostList posts={blogs}></PostList>
            </section>
        </>
    );
}
export default Index;
