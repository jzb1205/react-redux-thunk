
import logo from "./../assert/img/logo.svg"

const Header = ()=>{
    return (
        <div className={'main-header main-header unauthorized visible'}>
            <div className="container">
                <a href="/" className='logo'>
                    <img src={logo} alt="" />
                </a>
                <nav className='main-nav'>
                    <ul className='nav-list'>
                        <li className='main-nav-list'></li>
                        <li className='nav-item search'></li>
                        <li className='nav-item add'></li>
                        <li className='nav-item auth'></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header