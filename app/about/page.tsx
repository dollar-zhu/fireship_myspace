export const dynamic = 'force-static'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "This is the about page.",
};

export default async function About(){
    return (
        <main>
            <h1>About</h1>
            <p>This is the about page.</p>
        </main>
    )
}