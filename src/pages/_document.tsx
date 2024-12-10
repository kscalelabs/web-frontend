import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon_16x16.png"/>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon_32x32.png"/>

                <meta name="msapplication-TileColor" content="#EA530E"/>
                <meta name="msapplication-TileImage" content="/favicons/favicon_144x144.png"/>

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/favicon_180x180.png"/>

                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="180x180"
                    href="/favicons/favicon_180x180.png"/>

                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicons/favicon_192x192.png"/>

                <link
                    rel="icon"
                    type="image/png"
                    sizes="194x194"
                    href="/favicons/favicon_194x194.png"/>

                <link
                    rel="mask-icon"
                    href="/favicons/favicon_svg.svg"
                    color="#EA530E"/>

                <link
                    rel="icon"
                    sizes="32x32 48x48"
                    type="image/x-icon"
                    href="/favicons/favicon.ico"/>

                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/favicons/favicon.ico"/>
            </Head>
            <body className={"antialiased"}>
                <NextScript/>
                <Main/>
            </body>
        </Html>
    );
}
