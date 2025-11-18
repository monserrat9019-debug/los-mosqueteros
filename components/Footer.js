function Footer() {
  try {
    return (
      <footer className="bg-[var(--primary-color)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="icon-book-open text-3xl text-[var(--secondary-color)]"></div>
              <span className="text-2xl font-bold">BookStore</span>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tu destino para descubrir las mejores lecturas. Ofrecemos una amplia selección de libros 
              con ofertas exclusivas y envíos a todo el país. Cultivamos el amor por la lectura.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[var(--secondary-color)]">Redes Sociales</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[var(--secondary-color)] transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-color)] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-color)] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-color)] transition-colors">YouTube</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[var(--secondary-color)]">Productos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[var(--secondary-color)] transition-colors">Libros Nuevos</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-color)] transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-color)] transition-colors">Ofertas</a></li>
                <li><a href="#" className="hover:text-[var(--secondary-color)] transition-colors">Recomendados</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[var(--secondary-color)]">Contacto</h3>
              <ul className="space-y-2">
                <li>Email: info@bookstore.com</li>
                <li>Teléfono: +34 900 123 456</li>
                <li>WhatsApp: +34 600 789 012</li>
                <li>Horario: Lun-Vie 9:00-20:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 BookStore. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}