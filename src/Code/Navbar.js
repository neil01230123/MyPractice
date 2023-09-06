const Nav = ()=>{
    return(
        <nav className="navbar navbar-light navbar-expand-md">
            <div className="container-fluid">
                <a href="#" className="navbar-brand"></a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#Nav"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="Nav">
                    <ul className="navbar-nav me-auto">
                        <li className="navbar-item" active><a className="nav-link" href="#">肉肉介紹</a></li>
                        <li className="navbar-item" ><a className="nav-link" href="#">購買肉肉區</a></li>
                    </ul>
                    <form className="d-flex mt-2">
                        <input className="form-control me-2" type="search" placeholder="搜尋"/>
                        <button className="btn btn-outline-success me-2" type="submit">Search</button>
                    </form>
                    <button className="btn btn-outline-success me-2 mt-2" >登入</button>
                    <button className="btn btn-outline-success mt-2" ><a className="nav-link" href="#">購物車</a></button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;

