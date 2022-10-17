import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import {Col,Row,Typography,Select} from 'antd'
import { MoneyCollectOutlined,DollarCircleOutlined,FundOutlined,ExclamationCircleOutlined,StopOutlined,TrophyOutlined } from '@ant-design/icons'
import { useGetDetailQuery } from '../Services/cryptoApi'
const {Title,Text} = Typography;
const {Option} = Select;

const CryptoDetails = () => {
  const coinId = useParams('coinId');

  console.log(coinId);
  const {data,isFetching} = useGetDetailQuery(coinId.coinId);
  if(isFetching) return "loading";
  console.log(data)
  return (
    <div>CryptoDetails</div>
  )
}

export default CryptoDetails