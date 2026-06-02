import React from 'react';

interface PromoCardProps {
  title: string;
  subtitle: string;
  subnote?: string;
  backgroundImage: string;
  textColor?: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
  isPillButtons?: boolean; // Added control parameter
}

export const PromoCard: React.FC<PromoCardProps> = ({
  title,
  subtitle,
  subnote,
  backgroundImage,
  textColor = '#1d1d1f',
  primaryCtaText,
  secondaryCtaText,
  isPillButtons = true, // Default to true for uniform layout styling
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '55px',
        boxSizing: 'border-box',
        color: textColor,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <div style={{ maxWidth: '440px', width: '100%', padding: '0 15px' }}>
        <h3 style={{ fontSize: '36px', fontWeight: 600, letterSpacing: '-0.002em', margin: 0 }}>
          {title}
        </h3>
        <p style={{ fontSize: '18px', fontWeight: 400, margin: '8px 0 0 0', opacity: 0.9 }}>
          {subtitle}
        </p>
        {subnote && (
          <p style={{ fontSize: '12px', color: '#86868b', margin: '4px 0 0 0' }}>
            {subnote}
          </p>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '18px' }}>
          {isPillButtons ? (
            <>
              <a 
                href="#" 
                className="transition-colors duration-150"
                style={{ 
                  padding: '8px 18px', 
                  backgroundColor: '#0071e3', 
                  color: '#ffffff', 
                  fontSize: '14px', 
                  borderRadius: '9999px', 
                  textDecoration: 'none',
                  fontWeight: 400
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0077ed')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0071e3')}
              >
                {primaryCtaText}
              </a>
              {secondaryCtaText && (
                <a 
                  href="#" 
                  className="transition-all duration-150"
                  style={{ 
                    padding: '8px 18px', 
                    backgroundColor: 'transparent', 
                    border: '1px solid #0071e3', 
                    color: '#0071e3', 
                    fontSize: '14px', 
                    borderRadius: '9999px', 
                    textDecoration: 'none',
                    fontWeight: 400
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0071e3';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#0071e3';
                  }}
                >
                  {secondaryCtaText}
                </a>
              )}
            </>
          ) : (
            <>
              <a href="#" style={{ color: '#0066cc', fontSize: '16px', textDecoration: 'none' }}>
                {primaryCtaText} <span style={{ fontSize: '12px' }}>&gt;</span>
              </a>
              {secondaryCtaText && (
                <a href="#" style={{ color: '#0066cc', fontSize: '16px', textDecoration: 'none' }}>
                  {secondaryCtaText} <span style={{ fontSize: '12px' }}>&gt;</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};