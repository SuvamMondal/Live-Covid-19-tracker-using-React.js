import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="nav-wrapper blue darken-3 ">
                <div className="container">
                    <Link className='left brand-logo grey-text text-lighten-3' to='/'>🔴 Live Covid19 Tracker</Link>
                <ul className="right blue darken-3" >
                    <li><Link to='/' className='grey-text text-lighten-3'>Home</Link></li>
                    <li><Link to='/statewise' className='grey-text text-lighten-3' >StateWise</Link></li>
                    <li><Link to='/about' className='grey-text text-lighten-3' >About The Project</Link></li>
                </ul>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;