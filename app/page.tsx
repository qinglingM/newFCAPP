// Homepage - links to all four screens
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:p-8 max-w-4xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Hark Article UI - Screens</h1>
      <div className="space-y-3 sm:space-y-4">
        <Link href="/screen1" className="block p-3 sm:p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 break-words">Homepage_magazine</h2>
          <p className="text-xs sm:text-sm text-gray-600 break-words">Article content with "NOW PLAYING" button and playback controls</p>
        </Link>
        <Link href="/screen3" className="block p-3 sm:p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 break-words">Screen 3: Full Audio Player</h2>
          <p className="text-xs sm:text-sm text-gray-600 break-words">Audio player with artwork, playback controls, and action buttons</p>
        </Link>
        <Link href="/screen4" className="block p-3 sm:p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 break-words">Homepage_classic</h2>
          <p className="text-xs sm:text-sm text-gray-600 break-words">Article landing page with photo-illustration and metadata</p>
        </Link>
        <Link href="/screen5" className="block p-3 sm:p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 break-words">Full Issue Page</h2>
          <p className="text-xs sm:text-sm text-gray-600 break-words">The Atlantic Magazine article landing page with full layout</p>
        </Link>
      </div>
    </div>
  );
}

