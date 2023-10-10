import React from "react";
import { getGuitar } from "../models/guitars.server";
import { useLoaderData } from "@remix-run/react";
import styles from "../styles/guitars.css";

export async function loader({ params }) {
    const { guitarUrl } = params;
    const guitar = await getGuitar(guitarUrl);

    if (guitar.data.length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Guitar not found",
        });
    }
    return guitar;
}

export function meta({ data }) {
    return [
        {
            title: `GuitarLA - ${data.data[0]?.attributes.name} `,
            description:
                "Guitar Shopping - Guitar Selling - New guitar Collection",
        },
    ];
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
}

const GuitarsUrl = () => {
    const guitar = useLoaderData();
    const { name, description, image, price } = guitar.data[0].attributes;

    return (
        <main className="container guitar">
            <img src={image.data.attributes.url} alt={`Guitar ${name}`} />
            <div className="contain">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <p className="price">${price}</p>
            </div>
        </main>
    );
};

export default GuitarsUrl;
