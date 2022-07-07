import img1 from '../../src/img/item3-img1.png'
import img2 from '../../src/img/item3-img2.png'
import img3 from '../../src/img/item3-img3.png'
import img4 from '../../src/img/item3-img4.png'
import img5 from '../../src/img/item3-img5.png'
import img6 from '../../src/img/item3-img6.png'

export const WidgetFooter = () =>{
    const img = [img1, img2, img3, img4, img5, img6]
           
    return(
        <div className='widget'>
        {img.map((el)=>{
            return(
                <img src={el}/>
            )
        })}
        </div>
    )
}