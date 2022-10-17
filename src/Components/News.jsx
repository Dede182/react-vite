import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../Services/cryptoNewsApi'
import { useGetCryptoQuery } from '../Services/cryptoApi'
import { Select,Typography,Row,Col,Card,Avatar } from 'antd'
import moment from 'moment'

const {Text,Title} = Typography;
const {Option} = Select;
const News = ({simplified}) => {

  const [category,setCategory] = useState('CryptoCurrency')

  const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory : category,count : simplified ? 6 : 12})
  const {data} = useGetCryptoQuery(100);


  if(!cryptoNews?.value) return "Loading"
 


  const demoImg = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"

  return (

    <>
      <Row gutter={[24,24]} className="py-10">
          {!simplified && (
            <Col  span ={24}>
                <Select
                showSearch
                className='select-news'
                placeholder="chose a Crypto"
                optionFilterProp='children'
                onChange={(value)=>setCategory(value)}
                filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())}
                >
                  <Option value = "Cryptocurrency">Cryptocurrency</Option>
                  {
                    data?.data?.coins.map((coin)=> <Option value = {coin.name}>{coin.name}</Option>)
                  }
                </Select>
            </Col>
          )}
      </Row>


      <Row gutter={[24,24]} className="py-10">

        {
          cryptoNews.value.map((news,id)=>(
            <Col xs ={24} sm = {12} lg = {8} key ={id}>
              <Card hoverable className='news-card'>
                <a href={news.url}>
                  <div className="news-image-container">
                    <Title className='news-title' level={4}>{news.name}</Title>
                    <img src={news?.image?.thumbnail?.contentUrl || demoImg} alt="not found" />
                  </div>
                  <p>
                    {news?.description > 100 ? `${news?.description.substring(0,100)} ...` : news?.description}
                  </p>
                  <div className="provider-container">
                    <div className="">
                      <Avatar src = {news?.provider[0]?.image?.thumbnail?.contentUrl || demoImg} alt = "avatar img"/>
                      <Text className='mx-3'>{news?.provider[0]?.name}</Text>
                    </div>
                      <Text className='mx-3'>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                  </div>
                </a>

              </Card>
            </Col> 
          ))
        }
      <p className='text-base underline text-blue-700 h-full align-text-bottom'>Show more</p>
      </Row>

    </>

  )
}

export default News