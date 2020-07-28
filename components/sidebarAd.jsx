import React, { useEffect } from 'react';

const SidebarAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log('ads error:', err);
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7573250938739874"
        data-ad-slot="7290503752"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default SidebarAd;
