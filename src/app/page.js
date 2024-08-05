import Link from "next/link";
import Header from "./components/header";
import LatestBlog from "./components/latestBlog" ;
import Image from "next/image";
export default function Home() {
  return (
      <div className="max-w-600px mx-auto px-2 py-2" >
          <Header/>
          <main > 
            <div className="ml-4 mt-4 border-l-2 pl-2 border-slate-800">
              <p className="justify-start text-wrap w-1/2 break-words">
              Hello im jst a sorry littel coder .
              </p>
            </div>
              <Image className="mx-auto my-5" src='/astro.png' alt="asthetic" priority={true} width={100} height={150}/>
            <div className="my-4">
              --anim-- BUILDING
              <div className="w-full flex gap-2 my-4">
                <div className="border-2 text-wrap break-words border-opacity-50 border-slate-600 w-full pl-2">
                  <h2>
                    tile1
                  </h2>
                  Somethings abbr.
                </div>
                <div className="border-2 text-wrap break-words border-opacity-50 border-slate-600 w-full pl-2">
                  <h2>
                    Tile 2
                  </h2>
                  Somethings 2 abbr.
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="border-y-2 border-slate-600 border-opacity-50 mb-2 px-2">INDEX</div>
              Randon stuff and indices
            </div>
            <div className="my-4">
              <div className="mb-2 border-y-2 border-slate-600 border-opacity-40 px-2">Recent Blog</div>
              <LatestBlog />
            </div>
          </main>
          ._.\\
          
          <footer className="flex flex-col mt-5">
            <Link href="#" target="_blank" >Mail</Link>
            <Link href="#" target="_blank">Github</Link>
            <Link href="#" target="_blank">Twitter</Link>
          </footer>

      </div>
  );
}
