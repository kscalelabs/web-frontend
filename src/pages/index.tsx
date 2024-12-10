export default function Home() {
    return (
        <div
            className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 `}
        >
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="flex flex-col gap-4 text-2xl">
                    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" x="10" y="10" className={"fill-accent-aubergine"}/>
                    </svg>
                    Aubergine
                    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" x="10" y="10" className={"fill-accent-dragonfruit"}/>
                    </svg>
                    Dragonfruit
                    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" x="10" y="10" className={"fill-accent-apple"}/>
                    </svg>
                    Apple
                    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" x="10" y="10" className={"fill-accent-blood-orange"}/>
                    </svg>
                    Blood Orange
                    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" x="10" y="10" className={"fill-accent-tangerine"}/>
                    </svg>
                    Tangerine
                    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" x="10" y="10" className={"fill-accent-butter"}/>
                    </svg>
                    Butter
                </div>

                <div className="flex flex-col gap-4 text-2xl items-start">
                    <h1>H1: Apparat Medium 96px / 84px with -2% tracking</h1>
                    <h2>h2: Apparat Medium 57.5px / 56px with -1.5% tracking</h2>
                    <h3>h3: GT Planar Regular 39.5px /42px with -1% tracking</h3>
                    <p>Body: GT Planar 24px / 28px -1% tracking</p>
                    <figcaption>
                        Figcaption, caption: GT Planar 17px / 28px 2% tracking
                    </figcaption>

                    <blockquote>
                        <pre>
                            <code>
                                Blockquote, pre, code: CoFo Mono 18px / 18px 2% tracking
                            </code>
                        </pre>
                    </blockquote>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
