import type { Metadata } from 'next';
import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata: Metadata = {
  title: 'Instagram Highlight Download Online — Save Pinned Stories Free',
  description: 'Instagram highlight download online without an app. Save any public Highlight as MP4 or JPG at original quality, no login, no watermark, no install.',
};

export default function Page() {
  return (
    <ToolPageLayout
      num="05"
      topLine="HIGHLIGHTS"
      bottomLine="DOWNLOADER"
      subtitle="Instagram highlight download online — save pinned story collections at original quality."
      currentHref="/highlights"
      sections={[
        {
          h2: "What are Instagram Highlights and how to save them",
          body: "Highlights are stories the owner pinned past their 24-hour expiry. They live as small circles under the bio on a profile page — a travel run, a recipe series, a row of pinned receipts kept for reference.\n\nSaving them through Instagram itself works only for Highlights you posted yourself. For any other public profile, the in-app save isn't there. The Instagram highlight download online flow on this page reads the public Highlight data and gives you each frame as a downloadable file. Photos save as JPG, videos as MP4, in the original sequence.\n\nIf the profile is private, no tool pulls the Highlights, this one included. The page tells you up front instead of pretending to load.",
        },
        {
          h2: "How to download Highlights without an app",
          body: "Paste the username at the top. The page lists every Highlight reel pinned on the profile — the small circles you'd see under the bio. Click into one and you'll see all frames in order, with thumbnails. Save one frame, save the whole reel, or skim through and pick selectively.\n\nWe don't pre-fetch. The download starts when you tap save, not when the page loads. That keeps the request light and the data flow direct: your browser fetches from Instagram's CDN through our server, then closes the connection.\n\nOn iOS the file lands in Files, where you can long-press and push it to camera roll. On Android it lands in Downloads and Gallery picks it up automatically. There's no separate Highlight download app to install — this is the entire workflow.",
        },
        {
          h2: "Why save Highlights instead of taking screenshots",
          body: "Screenshots lose quality and crop weird across devices. The original Highlight was uploaded at a fixed resolution, usually 1080×1920 portrait. Your phone renders that source onto your specific screen, then the screenshot tool captures the rendered version. By the time it's saved, the file has been through three transformations.\n\nThe Highlight download bypasses all that. The source file is what you get. Original resolution, original aspect ratio, no UI overlay, no compression second pass.\n\nThis matters most for archival purposes — recipe steps you actually want to follow, travel notes you want to keep readable, work portfolios you want to reference later. For active stories that haven't been pinned yet, use the [Story downloader](/story); for individual photos posted to the feed, use the [Photo downloader](/photo).",
        },
      ]}
      faq={[
        {
          q: "Can the profile owner tell I saved their Highlights?",
          a: "No. Saving is read-only on the data side, and the request doesn't go through your Instagram session, so it doesn't appear in any list. Instagram doesn't notify on Highlight views or saves either way — that's true even inside the app.",
        },
        {
          q: "Why are some Highlights missing from the list?",
          a: "A few possibilities. The Highlight could be pinned but contain no frames after a deletion (rare but it happens). The profile could have just switched to private. Or the username might be misspelled. Try refreshing once before assuming the tool is broken.",
        },
        {
          q: "Do you keep a copy of the Highlight on your servers?",
          a: "No. The download passes through and the connection closes. Server logs hold request metadata for 14 days for abuse detection, then drop. The file itself is never archived on any server we control.",
        },
        {
          q: "Can I download Highlights from accounts I don't follow?",
          a: "Yes, as long as the profile is public. Following or not has no impact on what this tool can read. If the account is private, no third-party tool gets in — same gate that Instagram itself enforces.",
        },
      ]}
    />
  );
}
