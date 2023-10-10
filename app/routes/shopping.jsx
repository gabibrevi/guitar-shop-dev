import Guitar from "../components/guitar";
import { getGuitars } from "../models/guitars.server";
import { useLoaderData } from "@remix-run/react";
import styles from "../styles/guitars.css";
import GuitarList from "../components/guitar-list";

export function meta() {
    return [
        {
            title: "GuitarLA - Guitars shop",
            description: "GuitarLA - Our guitars collections!",
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

export async function loader() {
    const guitars = await getGuitars();
    return guitars.data;
}

const Shopping = () => {
    const guitars = useLoaderData();

    return (
        <main className="cointainer">
            <GuitarList guitars={guitars}></GuitarList>
        </main>
    );
};

export default Shopping;
