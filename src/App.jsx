import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import {Navbar,Homepage,Cryptocurrencies,CryptoDetailes,News} from './componants'
function App() {
  return (
    <Router>
    <div className='app'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
            <div className="routes">
              <Routes>

                <Route exact path='/' element={<Homepage/>}/>
                    
                
                <Route exact path='/cryptocurrencies'element={<Cryptocurrencies/>}/>
                    
                   
               
                <Route exact path='/crypto/:coinId'element={<CryptoDetailes/>}/>
                    
             
                <Route exact path='/news'element={<News/>}/>
                    
                


              </Routes>
            </div>
        </Layout>
        <div className="footer">
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
        cryptoverse<br/>
        All Rights Reserved
        </Typography.Title>
        <Space>
          <Link to='./'>Home</Link>
          <Link to='./cryptocurrencies'>Cryptocurrencies</Link>
          <Link to='./exchanges'>Exchanges</Link>
          <Link to='./crypto/:coinId'>CryptoDetailes</Link>
          <Link to='./news'>News</Link>
        </Space>
      </div>
      </div>
     
    </div>
    </Router>
  );
}

export default App;

