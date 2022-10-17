import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoHeaderApi = {
  'X-RapidAPI-Key': 'bdb606d03dmshf9031f66fc37266p1aa047jsnc218d1a5aa84',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

const baseUrl  = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url)=> ({url,headers: cryptoHeaderApi})

export const cryptoApi =  createApi({
    reducerPath: "cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({

      getCrypto :builder.query({
        query: (count)=>createRequest(`/coins?limit=${count}`)
      }),

      getDetail : builder.query({
        query: (coindId)=> createRequest(`/coin/${coindId}`)
      })
    })
})


export const {useGetCryptoQuery,useGetDetailQuery} = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
//     headers: {
//       'X-RapidAPI-Key': 'bdb606d03dmshf9031f66fc37266p1aa047jsnc218d1a5aa84',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };