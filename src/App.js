import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import './css/style.css'
import Banner from './component/banner';
import ContainerLeft1 from './component/container-left1';
import ContainerLeft2 from './component/container-left2';
import ContainerLeft3 from './component/container-left3';
import {ContainerLeft4} from './component/container-left4';
import {WidgetFooter} from './component/widget-footer';
import ContainerRight1 from './component/container-right1';
import ContainerRight2 from './component/container-right2';
import ContainerRight3 from './component/container-right-3';
import ContainerRight4 from './component/container-right4';
import ContainerRight5 from './component/container-right5';
import {Footer} from './component/footer'


function App() {
  return (
    <div className="body">
      <div className="header">
        <Header />

      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="container">
        <div className='container-left'>
          <div >
            <input className='input' type="text" placeholder='Search' />
          </div>
          <div className='container-left-main'>
            <ContainerLeft1 />
          </div>
          <div className='container-left-center'>
            <ContainerLeft2 />
          </div>
          <div className='container-left-main'>
            <ContainerLeft3 />
          </div>
            <ContainerLeft4/>
        </div>
        <div className='container-right'>
          <div className='author'><strong>About the author</strong></div>
          <div className='container-right-1 '>
            <ContainerRight1 />
          </div>
          <ContainerRight2 />
          <div className='categories'>
            <ContainerRight3 />
          </div>
          <div >
            <ContainerRight4 />
          </div>
          <ContainerRight5 />
        </div>
      </div>
      <div className="widget-footer">
        <h2 style={{textAlign: 'center'}}>Follow our @instagram_name</h2>
        <WidgetFooter/>

      </div>
      <div className="footer">
        <div className='top-footer'>
        <h1>FASHION</h1>
        
        </div>
        <Footer/>
      </div>
      <div style={{width: '100vw', height: '1px', backgroundColor: '#E5E5E5', margin: '50px 0'}}></div>
      <h2 style={{color: '#666666', textAlign: 'center', margin: '50px auto'}}>@2019 Logwork. All Right Reserved.</h2>
    </div>
  );
}

export default App;
