import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const ApiHeaders = {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'bdb606d03dmshf9031f66fc37266p1aa047jsnc218d1a5aa84',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
     }


const baseUrl = "https://bing-news-search1.p.rapidapi.com/";

const createRequest = (url)=>({url,headers:ApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : "cryptoNewsApi",
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder)=>({
        getCryptoNews : builder.query({
            query : ({newsCategory,count}) => createRequest(`news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
}) 

export const {useGetCryptoNewsQuery} = cryptoNewsApi