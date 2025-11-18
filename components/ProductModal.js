function ProductModal({ product, onClose, onAddToCart }) {
  try {
    const [currentImage, setCurrentImage] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" data-name="modal" data-file="components/ProductModal.js">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[var(--primary-color)]">{product.title}</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
                <div className="icon-x text-xl"></div>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={product.angles[currentImage]} 
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <div className="flex gap-2">
                  {product.angles.map((angle, index) => (
                    <img
                      key={index}
                      src={angle}
                      alt={`Vista ${index + 1}`}
                      className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                        currentImage === index ? 'border-[var(--secondary-color)]' : 'border-gray-200'
                      }`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">{product.author}</p>
                <p className="text-gray-700">{product.description}</p>
                
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-[var(--secondary-color)]">${product.price} MXN</span>
                  {product.discount && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full">-{product.discount}%</span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold">Color:</span>
                  <div className={`w-8 h-8 rounded-full border-2 border-gray-300`} style={{ backgroundColor: product.color }}></div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-yellow-800">
                    ¡Solo quedan {product.stock} unidades disponibles!
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-semibold">Cantidad:</span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => { onAddToCart(product); onClose(); }}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <div className="icon-shopping-cart text-xl"></div>
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductModal component error:', error);
    return null;
  }
}