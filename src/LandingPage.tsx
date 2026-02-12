import { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  ArrowLeft,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import './LandingPage.css';

// --- Data ---
const PRODUCTS = [
  {
    id: 1,
    name: 'Nordic Oak Chair',
    price: 'From €359',
    category: 'Dining Chair',
    image: 'https://images.unsplash.com/photo-1764836168197-3aa3a890a0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 2,
    name: 'Curved Ash Chair',
    price: 'From €439',
    category: 'Dining Chair',
    image: 'https://images.unsplash.com/photo-1764069414793-c255766e3e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 3,
    name: 'Solid Walnut Table',
    price: 'From €1,899',
    category: 'Dining Table',
    image: 'https://images.unsplash.com/photo-1693391399801-c20ffcb149c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  },
  {
    id: 4,
    name: 'Lounge Chair 01',
    price: 'From €6,599',
    category: 'Lounge Chair',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
  }
];

const ROOMS = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { name: 'Home Office', image: 'https://images.unsplash.com/photo-1529338215083-dfbce6338219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { name: 'Hallway', image: 'https://images.unsplash.com/photo-1753613609260-19a2bce74dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  { name: 'Outdoor', image: 'https://images.unsplash.com/photo-1711098256574-7b497260cdc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
];

const STORIES = [
  {
    title: 'THE ART OF CARPENTRY: STUDIO VISIT',
    image: 'https://images.unsplash.com/photo-1463974843765-758fc8221851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
  },
  {
    title: 'SUSTAINABLE LIVING: A FOREST TALE',
    image: 'https://images.unsplash.com/photo-1653581494409-270dfea9f0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
  },
  {
    title: "ARCHITECT'S RETREAT IN KYOTO",
    image: 'https://images.unsplash.com/photo-1617788587804-10346bac2ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
  },
  {
    title: 'MORNING LIGHT & NATURAL WOOD',
    image: 'https://images.unsplash.com/photo-1710883734889-5a0b8ab6bfcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
  },
];

// --- Components ---

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <span className="top-bar-title">Show in Korean</span>
        
        <div className="top-bar-controls">
          <div className="select-wrapper">
            <select>
              <option>Korea</option>
              <option>USA</option>
              <option>Japan</option>
            </select>
            <ChevronDown size={14} style={{ position: 'absolute', right: 0, top: 12, pointerEvents: 'none' }} />
          </div>
          
          <div className="select-wrapper">
            <select>
              <option>Korean</option>
              <option>English</option>
            </select>
            <ChevronDown size={14} style={{ position: 'absolute', right: 0, top: 12, pointerEvents: 'none' }} />
          </div>
          
          <button className="btn btn-primary">Confirm</button>
        </div>
        
        <p className="top-bar-info">
          Please note that we do not ship directly to private customers online. Orders are handled with your local store.
        </p>
      </div>
      
      <button className="top-bar-close" onClick={() => setIsVisible(false)} aria-label="Close">
        <X size={18} />
      </button>
    </div>
  );
};

const Header = () => (
  <header className="main-header">
    <div className="container header-inner">
      <nav className="nav-links">
        <a href="#">Furniture</a>
        <a href="#">Lighting</a>
        <a href="#">Accessories</a>
        <a href="#">Spare Parts</a>
        <a href="#">Inspiration</a>
      </nav>
      
      <div className="header-logo" style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif', letterSpacing: '2px'}}>
        BASE WOOD
      </div>
      
      <div className="header-actions">
        <button aria-label="Search"><Search color="white" size={20} /></button>
        <button aria-label="Cart"><ShoppingBag color="white" size={20} /></button>
        <button aria-label="Menu" className="mobile-menu-btn"><Menu color="white" size={20} /></button>
      </div>
    </div>
  </header>
);

