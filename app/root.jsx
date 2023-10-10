import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link,
} from "@remix-run/react";
import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

//Load meta data into header

export function meta() {
    return [
        {
            name: "viewport",
            content: "width=device-width,initial-scale=1",
        },
        { title: "Guitar LA - Remix" },
        { charset: "utf-8" },
    ];
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
        },
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
}

export default function app() {
    return (
        <Document>
            <Outlet />
        </Document>
    );
}

function Document({ children }) {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

/* Errors  controller */
export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className="error">
                    {error.status} {error.statusText}
                </p>
                <Link className="error-link" to="/">
                    Home
                </Link>
            </Document>
        );
    }

    return (
        <Document>
            <p className="error">
                {error.status} {error.statusText}
            </p>
            <Link className="error-link" to="/">
                Home
            </Link>
        </Document>
    );
}
