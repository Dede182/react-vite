import { Navbar,Homepage,CryptoCurrencies,CryptoDetails,Exchange,News } from "./Components";
import { Button,Menu,Typography,Avatar,Space } from "antd"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import {Layout} from 'antd'
const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
          <Layout>
            <div className=" px-10">
              <Routes>
                <Route exact path ="/" element={<Homepage/>}/>
                  
                <Route exact path ="/cryptocurrencies" element={<CryptoCurrencies/>}/>
                
                <Route exact path ="/crypto/:coinId" element={<CryptoDetails/>}/>

                <Route exact path ="/exchanges" element={<Exchange/>}/>

                <Route exact path ="/news" element={<News/>}/>

              </Routes>
            </div>

          </Layout>
          <div className="footer" >
          <Typography.Title level = {5} style ={{ color:'white',textAlign:'center' }}>
            CryptoVerse<br/>
            All right reversed
          </Typography.Title>
          <Space>
            <Link to ="/">Home</Link> 
            <Link to ="/exchanges">Exchanges</Link>
            <Link to ="/news">News</Link>
          </Space>
        </div>
        </div>
    </div>
  )
}

export default App
