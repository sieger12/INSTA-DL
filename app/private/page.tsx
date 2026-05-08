import type { Metadata } from 'next';
import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata: Metadata = {
  title: 'Private Instagram Viewer — The Honest Answer',
  description: 'Looking for a private Instagram viewer? The truth about what works, what does not, and what you can actually pull from a private profile. No fake promises.',
};

export default function Page() {
  return (
    <ToolPageLayout
      num="08"
      title="[PRIVATE\nACCOUNTS]"
      subtitle="The honest take on private profiles — what is actually possible, and what is not."
      currentHref="/private"
      sections={[
        {
          h2: "Can a third-party tool view a private Instagram account?",
          body: "No. Not this tool, not the ones promising it on the first page of Google, not the apps on the Play Store with five stars and one review each. Private accounts on Instagram are gated by Instagram itself — the posts, stories, Reels, and Highlights are not on a public endpoint. Without a logged-in account that the owner has approved, there is nothing to read.\n\nIf a site says it can show you private content, one of three things is true. They are showing you fake placeholder data and asking for a survey or download to \"unlock\" — those are scams. They are using stolen Instagram credentials to log in as another user — that is illegal and gets caught. Or the account they are reading was actually public when they cached it, and went private later — in which case the data is stale and incomplete.\n\nThis page does not try to deceive you. The accurate answer is: ask the owner to follow you back. Anything else is a workaround that costs more than it returns.",
        },
        {
          h2: "What you can pull from a private profile",
          body: "Two things, both intentional from Instagram's side.\n\nThe profile picture stays public. Instagram serves the avatar to everyone — that's how non-followers can recognize an account before deciding to send a follow request. Use the [DP downloader](/dp) for the full-size version of any private account's profile picture.\n\nThe bio text and follower/following counts are also visible (sometimes — newer accounts may hide these). That information shows up on instagram.com when you visit the profile while logged out. There's no special tool needed to read it.\n\nEverything else — posts, stories, Reels, Highlights, the tagged photos tab — is gated. No third-party tool reaches them, ours or anyone else's.",
        },
        {
          h2: "Legitimate paths to see a private profile's content",
          body: "Send a follow request. If they accept, you see everything they post going forward. The simple answer is usually right.\n\nAsk a mutual friend who follows them. Screenshots, link sharing, or a casual \"can I see what they posted\" works for most casual cases. It also gives the owner a chance to say no, which is the consent piece a third-party tool removes.\n\nIf you have a legal or compliance reason to read a specific account (subpoena, internal investigation, court order), Meta has a law-enforcement portal. That is the only path with formal access to private data. For ordinary curiosity, it is overkill and unavailable.\n\nFor public-account workflows that are actually possible, see the [Story viewer](/story), the [Highlights downloader](/highlights), and the [Reels downloader](/reels).",
        },
      ]}
      faq={[
        {
          q: "I saw a YouTube tutorial promising a private Instagram viewer. Are they lying?",
          a: "Probably yes. Most of those tutorials end at a survey wall, an APK download, or a tool that displays generic placeholder posts to anyone who pastes a username. Fake screenshots are easy to make. The view count on the YouTube video is not evidence the tool works.",
        },
        {
          q: "What about Glassagram, Eyezy, mSpy, or similar paid services?",
          a: "Those are device-monitoring tools that require physical access to the target's phone (and usually the target's password). They don't read Instagram remotely — they install on a phone you already control. That puts them in a different category from a story viewer, and using them on someone else's device without consent is illegal in most jurisdictions.",
        },
        {
          q: "Can I download my own private account's posts?",
          a: "Yes, through the Instagram app itself. Open your post, tap the three dots, choose \"Save\" or \"Save to Collection.\" For mass export, Instagram has a \"Download your data\" feature in Settings → Account Center → Your information and permissions. That gives you a ZIP of everything you've ever posted, including private content.",
        },
        {
          q: "Why does this page exist if you can't view private accounts?",
          a: "Because hundreds of fake tools sell the opposite promise, and someone clicking through search results deserves to find the truth fast. The rest of the site does what it claims: public stories, Reels, photos, Highlights. Private content is one of the limits we're upfront about.",
        },
      ]}
    />
  );
}
