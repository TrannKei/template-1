 function Header() {
    const headerItem =["Home", "Recipes", "Acticle", "Contact", "Purchase"]

    return (
        <>
            <div className="header-title">
                <h1>FASHION</h1>
            </div>
            <div className="header-item">
            {headerItem.map((item) =>
                <p>{item}</p>
            )}
            </div>

        </>
    )
}

export default Header;