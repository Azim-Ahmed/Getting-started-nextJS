import Head from 'next/head';
import Link from 'next/link';

const layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>My next Project</title>
            </Head>
            <header>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>about</a></Link>

                <Link href="/contact"><a>contact</a></Link>
            </header>
            <main>



                {children}

<h3>{title}</h3>
            </main>
            <footer>This website &copy; next corporation {new Date().getFullYear()}</footer>
        </div>
    );
};

export default layout;