import type { Metadata } from 'next';
import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata: Metadata = {
  title: 'Instagram Reels to MP3 Converter — Audio Only Download',
  description: 'Download Instagram Reels audio only as MP3. The Instagram Reels to MP3 converter pulls the audio track at source bitrate, no login, no app, no waiting.',
};

export default function Page() {
  return (
    <ToolPageLayout
      num="07"
      topLine="AUDIO"
      bottomLine="DOWNLOADER"
      subtitle="Instagram Reels to MP3 converter — download Reels audio only, no app, no login."
      currentHref="/audio"
      sections={[
        {
          h2: "Download Instagram Reels audio only — MP3 in one step",
          body: "Reels carry an AAC audio track inside an MP4 container. This page extracts the AAC, converts it to MP3, and hands you the audio file directly — no need to save the video first and run a separate converter.\n\nBitrate matches the source. Most Reels audio sits at 128 kbps AAC, which converts to a 128 kbps MP3 of equivalent quality. We don't upscale or fake higher-quality audio; if the source is mediocre, the export reflects that.\n\nThe Instagram Reels to MP3 converter on this page does one thing well. Paste a Reel URL, hit save, get an MP3. It's the same backend as the [Reels downloader](/reels) but the export step strips the video and finalizes the audio.",
        },
        {
          h2: "How to use the audio downloader without an app",
          body: "Copy the Reel link from Instagram (tap the three dots, \"Copy link\"). Paste it into the field at the top. The page detects the audio track, shows the duration and source bitrate, and gives you the MP3 button.\n\nFile names match the source clip's title or use the username plus a timestamp if no title is set. Most browsers drop straight to your Downloads folder. iOS Safari sends to Files, where you can move it into the Music app or anywhere else.\n\nFor bulk extraction, paste each Reel one at a time — there's no batch upload because Instagram rate-limits public-endpoint reads, and queueing dozens of clips at once gets the IP temporarily blocked. Manual one-at-a-time avoids that.",
        },
        {
          h2: "Why save Reels audio separately",
          body: "Music on Reels usually comes from Instagram's licensed library or from the user's own clip. Both are fine to extract for personal use, but redistribution is the user's responsibility — same logic as recording a song from the radio. The MP3 file is yours to keep, share with friends, or use as reference; what you can publicly post or remonetize depends on the original license, which we don't know.\n\nFor people building meme libraries, voice-acting reference clips, or just collecting song hooks before they vanish, the audio-only export saves disk space (audio is roughly a tenth the size of full Reel video). It also plays in any audio app, which is what most users actually want when the video portion isn't important.\n\nFor the full clip with video, switch to [Reels download](/reels). For audio attached to a story (a song sticker on a still photo, for example), the [Story downloader](/story) keeps the audio inside the MP4.",
        },
      ]}
      faq={[
        {
          q: "What format does the audio download in?",
          a: "MP3 by default, at the same bitrate as the source AAC track (typically 128 kbps). MP3 plays in every audio app on every platform, which is why we picked it over keeping AAC. If you specifically need AAC or M4A, save the full Reel as MP4 from the [Reels page](/reels) and extract with your preferred audio tool.",
        },
        {
          q: "Can I extract audio from a story or a regular post?",
          a: "From a video post or a story-with-music, yes — the [Story downloader](/story) saves the MP4 with audio attached, and you can pull the audio out separately if needed. For a Reel specifically, this page is the direct path: it gives you MP3 in one step instead of two.",
        },
        {
          q: "Why is the converted audio sometimes lower quality?",
          a: "MP3 conversion is mostly transparent at 128 kbps and above. If the source AAC was unusually low (some user-uploaded clips compress more aggressively), the MP3 will reflect that. We don't upscale audio — there's nothing to upscale, since the data simply isn't there.",
        },
        {
          q: "Are there licensing issues with the music?",
          a: "Music in Reels is licensed by Instagram for in-app use. Pulling the audio for personal listening is generally fine; using it in a commercial project, repost, or monetized video is not, unless you have a separate license. We can't tell you what's legal in your jurisdiction — for commercial use, talk to a lawyer.",
        },
      ]}
    />
  );
}
