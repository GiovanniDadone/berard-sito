import React from 'react';

const EngagementSection = () => {
  const hashtags = [
    '#valledaosta',
    '#scriviberard', 
    '#valledaostaaperta',
    '#tuttaunaltravalle'
  ];

  const stats = [
    {
      number: '3',
      label: 'Anni di impegno'
    },
    {
      number: '1°',
      label: 'Pride in VdA'
    },
    {
      number: '∞',
      label: 'Passione'
    }
  ];

  return (
    <>
      {/* Hashtags Section */}
      <div className="hashtags-container">
        <div className="hashtags-inner">
          {hashtags.map((hashtag, index) => (
            <span 
              key={index}
              className="hashtag"
            >
              {hashtag}
            </span>
          ))}
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="social-proof">
        <div className="social-content">
          <h4 className="social-title">Insieme per il cambiamento</h4>
          <div className="social-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">
                  {stat.number}
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EngagementSection;