function ContainerRight5(){
    const item = ['Business', 'Freelance', 'Money', 'Experience', 'Lifestyle', 'SEO', 'Wordpress', 'Marketing', 'UX', 'Modern', 'Success', 'Nature' ]

return(
    <>
    <div className='author margin-top-70px'><strong>Tag</strong></div>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {item.map((item)=> {
        return(
            <p className="tag-name">{item}</p>
        )
    })}
    </div>
    
    </>
)
}
export default ContainerRight5;