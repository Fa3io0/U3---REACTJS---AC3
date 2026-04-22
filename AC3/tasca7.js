renderApp();

function renderApp() {
  const app = document.getElementById('app');

  const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
  }, {
    id: 1,
    name: 'Cheese',
    count: 5,
  }, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  }];

  function ShoppingCart() {
    const [products, setProducts] = React.useState(initialProducts)

    function handleIncreaseClick(productId) {
      setProducts(products.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1
          };
        } else {
          return product;
        }
      }))
    }

    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            {' '}
            (<b>{product.count}</b>)
            <button onClick={(e) => {
              handleIncreaseClick(product.id);
            }}>
              +
            </button>
          </li>
        ))}
      </ul>
    );
  }
  const root = ReactDOM.createRoot(app);
  root.render(<ShoppingCart />);
}