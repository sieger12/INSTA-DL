import type { Metadata } from 'next';
import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata: Metadata = {
  title: 'Instagram Video Downloader Online Free — IGTV HD, MP4',
  description: 'Instagram video downloader online free. Save any public Instagram video, IGTV HD, or feed clip as MP4 at original resolution, no app, no login.',
};

export default function Page() {
  return (
    <ToolPageLayout
      num="01"
      title="[VIDEO\nDOWNLOADER]"
      subtitle="Instagram video downloader for feed videos, IGTV, and live replays. MP4, original quality."
      currentHref="/video"
      sections={[
        {
          h2: "Instagram video downloader online — free, no app",
          body: "The page covers every video format Instagram supports outside of Reels: feed videos (square, portrait, landscape), IGTV (long-form, up to an hour), and live replays kept on the profile after the broadcast ends. Each saves as MP4 at the original upload resolution.\n\nMP4 with H.264 video and AAC audio is the only format because that's what Instagram serves. We pass the file through without re-encoding, so quality matches the source. Resolution caps at 1080p (Instagram's public ceiling). Anything uploaded above that gets capped on Instagram's end, not ours.\n\nFor Reels specifically, use the [Reels downloader](/reels) — it has the same backend but is optimized for the 90-second vertical format and offers an audio-only export. For stories, the [Story downloader](/story) keeps everything anonymous.",
        },
        {
          h2: "Instagram IGTV download in HD",
          body: "IGTV (the long-form video tab) often runs 5 to 60 minutes. The download isn't time-throttled, but file sizes get large fast — a 30-minute IGTV at 1080p typically lands around 250-400 MB. Make sure you have storage and a reasonable connection before starting.\n\nThe Instagram IGTV download HD flow on this page reads the publicly-served MP4. If the original IGTV was uploaded as 4K, what you get is the 1080p version Instagram caches publicly. The 4K source file isn't exposed to anyone outside the owner's account — that's an Instagram-side decision, not a tool limitation.\n\nFor IGTV that's been split into Reels-style clips, switch to the [Reels page](/reels). The two formats often overlap.",
        },
        {
          h2: "Save Instagram live video after it ends",
          body: "Live broadcasts on Instagram are ephemeral by default. They go away the moment the broadcaster taps \"end live.\" If they choose to share to feed afterwards, the recording lives on the profile for as long as they keep it there.\n\nThis tool reads those archived live videos as IGTV-style files. Paste the URL of the post (live replays show up as regular posts in the grid once shared), and the page extracts the MP4 the same way it does for any other feed video. Quality matches the broadcast (live tops out at 720p in most regions, sometimes 1080p in newer accounts).\n\nIf the broadcaster never shared the live to feed, the video is gone — no third-party tool can recover it. Instagram doesn't retain unshared live broadcasts on a public endpoint.",
        },
      ]}
      faq={[
        {
          q: "What's the maximum video resolution I can download?",
          a: "1080p, capped by Instagram itself. The platform doesn't serve 4K source files publicly, regardless of how the original was uploaded. Within that cap, no quality is lost — what you save is the original CDN file.",
        },
        {
          q: "How is this different from the Reels downloader?",
          a: "Same backend, different targets. The Reels page handles short vertical clips up to 90 seconds and offers an audio-only MP3 export. This video page handles feed videos, IGTV, and live replays — anything that isn't a Reel. If you paste a Reel URL here, the page redirects you to the Reels tool automatically.",
        },
        {
          q: "Can I download Instagram live broadcasts during the live?",
          a: "Not while it's live. Instagram doesn't expose the in-progress stream on a public endpoint, and any tool that claims to record a live in real time is either lying or doing something jailbreak-y. After the broadcaster ends and shares to feed, the saved replay becomes downloadable here.",
        },
        {
          q: "Why is the download taking longer than the Reels page?",
          a: "Bigger files. A long IGTV or full live replay can be 100x the size of a Reel. The connection isn't throttled on our end — most slowness comes from Instagram's CDN handling large files and your local connection speed. For shorter clips, expect Reels-style speed (a few seconds).",
        },
      ]}
    />
  );
}
