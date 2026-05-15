/**
 * Video configuration for Vercel Blob integration
 * 
 * To use Vercel Blob:
 * 1. Upload videos to Vercel Blob dashboard: https://vercel.com/dashboard/stores
 * 2. Copy the blob URLs and add them to the NEXT_PUBLIC_BLOB_URLS environment variable
 * 3. Use the format: NEXT_PUBLIC_BLOB_URLS='{"filename.mp4":"https://...","other.mp4":"https://..."}'
 * 
 * For local development, videos are served from /public/work-videos/
 */

export type WorkVideo = {
  filename: string;
  category: string;
  localPath: string;
  blobUrl?: string;
};

// Map of all videos
const allVideos: Record<string, WorkVideo> = {
  '1111111_landscape': {
    filename: '1111111.mp4',
    category: 'all/landscape',
    localPath: '/work-videos/all/landscape/1111111.mp4',
  },
  '0421_vertical': {
    filename: '0421 (1).mp4',
    category: 'all/vertical',
    localPath: '/work-videos/all/vertical/0421 (1).mp4',
  },
  'brand_vertical': {
    filename: 'Brand.mp4',
    category: 'all/vertical',
    localPath: '/work-videos/all/vertical/Brand.mp4',
  },
  'mustafa_brand_vertical': {
    filename: 'Mustafa - Brand.mp4',
    category: 'all/vertical',
    localPath: '/work-videos/all/vertical/Mustafa - Brand.mp4',
  },
  'r50c_journey_vertical': {
    filename: 'R50C Journey3.mp4',
    category: 'all/vertical',
    localPath: '/work-videos/all/vertical/R50C Journey3.mp4',
  },
  'talkinghead_landscape': {
    filename: '1111111.mp4',
    category: 'talking-head/landscape',
    localPath: '/work-videos/talking-head/landscape/1111111.mp4',
  },
  'good_one_vertical': {
    filename: 'Good one.mp4',
    category: 'talking-head/vertical',
    localPath: '/work-videos/talking-head/vertical/Good one.mp4',
  },
  'talkinghead_vertical': {
    filename: 'Talking Head.mp4',
    category: 'talking-head/vertical',
    localPath: '/work-videos/talking-head/vertical/Talking Head.mp4',
  },
  'fpv_edit_vertical': {
    filename: 'FPV Edit.mp4',
    category: 'social-media/vertical',
    localPath: '/work-videos/social-media/vertical/FPV Edit.mp4',
  },
  'og_video_vertical': {
    filename: 'Og Video (2).mp4',
    category: 'social-media/vertical',
    localPath: '/work-videos/social-media/vertical/Og Video (2).mp4',
  },
  'r50c_socialm_vertical': {
    filename: 'R50C Journey3.mp4',
    category: 'social-media/vertical',
    localPath: '/work-videos/social-media/vertical/R50C Journey3.mp4',
  },
  'social_media_ad_vertical': {
    filename: 'Social Media Ad.mp4',
    category: 'social-media/vertical',
    localPath: '/work-videos/social-media/vertical/Social Media Ad.mp4',
  },
  'after_grade_vertical': {
    filename: 'After Grade.mp4',
    category: 'brands/vertical',
    localPath: '/work-videos/brands/vertical/After Grade.mp4',
  },
  'brand_vertical_b': {
    filename: 'Brand.mp4',
    category: 'brands/vertical',
    localPath: '/work-videos/brands/vertical/Brand.mp4',
  },
  'mustafa_brand_b_vertical': {
    filename: 'Mustafa - Brand.mp4',
    category: 'brands/vertical',
    localPath: '/work-videos/brands/vertical/Mustafa - Brand.mp4',
  },
  'mustafa_brand_3_vertical': {
    filename: 'Mustafa - Brand 3.mp4',
    category: 'brands/vertical',
    localPath: '/work-videos/brands/vertical/Mustafa - Brand 3.mp4',
  },
};

// Parse blob URLs from environment variable if available
function getBlobUrls(): Record<string, string> {
  if (typeof window === 'undefined') {
    // Server-side: read from env
    const blobUrlsEnv = process.env.NEXT_PUBLIC_BLOB_URLS;
    if (blobUrlsEnv) {
      try {
        return JSON.parse(blobUrlsEnv);
      } catch (e) {
        console.warn('Failed to parse NEXT_PUBLIC_BLOB_URLS:', e);
      }
    }
  } else {
    // Client-side: read from window
    const blobUrlsEnv = (window as any).__NEXT_DATA__?.env?.NEXT_PUBLIC_BLOB_URLS;
    if (blobUrlsEnv) {
      try {
        return JSON.parse(blobUrlsEnv);
      } catch (e) {
        console.warn('Failed to parse NEXT_PUBLIC_BLOB_URLS:', e);
      }
    }
  }
  return {};
}

/**
 * Get the URL for a video, preferring Vercel Blob URLs if available
 */
export function getVideoUrl(key: string): string {
  const video = allVideos[key];
  if (!video) {
    console.warn(`Video key not found: ${key}`);
    return '';
  }

  // Check if blob URL is available via environment variable
  const blobUrls = getBlobUrls();
  if (blobUrls[video.filename]) {
    return blobUrls[video.filename];
  }

  // Fall back to local path
  return video.localPath;
}

/**
 * Get all video configuration
 */
export function getAllVideos() {
  return allVideos;
}
