"use client"

import Link from "next/link"

const Update = async () => {
    const response = await fetch("https://kurokami-api.vercel.app/api/manhwa-new")
    const data = await response.json()
    return (
        <div className="p-2">
            <h1 className="text-xl font-semibold py-2">Update Terbaru</h1>
            <div className="grid grid-cols-3 gap-2">
                {data.map((komik,index) => (
                    <Link
                        className="relative bg-cover bg-center inner-shadow-bottom w-full h-36 md:h-48 rounded-lg cursor-pointer overflow-hidden"
                        style={{backgroundImage: `url(${komik.imageSrc.split("?resize")[0]})` }}
                        href={`/komik/${komik.link.split("/")[4]}`}
                        key={index}
                    >
                        <h3 className="absolute top-1 left-0 bg-blue-600 text-white text-xs font-bold rounded-r-lg p-1">Chapter {komik?.chapters[0].chapterTitle.split(".")[1]}</h3>
                        <h3 className="absolute bottom-0 text-white text-sm font-semibold line-clamp-2 p-1">{komik.title}</h3>
                    </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Update