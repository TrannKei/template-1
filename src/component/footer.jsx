import {FaFacebookF, FaPinterestP, FaVimeoV, FaSpotify, FaTwitter, FaSnapchatGhost, FaInstagram, FaYoutube, FaGooglePlusG} from "react-icons/fa"

export const Footer = ()=>{
    const hashTag = ['Home', 'Recipes', 'Article', 'Contact', 'Purchase']
    const icon = [<FaFacebookF/>, <FaTwitter/>, ,<FaPinterestP/>, <FaGooglePlusG/>, <FaVimeoV/>, <FaInstagram/>]
    return(
        <>
        <div className="flex-row text-center">
        {hashTag.map((el)=>{
            return(
                <p>{el}</p>
            )
        })}
        </div>
        <div className="flex-row text-center2">
        {icon.map((item)=>{
           return(
            <p> {item}</p>
           )
        })}
        </div>
        
        </>
    )
}