const LandingPage = () => {
  return (
    <div className="landing-page">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1764445274425-f6bcdd84bbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000" 
          alt="Modern Interior" 
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">PURE FORM</h1>
            <p className="hero-text">
              Embrace the warmth of nature. BASE WOOD defines a new standard of living 
              where minimalist design meets the honest texture of solid wood, 
              creating spaces of serenity and enduring beauty.
            </p>
            <button className="btn btn-white">
              Discover <ArrowRight size={16} style={{marginLeft: 8}} />
            </button>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="intro-section container">
        <p className="intro-text">
          BASE WOOD is founded on a deep respect for nature and craftsmanship. 
          We believe in the power of natural materials to transform spaces, 
          creating furniture that is not just functional, but a celebration 
          of the unique character found in every grain of wood.
        </p>
      </section>

      {/* 3-Column Grid */}
      <section className="container">
        <div className="grid-gallery">
          <div className="grid-item">
            <img src="https://images.unsplash.com/photo-1759264244741-7175af0b7e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Luxury Lamp" />
          </div>
          <div className="grid-item">
            <img src="https://images.unsplash.com/photo-1713972258767-d745110a1f3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Marble Table" />
          </div>
          <div className="grid-item">
            <img src="https://images.unsplash.com/photo-1612022565287-136b9c669781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" alt="Chair Detail" />
          </div>
        </div>
        
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <a href="#" className="btn btn-text">
            EXPLORE COLLECTION <ArrowRight size={14} style={{ marginLeft: 4, display: 'inline' }} />
          </a>
        </div>
      </section>

      {/* Explore Products */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-md uppercase">Explore Products</h2>
            <div className="carousel-controls">
              <button><ArrowLeft size={24} /></button>
              <button><ArrowRight size={24} /></button>
            </div>
          </div>
          
          <div className="product-list">
            {PRODUCTS.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="text-caption">{product.category}</span>
                  <h4>{product.name}</h4>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Split: The Oak Collection */}
      <section className="container feature-split">
        <div className="feature-images">
          <img 
            src="https://images.unsplash.com/photo-1736796312077-93f248c96a96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000" 
            alt="Craftsmanship" 
            className="feature-img-1"
          />
        </div>
        <div className="feature-content">
          <h2 className="heading-md uppercase">The Oak Collection</h2>
          <p className="text-body" style={{marginBottom: '2rem'}}>
            Celebrated for its durability and beautiful grain, our sustainable oak collection 
            brings the outdoors in. Designed to age gracefully, these pieces become the heart of your home.
          </p>
          <p className="text-body" style={{marginBottom: '2rem'}}>
            Experience the warmth of<br/>hand-finished solid wood.
          </p>
          <a href="#" className="btn btn-text">
            VIEW COLLECTION <ArrowRight size={14} style={{ marginLeft: 4, display: 'inline' }} />
          </a>
        </div>
      </section>

      {/* Room Categories */}
      <section className="container">
        <div className="room-grid">
          {ROOMS.map(room => (
            <div key={room.name} className="room-item">
              <div className="room-image">
                <img src={room.image} alt={room.name} />
              </div>
              <span className="room-name">{room.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="container section-spacing">
        <div className="section-header">
          <h2 className="heading-md uppercase">Stories From Base Wood</h2>
          <div className="carousel-controls">
            <button><ArrowLeft size={24} /></button>
            <button><ArrowRight size={24} /></button>
          </div>
        </div>
        <p className="text-caption" style={{ marginTop: '-1rem', marginBottom: '2rem' }}>
          INSPIRATION FROM NATURE, CRAFTSMANSHIP JOURNALS, AND <br/> THE ART OF SLOW LIVING.
        </p>
        
        <div className="stories-grid">
          {STORIES.map((story, i) => (
            <div key={i} className="story-card">
              <img src={story.image} alt={story.title} />
              <h3 className="story-title">{story.title}</h3>
              <a href="#" className="btn btn-text text-small">
                READ MORE <ArrowRight size={12} style={{ marginLeft: 4, display: 'inline' }} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h5>Newsletter</h5>
              <form className="newsletter-form">
                <button className="btn btn-outline" style={{borderColor: '#666', color: 'white', fontSize: '10px', padding: '8px 16px'}}>SIGN UP</button>
              </form>
            </div>
            
            <div className="footer-col">
              <h5>Follow Us</h5>
              <div className="social-links">
                <Facebook size={18} />
                <Instagram size={18} />
                <Linkedin size={18} />
                <Youtube size={18} />
              </div>
            </div>
            
            <div className="footer-col">
              <h5>Contact Us</h5>
              <ul className="footer-links text-small" style={{color: '#999'}}>
                <li>+45 48 17 23 00</li>
                <li>hello@basewood.com</li>
                <li>press@basewood.com</li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h5>Store Locator</h5>
              <a href="#" className="text-small" style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <span style={{border: '1px solid #666', borderRadius: '50%', width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>📍</span>
                Find Store
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-grid" style={{marginBottom: 0, rowGap: '1rem'}}>
              <div className="footer-col">
                <h5 style={{marginBottom: '0.5rem'}}>Legal</h5>
                <ul className="footer-links text-caption" style={{textTransform: 'none'}}>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                  <li><a href="#">Fighting Counterfeit</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h5 style={{marginBottom: '0.5rem'}}>Company</h5>
                <ul className="footer-links text-caption" style={{textTransform: 'none'}}>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
              </div>
               <div className="footer-col">
                <h5 style={{marginBottom: '0.5rem'}}>Customer Care</h5>
                <ul className="footer-links text-caption" style={{textTransform: 'none'}}>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Product Warranty</a></li>
                  <li><a href="#">Care & Maintenance</a></li>
                </ul>
              </div>
            </div>
            <div style={{marginTop: '4rem', letterSpacing: '2px', fontSize: '1.5rem'}}>
              BASE WOOD
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;