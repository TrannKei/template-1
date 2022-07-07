

function ContainerRight3(){
    const item = [
        {tag : 'Fashion', num: '(23)'},
        {tag : 'Style & Clothes', num: '(7)'},
        {tag : 'Milimalism', num: '(16)'},
        {tag : 'Black & White', num: '(5)'},
        {tag : 'Modern clothes', num: '(12)'}
    ]
    return(
        <>
        <div className='author margin-top-70px' ><strong>Categories</strong></div>
        {item.map((item)=> {
            return(
                <div className="category">
                    <p>{item.tag}</p>
                    <p>{item.num}</p>
                </div>
            )
        })}
        </>
    )
}
export default ContainerRight3;