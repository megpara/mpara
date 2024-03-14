import Head from "next/head";
import Layout from "../components/Layout";
import NewsletterForm from "../components/NewsletterForm";

export default function Mail() {
    return (
        <Layout>
            <Head>
                <title>Mail</title>
                <meta
                name="description"
                content="Sign up to Empara's newsletter to stay up to date on class, shows, and more"
                />
            </Head>
            <NewsletterForm />
        </Layout>
    )
}