"use client"
import Link from "next/link"
import { getKomikResponse } from "@/libs/api-libs.js"

const Page = async ({ params }) => {
    const { slug } = params
    const data = await getKomikResponse(`https://kurokami-api.vercel.app/api/chapter/${slug}`)
    
    return (
        <div className="">
            <h1 className="text-center font-bold p-2">{data.title}</h1>
            <div className="flex items-center justify-center gap-2 p-2">
                <Link 
                    className={`${data?.prevChapter === null ? "bg-slate-800" : "bg-blue-600"} px-3 py-1 rounded-md`}
                    href={data?.prevChapter ? `/chapter/${data?.prevChapter.split("/")[3]}` : "#"}
                >
                    <span className="font-semibold">Sebelumnya</span>
                </Link>
                <Link 
                    className={`${data?.nextChapter === null ? "bg-slate-800" : "bg-blue-600"} px-3 py-1 rounded-md`}
                    href={data?.nextChapter ? `/chapter/${data?.nextChapter.split("/")[3]}` : "#"}
                >
                    <span className="font-semibold">Selanjutnya</span>
                </Link>
            </div>
            <div className="flex flex-col">
                {data.images.map((image,index) => (
                    <img className="w-full h-full" src={image} />
                ))}
            </div>
            <div className="flex items-center justify-center gap-2 p-2">
                <Link 
                    className={`${data?.prevChapter === null ? "bg-slate-800" : "bg-blue-600"} px-3 py-1 rounded-md`}
                    href={data?.prevChapter ? `/chapter/${data?.prevChapter.split("/")[3]}` : "#"}
                >
                    <span className="font-semibold">Sebelumnya</span>
                </Link>
                <Link 
                    className={`${data?.nextChapter === null ? "bg-slate-800" : "bg-blue-600"} px-3 py-1 rounded-md`}
                    href={data?.nextChapter ? `/chapter/${data?.nextChapter.split("/")[3]}` : "#"}
                >
                    <span className="font-semibold">Selanjutnya</span>
                </Link>
            </div>
        </div>
    )
    
}

export default Page
