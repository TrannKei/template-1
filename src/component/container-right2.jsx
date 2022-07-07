import img1 from '../../src/img/item2-img2.png'
import img2 from '../../src/img/item2-img3.png'
import img3 from '../../src/img/item2-img4.png'

function ContainerRight2() {
    const img = [
        { src: img1, tag: 'JEANS', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img2, tag: 'CITY', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img3, tag: 'PHOTOGRAPHY', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
    ]
    return (
        <>
             <div className='author margin-top-70px'><strong>Featured posts</strong></div>
            {img.map((item) => {
                return (
                    <div className='container-right-1'>
                    <div className='right1'>

                        <img className='img-item' src={item.src} />
                        <div className='title-2'>
                            <h3 className="tag">{item.tag}</h3>
                            <h2 className="">{item.title}</h2>
                            <p className='color-gray'>{item.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>by</span>&nbsp;{item.by}</p>
                        </div>

                    </div>
            </div>
                )
            }

            )}
        </>
    )
}


export default ContainerRight2;