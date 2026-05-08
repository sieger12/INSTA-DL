import type { Metadata } from 'next';
import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata: Metadata = {
  title: 'Insta Profile Picture Downloader Full Size — DP HD, No Login',
  description: 'Download an Instagram profile picture at full size. The insta profile viewer pulls the largest avatar Instagram exposes, no app, no login, even for private accounts.',
};

export default function Page() {
  return (
    <ToolPageLayout
      num="06"
      topLine="PROFILE"
      bottomLine="DOWNLOADER"
      subtitle="Insta profile viewer — download any DP at full size, no login. Works for private accounts too."
      currentHref="/dp"
      sections={[
        {
          h2: "Download Instagram profile picture full size",
          body: "Inside the app, the profile picture (the DP) shows as a tiny circle — about 150 pixels on most phones. The actual file Instagram stores is much larger. This page handles <b>download instagram profile picture full size</b> and gives it to you as a JPG.\n\nFor most accounts the avatar lands at 320×320 to 640×640, depending on what the owner uploaded. That's the maximum Instagram serves publicly. It's not 1080×1080 (that's reserved for posts), but it is the largest size available without logging into the owner's account, which no honest tool can do.\n\nThe <b>insta profile viewer</b> flow on this page works the same regardless of whether you follow the account. Public, private, business, personal — the avatar is fetched the same way because Instagram exposes it on every profile by design.",
        },
        {
          h2: "How to use the insta profile viewer",
          body: "Paste the username at the top. The page shows the DP at full size right there in the preview, with the dimensions next to it. If that's the file you want, hit save and it lands as JPG. If you want a different format or a resize, save the JPG first then handle conversion in your image tool of choice.\n\nDimensions vary by upload. Avatars uploaded recently tend to be 320×320 (Instagram's current canonical size). Older accounts that haven't changed their DP in years sometimes have 480×480 or 640×640 cached versions. Whatever Instagram serves is what you get.\n\nFor regular feed photos, use the [Photo downloader](/photo) — those go up to 1080px. For story-format avatars (the ring version with active stories), there's no separate download since it's the same underlying file.",
        },
        {
          h2: "Profile picture for private accounts",
          body: "Private accounts hide their posts and stories from non-followers, but the profile picture stays visible. That's intentional — Instagram surfaces the avatar so you can recognize an account before you decide to follow.\n\nThis tool reads the same publicly-served avatar. It works for private accounts as well as public ones, with the same speed and the same quality cap.\n\nFor anything beyond the avatar on a private account — posts, stories, Reels — there's nothing a third-party tool can pull. The only legitimate path is to follow the account. The [Private content notes page](/private) covers this in more detail if you've been told otherwise.",
        },
      ]}
      faq={[
        {
          q: "Can I download a DP at original 1080×1080?",
          a: "No, and no tool can. Instagram's public profile-picture endpoint maxes out around 320–640px depending on the account. The 1080×1080 source file (if it exists) sits behind the owner's account, not on the public CDN. We hand you the largest size that's actually available, no fakery.",
        },
        {
          q: "Does this work for private accounts?",
          a: "Yes. The profile picture is shown to everyone by Instagram itself, even on private accounts, so a public-API read returns the same file regardless of follow status. Posts and stories on private accounts remain off-limits.",
        },
        {
          q: "Will the account owner know I downloaded their DP?",
          a: "No. Instagram doesn't notify on profile-picture views or saves. The request from this tool also doesn't go through your Instagram session, so it's doubly invisible.",
        },
        {
          q: "Can I see old profile pictures the account used to have?",
          a: "No. Instagram only serves the current avatar publicly. Old DPs aren't kept on a public endpoint — they're either gone from Instagram's storage entirely or are gated behind the owner's account. Nothing on the open web reaches them.",
        },
      ]}
    />
  );
}
