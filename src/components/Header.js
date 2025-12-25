const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
      ></img>
    </a>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
