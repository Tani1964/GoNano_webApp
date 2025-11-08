
// // Video Component
// type VideoPlayerProps = { url: string; className?: string };
// export const VideoPlayer = ({ url, className = '' }: VideoPlayerProps) => {
//   return (
//     <div className={`relative w-full ${className}`}>
//       <video
//         className="w-full h-full object-cover rounded-lg"
//         controls
//         playsInline
//         poster="/api/placeholder/800/450"
//       >
//         <source src={url} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

import React from 'react';
import ReactPlayer from 'react-player';

type VideoPlayerProps = { url: string; className?: string };

// Workaround: cast ReactPlayer to a generic component type to satisfy TypeScript props mismatch
const ReactPlayerAny = ReactPlayer as unknown as React.ComponentType<any>;

export const VideoPlayer = ({ url, className = '' }: VideoPlayerProps) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-lg ${className}`}>
      <ReactPlayerAny
        src={url}
        width="100%"
        height="100%"
        controls
        playing={false}
      />
    </div>
  );
};
