import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="nav">
        <div className="logo">CA-RS</div>
        <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Explore</li>
            <li className="nav-item">Contact</li>
        </ul>
    </div>
  )
}
export default Navbar