import { useState } from 'react'
import { products } from './data/products'
import './App.css'

const categoryNames = ['All products', 'Trousers', 'Watches', 'Shoes', 'T-shirts', 'Fashion', 'Beauty', 'Cosmetics', 'Home accessories']

function Logo() {
  return <a className="logo" href="#top" aria-label="ShopEase home"><span className="logo-mark">S</span><span>ShopEase</span></a>
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All products')
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)

  const visibleProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All products' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="storefront">
      <header className="navbar">
        <Logo />
        <nav aria-label="Main navigation"><a href="#top">Home</a><a href="#products">Products</a><a href="#categories">Categories</a><a href="#footer">About</a></nav>
        <button className="cart-button" type="button" onClick={() => setCartCount(0)} aria-label="Clear cart">Cart <span>{cartCount}</span></button>
      </header>

      <main id="top">
        <section className="hero"><div className="hero-content"><p className="eyebrow">The new everyday edit</p><h1>Good things belong in your everyday.</h1><p>Discover considered fashion, beauty, and home essentials chosen to make daily life feel a little better.</p><a className="shop-button" href="#products">Shop the collection</a></div><div className="hero-art" aria-hidden="true"><div className="hero-logo"><span>S</span></div><strong>EST. 2026 / INDIA</strong></div></section>

        <section className="categories" id="categories"><div className="section-heading"><div><p className="eyebrow">Browse the edit</p><h2>Find your next favourite.</h2></div><p className="section-note">Thoughtful picks across every part of your day.</p></div><div className="category-grid">{categoryNames.slice(1).map((category) => <button className={selectedCategory === category ? 'category-link active' : 'category-link'} type="button" onClick={() => { setSelectedCategory(category); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }} key={category}>{category}<span>↗</span></button>)}</div></section>

        <section className="products" id="products"><div className="section-heading products-heading"><div><p className="eyebrow">The full collection</p><h2>Made for real life.</h2></div><label className="search-box"><span>⌕</span><input type="search" placeholder="Search products" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} /></label></div><div className="filter-row"><div className="filter-tabs">{categoryNames.map((category) => <button className={selectedCategory === category ? 'filter-tab active' : 'filter-tab'} type="button" onClick={() => setSelectedCategory(category)} key={category}>{category}</button>)}</div><p className="result-count">{visibleProducts.length} pieces</p></div>{visibleProducts.length === 0 && <p className="status">No products match that search.</p>}<div className="product-grid">{visibleProducts.map((product) => <article className="product-card" key={product.id}><div className="product-image" style={{ backgroundColor: product.color }}>{product.emoji}</div><div className="product-details"><p className="product-category">{product.category}</p><h3>{product.name}</h3><p className="price">₹{product.price.toLocaleString('en-IN')}</p></div><button className="add-button" type="button" onClick={() => setCartCount((count) => count + 1)}>Add to cart <span>+</span></button></article>)}</div></section>
      </main>
      <footer id="footer"><Logo /><span>Thoughtful goods for daily life.</span><span>© 2026 ShopEase</span></footer>
    </div>
  )
}

export default App
