import Header from "/src/app/components/header";
import {getSortedPostsData} from '../../lib/posts' ;
//import { MDXRemote } from "next-mdx-remote";
import {serialize} from 'next-mdx-remote/serialize' ;
import MDXContent from "../../components/MDXContent";


export default async function Home() {

    const allPostsData = getSortedPostsData() ;

    const posts = await Promise.all(
        allPostsData.map(async post => {
            const mdxSource = await serialize(post.content);
            return {...post, source:mdxSource} ;
        })
    );

    return (
        <div className="max-w-600px mx-auto p-2">
            <Header/>    
            <div>
               {posts.map(post => (
                <div key={post.fileName} className="w-5/6 mt-4 mb-5 text-wrap break-words border-2 p-3 pl-4 border-slate-600 border-opacity-40 rounded-lg mx-auto">
                    <h2 className='font-bold text-lg'>{post.title}</h2>
                    <p className="pb-2 mb-2 border-b-2">{new Date(post.date).toDateString()}</p>
                    <MDXContent source={post.source} />
                </div>
                ))} 
            </div>
        </div>
    );

}