import React from 'react';
import { Hero } from './components/Hero';
import { PromoCard } from './components/PromoCard';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh', backgroundColor: '#f5f5f7', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      
      {/* Translucent Navigation Header */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '48px', backgroundColor: 'rgba(29, 29, 31, 0.92)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22%', boxSizing: 'border-box', color: 'rgba(245, 245, 247, 0.8)', fontSize: '12px', fontFamily: '-apple-system, sans-serif' }}>
        <span style={{ fontSize: '16px', color: '#fff', cursor: 'pointer' }}></span>
        <div className="hidden md:flex" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px', padding: '0 20px' }}>
          {['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'Support'].map((link) => (
            <a key={link} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{link}</a>
          ))}
        </div>
        <span style={{ cursor: 'pointer' }}>Search</span>
      </nav>

      {/* Main Structural Column Stack */}
      <main style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '48px', width: '100%', boxSizing: 'border-box' }}>
        
        {/* Full-width Product Showcases */}
        <Hero 
          title="iPhone"
          subtitle="Meet the latest iPhone lineup."
          backgroundImage="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1600"
          textColor="#1d1d1f"
          primaryCtaText="Learn more"
          secondaryCtaText="Shop iPhone"
          isPillButtons={true}
        />

        <Hero 
          title="MacBook Neo"
          subtitle="Amazing Mac. Surprising price."
          backgroundImage="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600"
          textColor="#1d1d1f"
          primaryCtaText="Learn more"
          secondaryCtaText="Buy"
          isPillButtons={true}
        />

        {/* 2-Column Promo Grid Module */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', 
            gap: '12px', 
            width: '100%', 
            boxSizing: 'border-box',
            padding: window.innerWidth < 768 ? '0' : '0 12px' 
          }}
        >
          <PromoCard 
            title="Apple Card"
            subtitle="Special new Apple Card and AirPods Pro 3 offer."
            subnote="Limitations and spend requirements apply."
            backgroundImage="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800"
            textColor="#1d1d1f"
            primaryCtaText="Learn more"
            isPillButtons={true}
          />

          <PromoCard 
            title="WWDC 26"
            subtitle="Apple Worldwide Developers Conference. Join us online June 8–12."
            backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
            textColor="#f5f5f7"
            primaryCtaText="Learn more"
            isPillButtons={true}
          />

          <PromoCard 
            title="Apple for College"
            subtitle="Mac and iPad. Major in any field."
            backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
            textColor="#1d1d1f"
            primaryCtaText="Learn more"
            isPillButtons={true}
          />

          <PromoCard 
            title="iPad Air"
            subtitle="Now supercharged by M4."
            backgroundImage="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
            textColor="#1d1d1f"
            primaryCtaText="Learn more"
            secondaryCtaText="Buy"
            isPillButtons={true}
          />

          <PromoCard 
            title="Apple Watch Series 11"
            subtitle="The ultimate way to watch your health."
            backgroundImage="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=800"
            textColor="#1d1d1f"
            primaryCtaText="Learn more"
            secondaryCtaText="Buy"
            isPillButtons={true}
          />

          <PromoCard 
            title="MacBook Pro"
            subtitle="Now with M5, M5 Pro, and M5 Max."
            backgroundImage="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800"
            textColor="#f5f5f7"
            primaryCtaText="Learn more"
            secondaryCtaText="Buy"
            isPillButtons={true}
          />
        </div>

        {/* Bottom Full-width Trade-In layout Block */}
        <div style={{ width: '100%', boxSizing: 'border-box', padding: window.innerWidth < 768 ? '0' : '0 12px 12px 12px' }}>
          <PromoCard 
            title="Apple Trade In"
            subtitle="Get up to $195–$685 in credit when you trade in iPhone 13 or higher."
            backgroundImage="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=1600"
            textColor="#1d1d1f"
            primaryCtaText="Get your estimate"
            isPillButtons={true}
          />
        </div>

      </main>

      {/* Sitemaps Legal Disclaimer Footer Column */}
      <footer style={{ backgroundColor: '#f5f5f7', color: '#86868b', fontSize: '11px', lineHeight: '1.5', padding: '32px 22%', borderTop: '1px solid #d2d2d7', fontFamily: '-apple-system, sans-serif' }}>
        <p style={{ margin: 0, paddingBottom: '16px', borderBottom: '1px solid #d2d2d7', fontWeight: 300 }}>
          1. Special new Apple Card and AirPods Pro 3 offer valid through June 15, 2026. Subject to credit approval. <br />
          2. Trade‑in pricing evaluation variables change dynamically based directly on physical quality verification checks.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px', color: '#6e6e73', fontWeight: 300 }}>
          <p style={{ margin: 0 }}>Copyright © 2026 Apple Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal'].map((lnk) => (
              <a key={lnk} href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{lnk}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;