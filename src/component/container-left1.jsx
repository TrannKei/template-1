import img1 from '../../src/img/item1-img1.png'
import img2 from '../../src/img/item1-img2.png'
import img3 from '../../src/img/item1-img3.png'
import img4 from '../../src/img/item1-img4.png'
import img5 from '../../src/img/item1-img5.png'
import img6 from '../../src/img/item1-img6.png'

function ContainerLeft1() {
    const img = [
        { src: img1, tag: 'TOURISM', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img2, tag: 'SPORT', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img3, tag: 'FASHION', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img4, tag: 'CLOTHES', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img5, tag: 'CLOTHES', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img6, tag: 'FASHION', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
    ]
    return (
        <>
            {img.map((item) => {
                return (
                    <div className='container-left1'>

                        <img className='img-item' src={item.src} />
                        <div className='title'>
                            <h3 className="tag">{item.tag}</h3>
                            <h2 className="">{item.title}</h2>
                            <p className='color-gray'>{item.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>by</span>&nbsp;{item.by}</p>
                        </div>

                    </div>
                )
            }

            )}
        </>
    )
}

export default ContainerLeft1;