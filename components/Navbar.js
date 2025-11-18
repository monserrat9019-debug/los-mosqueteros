function Navbar({ cartCount }) {
  try {
    const [searchOpen, setSearchOpen] = React.useState(false);

    return (
      <nav className="bg-white shadow-md sticky top-0 z-50" data-name="navbar" data-file="components/Navbar.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="icon-book-open text-2xl text-[var(--secondary-color)]"></div>
                <span className="text-2xl font-bold text-[var(--primary-color)]">BookStore</span>
              </div>
              
              <div className="hidden md:flex space-x-6">
                <a href="#inicio" className="nav-link">Inicio</a>
                <a href="#nuevo" className="nav-link">Nuevo</a>
                <a href="#proximos" className="nav-link">Próximos</a>
                <a href="#disponibilidad" className="nav-link">Disponibilidad</a>
                <a href="#ofertas" className="nav-link">Ofertas</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
                <div className="icon-search text-xl text-gray-700"></div>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <div className="icon-help-circle text-xl text-gray-700"></div>
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <div className="icon-shopping-cart text-xl text-gray-700"></div>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--secondary-color)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="pb-4">
              <input
                type="text"
                placeholder="Buscar libros..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
              />
            </div>
          )}
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return null;
  }
}