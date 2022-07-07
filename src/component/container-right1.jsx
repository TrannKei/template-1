import img from '../../src/img/item2-img1.png'

function ContainerRight1(){
    return(
        <>
            <div className="right1">
                <img src={img} alt=""  />
                <div className='title'>
                    <h3>Kate Willems</h3>
                    <p className='color-gray'><i>Food & cooking bloger</i></p>
                    <p className='color-gray'>Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…</p>
                </div>
                <div className='tag continue'>CONTINUE READING</div>
            </div>
        </>
    )    
}
export default ContainerRight1;