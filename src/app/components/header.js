import Toggle from "./toggle";
import Link from "next/link";

export default function Header() {
    return(
        <div className=" justify-between flex align-middle" >
            <div className="flex-grow">
                <Link href="/">CozTheta</Link>
            </div>
            <div className="flex justify-evenly gap-3 align-middle">
                <Link href="/pages/bloglist">Blogs</Link>
                <Toggle/>
            </div>
        </div>
    ) ;
}