import {FaFacebookF, FaPinterestP, FaVimeoV, FaSpotify, FaTwitter, FaSnapchatGhost, FaInstagram, FaYoutube, FaGooglePlusG} from "react-icons/fa"

function ContainerRight4(){
    const item = [
        {icon: <FaFacebookF/>, num: '32k', sub: 'likes'},
        {icon: <FaPinterestP/>, num: '900', sub: 'followers'},
        {icon: <FaVimeoV/>, num: '156', sub: 'followers'},
        {icon: <FaSpotify/>, num: '6000', sub: 'followers'},
        {icon: <FaTwitter/>, num: '130k', sub: 'followers'},
        {icon: <FaSnapchatGhost/>, num: '37k', sub: 'followers'},
        {icon: <FaInstagram/>, num: '854k', sub: 'followers'},
        {icon: <FaYoutube/>, num: '52k', sub: 'sub'},
        {icon: <FaGooglePlusG/>, num: '642', sub: 'followers'}
    ]

    return(
        <>
        <div className='author margin-top-70px'><strong>Social media</strong></div>
        <div className="social">
        {item.map((item)=>{
            return(
            <div className="social-item">
                <p style={{color: '#5A5A5A'}}>{item.icon}</p>
                <p style={{color: '#999999'}}>{item.num}</p>
                <p style={{color: '#999999'}}>{item.sub}</p>
            </div>
            )
        })}
        </div>

        </>
    )
}
export default ContainerRight4;