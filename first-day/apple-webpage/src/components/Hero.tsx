import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  textColor?: string; // Hex color code: '#1d1d1f' or '#f5f5f7'
  primaryCtaText?: string;
  secondaryCtaText?: string;
  isPillButtons?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  textColor = '#1d1d1f',
  primaryCtaText,
  secondaryCtaText,
  isPillButtons = false,
}) => {
  return (
    <section
      style={{
        width: '100%',
        height: '650px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '60px',
        boxSizing: 'border-box',
        color: textColor,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <div style={{ maxWidth: '600px', width: '100%', padding: '0 20px' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 600, letterSpacing: '-0.003em', margin: 0, padding: 0 }}>
          {title}
        </h2>
        <p style={{ fontSize: '24px', fontWeight: 400, margin: '6px 0 0 0', opacity: 0.95 }}>
          {subtitle}
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '18px' }}>
          {isPillButtons ? (
            <>
              {primaryCtaText && (
                <a href="#" style={{ padding: '8px 20px', backgroundColor: '#0071e3', color: '#ffffff', fontSize: '15px', borderRadius: '9999px', textDecoration: 'none' }}>
                  {primaryCtaText}
                </a>
              )}
              {secondaryCtaText && (
                <a href="#" style={{ padding: '8px 20px', backgroundColor: 'transparent', border: '1px solid #0071e3', color: '#0071e3', fontSize: '15px', borderRadius: '9999px', textDecoration: 'none' }}>
                  {secondaryCtaText}
                </a>
              )}
            </>
          ) : (
            <>
              {primaryCtaText && (
                <a href="#" style={{ color: '#0066cc', fontSize: '19px', textDecoration: 'none' }}>
                  {primaryCtaText} <span style={{ fontSize: '14px' }}>&gt;</span>
                </a>
              )}
              {secondaryCtaText && (
                <a href="#" style={{ color: '#0066cc', fontSize: '19px', textDecoration: 'none', marginLeft: '12px' }}>
                  {secondaryCtaText} <span style={{ fontSize: '14px' }}>&gt;</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};