'use client';

import { useEffect, useState } from 'react';

type WorkItem = {
  title: string;
  tag: string;
  section: 'All' | 'Talking Head' | 'Social Media' | 'Brand Reels';
  video: string;
  poster: string;
  featured?: boolean;
  layout: 'landscape' | 'vertical';
};

function createPoster(title: string, tag: string, from: string, to: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#g)" />
      <rect width="1280" height="720" fill="rgba(0,0,0,0.32)" />
      <text x="72" y="110" fill="rgba(255,255,255,0.72)" font-family="Arial, Helvetica, sans-serif" font-size="28" letter-spacing="6">${tag.toUpperCase()}</text>
      <text x="72" y="400" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="700">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const workItems: WorkItem[] = [
  {
    title: 'All — Landscape',
    tag: 'All · Landscape',
    section: 'All',
    video: '/work-videos/all/landscape/1111111.mp4',
    poster: createPoster('All — Landscape', 'All · Landscape', '#2f2f2f', '#9c7b3e'),
    featured: true,
    layout: 'landscape',
  },
  {
    title: 'All Reel 01',
    tag: 'All · Vertical',
    section: 'All',
    video: '/work-videos/all/vertical/0421 (1).mp4',
    poster: createPoster('All Reel 01', 'All · Vertical', '#271b31', '#7250ff'),
    layout: 'vertical',
  },
  {
    title: 'All Reel 02',
    tag: 'All · Vertical',
    section: 'All',
    video: '/work-videos/all/vertical/Brand.mp4',
    poster: createPoster('All Reel 02', 'All · Vertical', '#1a2430', '#1c7ed6'),
    layout: 'vertical',
  },
  {
    title: 'All Reel 03',
    tag: 'All · Vertical',
    section: 'All',
    video: '/work-videos/all/vertical/Mustafa - Brand.mp4',
    poster: createPoster('All Reel 03', 'All · Vertical', '#101828', '#7c3aed'),
    layout: 'vertical',
  },
  {
    title: 'All Reel 04',
    tag: 'All · Vertical',
    section: 'All',
    video: '/work-videos/all/vertical/R50C Journey3.mp4',
    poster: createPoster('All Reel 04', 'All · Vertical', '#31111e', '#e03131'),
    layout: 'vertical',
  },
  {
    title: 'Talking Head — Landscape',
    tag: 'Talking Head · Landscape',
    section: 'Talking Head',
    video: '/work-videos/talking-head/landscape/1111111.mp4',
    poster: createPoster('Talking Head — Landscape', 'Talking Head · Landscape', '#2f2f2f', '#9c7b3e'),
    featured: true,
    layout: 'landscape',
  },
  {
    title: 'Talking Head Reel 01',
    tag: 'Talking Head · Vertical',
    section: 'Talking Head',
    video: '/work-videos/talking-head/vertical/Good one.mp4',
    poster: createPoster('Talking Head Reel 01', 'Talking Head · Vertical', '#271b31', '#7250ff'),
    layout: 'vertical',
  },
  {
    title: 'Talking Head Reel 02',
    tag: 'Talking Head · Vertical',
    section: 'Talking Head',
    video: '/work-videos/talking-head/vertical/Talking Head.mp4',
    poster: createPoster('Talking Head Reel 02', 'Talking Head · Vertical', '#1a2430', '#1c7ed6'),
    layout: 'vertical',
  },
  {
    title: 'Social Media Reel 01',
    tag: 'Social Media · Vertical',
    section: 'Social Media',
    video: '/work-videos/social-media/vertical/FPV Edit.mp4',
    poster: createPoster('Social Media Reel 01', 'Social Media · Vertical', '#14301d', '#2f9e44'),
    layout: 'vertical',
  },
  {
    title: 'Social Media Reel 02',
    tag: 'Social Media · Vertical',
    section: 'Social Media',
    video: '/work-videos/social-media/vertical/Og Video (2).mp4',
    poster: createPoster('Social Media Reel 02', 'Social Media · Vertical', '#2a1814', '#f08c00'),
    layout: 'vertical',
  },
  {
    title: 'Social Media Reel 03',
    tag: 'Social Media · Vertical',
    section: 'Social Media',
    video: '/work-videos/social-media/vertical/R50C Journey3.mp4',
    poster: createPoster('Social Media Reel 03', 'Social Media · Vertical', '#101828', '#7c3aed'),
    layout: 'vertical',
  },
  {
    title: 'Social Media Reel 04',
    tag: 'Social Media · Vertical',
    section: 'Social Media',
    video: '/work-videos/social-media/vertical/Social Media Ad.mp4',
    poster: createPoster('Social Media Reel 04', 'Social Media · Vertical', '#31111e', '#e03131'),
    layout: 'vertical',
  },
  {
    title: 'Brand Reel 01',
    tag: 'Brand Reels · Vertical',
    section: 'Brand Reels',
    video: '/work-videos/brands/vertical/After Grade.mp4',
    poster: createPoster('Brand Reel 01', 'Brand Reels · Vertical', '#1c1c1c', '#b38a4d'),
    layout: 'vertical',
  },
  {
    title: 'Brand Reel 02',
    tag: 'Brand Reels · Vertical',
    section: 'Brand Reels',
    video: '/work-videos/brands/vertical/Brand.mp4',
    poster: createPoster('Brand Reel 02', 'Brand Reels · Vertical', '#1a2430', '#1c7ed6'),
    layout: 'vertical',
  },
  {
    title: 'Brand Reel 03',
    tag: 'Brand Reels · Vertical',
    section: 'Brand Reels',
    video: '/work-videos/brands/vertical/Mustafa - Brand.mp4',
    poster: createPoster('Brand Reel 03', 'Brand Reels · Vertical', '#271b31', '#7250ff'),
    layout: 'vertical',
  },
  {
    title: 'Brand Reel 04',
    tag: 'Brand Reels · Vertical',
    section: 'Brand Reels',
    video: '/work-videos/brands/vertical/Mustafa - Brand 3.mp4',
    poster: createPoster('Brand Reel 04', 'Brand Reels · Vertical', '#2a1814', '#f08c00'),
    layout: 'vertical',
  },
];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const visibleItems =
    filter === 'All'
      ? workItems.filter((item) => item.section === 'All')
      : workItems.filter((item) => item.section === filter);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Pause all grid videos when modal is open to save resources
  useEffect(() => {
    if (selectedItem) {
      document.querySelectorAll('.work-card video').forEach((v: any) => v.pause());
    }
  }, [selectedItem]);

  // Notify global scripts when the filter changes so newly-rendered cards can animate in
  useEffect(() => {
    const ev = new CustomEvent('workFilterChanged', { detail: { filter } });
    window.dispatchEvent(ev);
  }, [filter]);

  return (
    <section id="work">
      <div className="work-header">
        <h2 className="section-title">Selected<br /><span>Work</span></h2>
        <div className="work-filter">
          <button className={`filter-btn ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>All</button>
          <button className={`filter-btn ${filter === 'Talking Head' ? 'active' : ''}`} onClick={() => setFilter('Talking Head')}>Talking Head</button>
          <button className={`filter-btn ${filter === 'Social Media' ? 'active' : ''}`} onClick={() => setFilter('Social Media')}>Social Media</button>
          <button className={`filter-btn ${filter === 'Brand Reels' ? 'active' : ''}`} onClick={() => setFilter('Brand Reels')}>Brand Reels</button>
        </div>
      </div>
      <div className="work-grid">
        {visibleItems.map((item) => (
          <div
            key={item.title}
            className={`work-card ${item.featured ? 'featured' : ''} ${item.layout} ${item.section === 'Talking Head' && item.layout === 'vertical' ? 'talking-head-stack' : ''}`}
            data-cat={item.section.toLowerCase()}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedItem(item)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setSelectedItem(item);
              }
            }}
            onMouseEnter={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) {
                // Add a small delay so fast swiping doesn't trigger 100MB+ video loads
                const timeoutId = setTimeout(() => {
                  if (!selectedItem) video.play().catch(() => { });
                }, 300);
                (video as any)._playTimeout = timeoutId;
              }
            }}
            onMouseLeave={(e) => {
              const video = e.currentTarget.querySelector('video');
              if (video) {
                clearTimeout((video as any)._playTimeout);
                video.pause();
                video.currentTime = 0;
              }
            }}
          >
            <video
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={item.title}
            >
              <source src={`${encodeURI(item.video)}#t=0.5`} type="video/mp4" />
            </video>
            <div className="work-overlay">
              <div className="work-tag">{item.tag}</div>
              <div className="work-name">{item.title}</div>
            </div>
            <div className="work-play">
              <svg width="16" height="18" viewBox="0 0 16 18">
                <path d="M0 0L16 9L0 18V0Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {selectedItem ? (
        <div className="work-modal" role="dialog" aria-modal="true" aria-label={selectedItem.title} onClick={() => setSelectedItem(null)}>
          <div className="work-modal-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="work-modal-close" onClick={() => setSelectedItem(null)} aria-label="Close video">
              ×
            </button>
            <div className="work-modal-meta">
              <div className="work-tag">{selectedItem.tag}</div>
              <div className="work-name">{selectedItem.title}</div>
            </div>
            <video
              className="work-modal-video"
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
            >
              <source src={encodeURI(selectedItem.video)} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}


    </section>
  );
}