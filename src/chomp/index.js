import NavBar from "./nav-bar";

function Chomp({ children, activeLink }) {
  return (
    <>
      <NavBar activeLink={activeLink} />
      <div className="container">{children}</div>
    </>
  );
}

export default Chomp;
