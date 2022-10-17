import {Link} from  'react-router-dom'
import millify from 'millify'
import {Card,Row,Col,Input} from 'antd'
import { useGetCryptoQuery } from '../Services/cryptoApi'
import { useEffect, useState } from 'react'



const CryptoCurrencies = ({simplified}) => { 
  const count = simplified ? 10 : 100
   const {data:cryptoList,isFetching} = useGetCryptoQuery(count);
   const [searchTerm,setSearchTerm] = useState('');
   const[cryptos,setCryptos] = useState([])
   if(isFetching) return "Loading>>>"
  console.log(cryptos)
    useEffect(()=>{
      const filterdData = cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setCryptos(filterdData)
    },[cryptoList,searchTerm])


   

  return (
    <>
    {
      !simplified &&
      <div className="search-crypto">
        <Input placeholder='search here' onChange={(e)=>setSearchTerm(e.target.value)}/>
      </div>
    }
      
        <Row gutter= {[32,32]} className="crypto-card-container py-10">
          {cryptos?.map((currency)=>(
            <Col xs={24} sm ={12} lg ={6} className="crypto-card " key={currency.uuid}>
              <Link to ={`crypto/${currency.uuid}`} >
                <Card  className="hover:shadow-xl" title={`${currency.rank} . ${currency.name}`}
                 extra ={<img className='crypto-image' src={currency.iconUrl}/>}>
                    <p>Price : {millify(currency.price)}</p>
                    <p>Market Cap : {millify(currency.marketCap)}</p>
                    <p>Daily Change : {millify(currency.change)}</p>
                </Card>
              </Link> 
            </Col>
          ))}
        </Row>
      
    </>
  )
}

export default CryptoCurrencies