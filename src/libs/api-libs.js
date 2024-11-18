"use client"

export const getKomikResponse = async (link) => {
    const response = await fetch(link)
    const data = await response.json()
    return data
}
