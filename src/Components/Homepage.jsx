import React from 'react'
import millify from 'millify'
import {Typography,Row,Col,Statistic} from 'antd'
import {Link} from 'react-router-dom'
import { useGetCryptoQuery } from '../Services/cryptoApi'
import CryptoCurrencies from './CryptoCurrencies'
import News from './News'

const Homepage = () => {

  const {Title} = Typography
  const {data,isFetching} = useGetCryptoQuery(10);

  if(isFetching) return "Loading..."

  const globalStats= data?.data?.stats;

  // console.log(globalStats);
  return (
    <>
    <Title level={2} className="heading">
      Global Crypto Stats
    </Title>
      <Row>
        <Col span={12}><Statistic title="Total Crypto Currencies" value={globalStats.total}></Statistic></Col>
        
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}></Statistic></Col>

        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic></Col>

        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic></Col>

        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic></Col>

      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Crypto Currencies in the world</Title>
        <Title level={3} className="show-more">
          <Link to ="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
        <CryptoCurrencies simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more">
          <Link to ="/news">Show More</Link>
        </Title>
      </div>
        <News simplified/>
    </>
  )
}

export default Homepage