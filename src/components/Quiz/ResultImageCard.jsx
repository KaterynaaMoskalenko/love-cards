import React from 'react';

const ResultImageCard = ({ result, descriptions }) => {
  const desc = descriptions[result.primary];
  const secondaryDesc = result.secondary ? descriptions[result.secondary] : null;
  
  // Detect if we need tighter spacing
  const hasSecondary = !!result.secondary;
  const isLongDescription = (desc?.description?.length || 0) > 150;
  const tightSpacing = hasSecondary || isLongDescription;

  return (
    <div
      style={{
        width: '540px', // Half of 1080px for better rendering
        height: '960px', // Half of 1920px for better rendering
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: tightSpacing ? 32 : 40,
        boxSizing: 'border-box',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, #ff5f6d20, #ffc37120)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(45deg, #ffc37120, #ff5f6d20)',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      {/* Header - Brand Logo */}
      <div style={{ textAlign: 'center', zIndex: 2, flexShrink: 0 }}>
        <h1
          style={{
            fontFamily: '"Birthstone", cursive',
            fontSize: '36px',
            fontWeight: 700,
            margin: 0,
            color: '#fff',
            letterSpacing: '1px',
          }}
        >
          two of us
        </h1>
      </div>

      {/* Main Content */}
      <div style={{ 
        textAlign: 'center', 
        zIndex: 2,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: tightSpacing ? '12px' : '16px'
      }}>
        {/* Main Icon */}
        <div
          style={{
            fontSize: '120px',
            marginBottom: tightSpacing ? '12px' : '20px',
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
          }}
        >
          {desc?.icon || '🎉'}
        </div>

        {/* Primary Style */}
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 700,
            margin: `0 0 ${tightSpacing ? '6px' : '10px'} 0`,
            background: 'linear-gradient(135deg, #ff5f6d, #ffc371)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
          }}
        >
          {desc?.label || 'Your Style'}
        </h2>

        {/* Secondary Style (if exists) */}
        {result.secondary && (
          <div
            style={{
              fontSize: '18px',
              color: '#ffc371',
              marginBottom: tightSpacing ? '12px' : '20px',
              fontWeight: 500,
            }}
          >
            Secondary: {secondaryDesc?.label}
          </div>
        )}

        {/* Description */}
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.4,
            margin: `${tightSpacing ? '12px' : '20px'} 0`,
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
          }}
        >
          {desc?.description}
        </p>

        {/* Percentage Breakdown */}
        <div style={{ marginTop: tightSpacing ? '16px' : '24px' }}>
          <h3
            style={{
              fontSize: '20px',
              fontWeight: 600,
              margin: `0 0 ${tightSpacing ? '12px' : '16px'} 0`,
              color: '#fff',
            }}
          >
            Your Profile Breakdown:
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px', // Keep grid gap unchanged
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            {Object.keys(descriptions).map((key) => {
              const isHighlighted = key === result.primary || key === result.secondary;
              const percentage = result.percentages?.[key] || 0;

              return (
                <div
                  key={key}
                  style={{
                    background: isHighlighted
                      ? 'linear-gradient(135deg, #ff5f6d, #ffc371)'
                      : 'rgba(255,255,255,0.1)',
                    color: isHighlighted ? '#18171c' : '#fff',
                    borderRadius: '12px',
                    padding: '12px 8px',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '14px',
                    border: isHighlighted ? '2px solid #ffc371' : '2px solid transparent',
                  }}
                >
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                    {descriptions[key].icon}
                  </div>
                  <div style={{ marginBottom: '4px' }}>
                    {descriptions[key].label}
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 700 }}>
                    {percentage}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer - Call to Action */}
      <div style={{ textAlign: 'center', zIndex: 2, flexShrink: 0 }}>
        <div
          style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '20px',
            border: '2px solid rgba(255,195,113,0.3)',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#ffc371',
              marginBottom: '8px',
            }}
          >
            Discover your love language
          </div>
          <div
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            Take quiz on TwoOfUsCards.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultImageCard;
