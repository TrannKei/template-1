import banner from '../../src/img/banner.png'


function Banner (){

    return(
        <>
            <img src={banner} className="banner-img"/>
            <div className='banner-content'>
                <p>VEHECLE</p>
                <h1 className='banner-title'>One of Saturn’s largest rings may be newer than anyone</h1>
                <p>June 6, 2019&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>By</span> Rickie Baroch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 comments</p>
            </div>
        </>
    )
}
export default Banner;