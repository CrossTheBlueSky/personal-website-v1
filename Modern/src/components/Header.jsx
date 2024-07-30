
function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Derek Mercedes</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-200">About</a></li>
            <li><a href="#projects" className="hover:text-blue-200">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-200">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;