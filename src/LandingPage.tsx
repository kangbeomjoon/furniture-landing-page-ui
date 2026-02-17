import { useState, useEffect } from 'react';
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
import { Language, createTranslator } from './translations';
import './LandingPage.css';

// --- Data factories ---
function getProducts(t: (key: string) => string) {
  return [
    {
      id: 1,
      name: t('product.1.name'),
      price: t('product.1.price'),
      category: t('product.1.category'),
      image: 'https://images.unsplash.com/photo-1764836168197-3aa3a890a0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
      id: 2,
      name: t('product.2.name'),
      price: t('product.2.price'),
      category: t('product.2.category'),
      image: 'https://images.unsplash.com/photo-1764069414793-c255766e3e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
      id: 3,
      name: t('product.3.name'),
      price: t('product.3.price'),
      category: t('product.3.category'),
      image: 'https://images.unsplash.com/photo-1693391399801-c20ffcb149c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    {
      id: 4,
      name: t('product.4.name'),
      price: t('product.4.price'),
      category: t('product.4.category'),
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    }
  ];
}

function getRooms(t: (key: string) => string) {
  return [
    { name: t('room.livingRoom'), image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
    { name: t('room.diningRoom'), image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
    { name: t('room.homeOffice'), image: 'https://images.unsplash.com/photo-1529338215083-dfbce6338219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
    { name: t('room.hallway'), image: 'https://images.unsplash.com/photo-1753613609260-19a2bce74dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
    { name: t('room.outdoor'), image: 'https://images.unsplash.com/photo-1711098256574-7b497260cdc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600' },
  ];
}

function getStories(t: (key: string) => string) {
  return [
    {
      title: t('story.1.title'),
      image: 'https://images.unsplash.com/photo-1463974843765-758fc8221851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: t('story.2.title'),
      image: 'https://images.unsplash.com/photo-1653581494409-270dfea9f0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: t('story.3.title'),
      image: 'https://images.unsplash.com/photo-1617788587804-10346bac2ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: t('story.4.title'),
      image: 'https://images.unsplash.com/photo-1710883734889-5a0b8ab6bfcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
  ];
}

// --- Components ---

const TopBar = ({ language, setLanguage, t }: {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="top-bar">
      <div className="container top-bar-content">
        <span className="top-bar-title">{t('topBar.title')}</span>

        <div className="top-bar-controls">
          <div className="select-wrapper">
            <select
              value={language === 'ko' ? 'Korean' : 'English'}
              onChange={(e) => setLanguage(e.target.value === 'Korean' ? 'ko' : 'en')}
            >
              <option>Korean</option>
              <option>English</option>
            </select>
            <ChevronDown size={14} style={{ position: 'absolute', right: 0, top: 12, pointerEvents: 'none' }} />
          </div>

          <button className="btn btn-primary">{t('topBar.confirm')}</button>
        </div>

        <p className="top-bar-info">
          {t('topBar.shippingNotice')}
        </p>
      </div>

      <button className="top-bar-close" onClick={() => setIsVisible(false)} aria-label="Close">
        <X size={18} />
      </button>
    </div>
  );
};

const Header = ({ t }: { t: (key: string) => string }) => (
  <header className="main-header">
    <div className="container header-inner">
      <nav className="nav-links">
        <a href="#">{t('nav.furniture')}</a>
        <a href="#">{t('nav.lighting')}</a>
        <a href="#">{t('nav.accessories')}</a>
        <a href="#">{t('nav.spareParts')}</a>
        <a href="#">{t('nav.inspiration')}</a>
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
  const [language, setLanguage] = useState<Language>('en');
  const t = createTranslator(language);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const products = getProducts(t);
  const rooms = getRooms(t);
  const stories = getStories(t);

  return (
    <div className="landing-page">
      <TopBar language={language} setLanguage={setLanguage} t={t} />
      <Header t={t} />

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1764445274425-f6bcdd84bbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
          alt="Modern Interior"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-text">
              {t('hero.description')}
            </p>
            <button className="btn btn-white">
              {t('hero.cta')} <ArrowRight size={16} style={{marginLeft: 8}} />
            </button>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="intro-section container">
        <p className="intro-text">
          {t('intro.text')}
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
            {t('grid.cta')} <ArrowRight size={14} style={{ marginLeft: 4, display: 'inline' }} />
          </a>
        </div>
      </section>

      {/* Explore Products */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-md uppercase">{t('products.heading')}</h2>
            <div className="carousel-controls">
              <button><ArrowLeft size={24} /></button>
              <button><ArrowRight size={24} /></button>
            </div>
          </div>

          <div className="product-list">
            {products.map(product => (
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
          <h2 className="heading-md uppercase">{t('feature.heading')}</h2>
          <p className="text-body" style={{marginBottom: '2rem'}}>
            {t('feature.description1')}
          </p>
          <p className="text-body" style={{marginBottom: '2rem'}}>
            {t('feature.description2')}
          </p>
          <a href="#" className="btn btn-text">
            {t('feature.cta')} <ArrowRight size={14} style={{ marginLeft: 4, display: 'inline' }} />
          </a>
        </div>
      </section>

      {/* Room Categories */}
      <section className="container">
        <div className="room-grid">
          {rooms.map(room => (
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
          <h2 className="heading-md uppercase">{t('stories.heading')}</h2>
          <div className="carousel-controls">
            <button><ArrowLeft size={24} /></button>
            <button><ArrowRight size={24} /></button>
          </div>
        </div>
        <p className="text-caption" style={{ marginTop: '-1rem', marginBottom: '2rem' }}>
          {t('stories.subtitle')}
        </p>

        <div className="stories-grid">
          {stories.map((story, i) => (
            <div key={i} className="story-card">
              <img src={story.image} alt={story.title} />
              <h3 className="story-title">{story.title}</h3>
              <a href="#" className="btn btn-text text-small">
                {t('stories.readMore')} <ArrowRight size={12} style={{ marginLeft: 4, display: 'inline' }} />
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
              <h5>{t('footer.newsletter')}</h5>
              <form className="newsletter-form">
                <button className="btn btn-outline" style={{borderColor: '#666', color: 'white', fontSize: '10px', padding: '8px 16px'}}>{t('footer.signUp')}</button>
              </form>
            </div>

            <div className="footer-col">
              <h5>{t('footer.followUs')}</h5>
              <div className="social-links">
                <Facebook size={18} />
                <Instagram size={18} />
                <Linkedin size={18} />
                <Youtube size={18} />
              </div>
            </div>

            <div className="footer-col">
              <h5>{t('footer.contactUs')}</h5>
              <ul className="footer-links text-small" style={{color: '#999'}}>
                <li>+45 48 17 23 00</li>
                <li>hello@basewood.com</li>
                <li>press@basewood.com</li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>{t('footer.storeLocator')}</h5>
              <a href="#" className="text-small" style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <span style={{border: '1px solid #666', borderRadius: '50%', width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>📍</span>
                {t('footer.findStore')}
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-grid" style={{marginBottom: 0, rowGap: '1rem'}}>
              <div className="footer-col">
                <h5 style={{marginBottom: '0.5rem'}}>{t('footer.legal')}</h5>
                <ul className="footer-links text-caption" style={{textTransform: 'none'}}>
                  <li><a href="#">{t('footer.privacyPolicy')}</a></li>
                  <li><a href="#">{t('footer.cookiePolicy')}</a></li>
                  <li><a href="#">{t('footer.fightingCounterfeit')}</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h5 style={{marginBottom: '0.5rem'}}>{t('footer.company')}</h5>
                <ul className="footer-links text-caption" style={{textTransform: 'none'}}>
                  <li><a href="#">{t('footer.ourStory')}</a></li>
                  <li><a href="#">{t('footer.career')}</a></li>
                  <li><a href="#">{t('footer.press')}</a></li>
                </ul>
              </div>
               <div className="footer-col">
                <h5 style={{marginBottom: '0.5rem'}}>{t('footer.customerCare')}</h5>
                <ul className="footer-links text-caption" style={{textTransform: 'none'}}>
                  <li><a href="#">{t('footer.faq')}</a></li>
                  <li><a href="#">{t('footer.productWarranty')}</a></li>
                  <li><a href="#">{t('footer.careMaintenance')}</a></li>
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
