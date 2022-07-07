import img1 from '../../src/img/item1-img8.png'
import img2 from '../../src/img/item1-img9.png'
import img3 from '../../src/img/item1-img10.png'
import img4 from '../../src/img/item1-img11.png'


function ContainerLeft3() {
    const img = [
        { src: img1, tag: 'AUTUMN', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img2, tag: 'CLOTHES', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img3, tag: 'SUMMER', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
        { src: img4, tag: 'SUMMER', title: 'One of Saturn’s largest rings may be newer than anyone', date: 'June 16, 2019', by: 'Rickie Baroch' },
      
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
                        <p className='color-gray'>{item.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>by</span> {item.by}</p>
                        </div>

                    </div>
                )
            }

            )}
        </>
    )
}

export default ContainerLeft3;