import Image from "next/image";
import Head from "next/head";
import NavBar from "./componentes/NavBar";

export default function Home() {
  return (
    <main className="">
      <Head>
        <link rel="icon" type="image/png" href="" />
        <title> | </title>
        <meta name="description" content="a." />
        <meta name="keywords" content="a" />
        <meta name="author" content="a" />
      </Head>
      <NavBar logoText="Recetas Mabs"></NavBar>
      <div className="bg-crema">
        <span className="text-center">Aqui va el carrusel de las recetas</span>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >*/}
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          {/* Go to nextjs.org →
        </a> */}
      </footer>
    </main>
  );
}
