import Link from "next/link"
import { FaStar } from "react-icons/fa"
import { FaReadme } from "react-icons/fa6"

export default async function Page({ params }) {
    const { slug } = params
    const response = await fetch(`https://kurokami-api.vercel.app/api/manhwa-detail/${slug}`)
    const data = await response.json()
    const genre = data?.genres.map(genre => genre.genreName).join(", ")
    
    return (
        <div>
            <div
                className="relative flex items-center gap-3 p-2 pt-10 pb-2"
            >
                <img className="absolute top-0 w-screen h-52 brightness-50" src={data.imageSrc} />
                <div className="w-1/3">
                    <div
                        className="relative bg-cover bg-center w-full h-40 rounded-md overflow-hidden"
                        style={{ backgroundImage: `url("${data.imageSrc}")` }}
                    >
                        <div className="flex items-center justify-center gap-0.5 absolute bottom-1 right-0 bg-black rounded-l-lg p-1">
                            <FaStar className="text-yellow-300" />
                            <span className=" text-white text-xs font-bold">{data.rating}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-2/3 z-20">
                    <h1 className="font-extrabold line-clamp-2">{data.title}</h1>
                    <span className="text-sm">Author : {data.author}</span>
                    <span className="text-sm">Artist : {data.artist}</span>
                    <span className="text-sm line-clamp-1">Genre : {genre}</span>
                    <span className="text-sm">Tipe : {data.type}</span>
                    <span className="text-sm">Status : {data.status}</span>
                </div>
            </div>
            <p className="text-sm p-2">{data.synopsis}</p>
            <div className="flex items-center justify-center gap-2 p-2">
                <div className="flex flex-col items-center bg-blue-600 px-3 py-1.5 rounded-md">
                    <span className="text-base">Baca Chapter Awal</span>
                    <span className="text-lg font-bold">
                        {data.firstChapter.title === "?" ? data.firstChapter.title : "Chapter 0"}
                    </span>
                </div>
                <div className="flex flex-col items-center bg-blue-600 px-3 py-1.5 rounded-md">
                    <span className="text-base">Baca Chapter Awal</span>
                    <span className="text-lg font-bold">{data.latestChapter.title}</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 rounded-md m-2">
                {data.chapters.map((chapter,index) => (
                    <Link 
                        className="flex items-center justify-between bg-[#1c232b] px-4 py-3 rounded-bl-3xl rounded-tr-3xl"
                        href={`/chapter/${chapter.chapterLink.split("/")[3]}`}
                        key={index}
                    >
                        <div className="flex flex-col">
                            <span className="font-bold">{chapter.chapterNum}</span>
                            <span className="text-sm">{chapter.chapterDate}</span>
                        </div>
                        <FaReadme className="text-3xl" />
                    </Link>
                ))}
            </div>
        </div>
    )
    
}
