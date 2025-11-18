function ProductCarousel({ onSelectProduct }) {
  try {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
      <div className="relative max-w-7xl mx-auto px-4 py-16" data-name="carousel" data-file="components/ProductCarousel.js">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--primary-color)]">Productos Destacados</h2>
        
        <div className="relative overflow-hidden rounded-2xl">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {products.map((product, index) => (
              <div key={index} className="min-w-full">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-96 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => onSelectProduct(product)}
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-3xl font-bold text-[var(--primary-color)]">{product.title}</h3>
                    <p className="text-gray-600">{product.author}</p>
                    <p className="text-lg text-gray-700">{product.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-[var(--secondary-color)]">${product.price} MXN</span>
                      {product.discount && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">-{product.discount}%</span>
                      )}
                    </div>
                    <button onClick={() => onSelectProduct(product)} className="btn-primary">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100">
            <div className="icon-chevron-left text-xl"></div>
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100">
            <div className="icon-chevron-right text-xl"></div>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-[var(--secondary-color)] w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductCarousel component error:', error);
    return null;
  }
}