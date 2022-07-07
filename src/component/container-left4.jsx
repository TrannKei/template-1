import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'


export const ContainerLeft4 = () =>{
    return (
        <>
        <div className="page-bar">
            <div className='flex-row'>
            <MdOutlineKeyboardArrowLeft/>
            <p>OLDER POST</p>
            </div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>8</p>
            <div className='flex-row'>
            <p>NEXT POST</p>
            <MdOutlineKeyboardArrowRight/>
            </div>

        </div>
        
        </>
    )
}