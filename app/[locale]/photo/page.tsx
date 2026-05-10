import type { Metadata } from 'next';
import ToolPageLayout from '@/components/ToolPageLayout';
import { isLocale, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';
import { getToolContent } from '@/lib/tool-dict';

export const metadata: Metadata = {
  title: 'Instagram Photo Downloader HD — Single Posts & Carousel All Photos',
  description: 'Insta photo down at full resolution. Download a single Instagram photo or every image in a carousel post in one go. JPG, no compression pass, no login.',
};

const EN_SUBTITLE = "Download a single Instagram photo or every image in a carousel — original JPG, no login.";
const EN_SECTIONS = [
  { h2: "Instagram photo downloader HD — single posts and carousels", body: "The page handles two kinds of post: the single-image post (one square, portrait, or landscape JPG) and the carousel post (a swipeable group of two to ten images). Both render in the preview list, both save at the original upload resolution. <b>Instagram photo downloader hd</b> in practical terms — original CDN file, no second compression.\n\nResolution caps at 1080 pixels on the longest side, which is what Instagram serves to the public. If the original was uploaded at higher resolution, what you save is the 1080px version — that's true here and inside the app, since Instagram doesn't expose the original file. For images uploaded at 1080 or below, you get the original-quality file with no second compression pass.\n\nFiles save as JPG. There is no PNG export because Instagram serves JPGs from its CDN, and converting JPG to PNG doesn't recover lost detail. If you need a transparent or lossless format, the original poster has to provide it — no tool can fabricate that." },
  { h2: "How to download Instagram carousel — all photos at once", body: "Paste the post URL or the username, the page detects the carousel and shows every frame as a thumbnail. Two ways from there.\n\n\"Download all\" packs every image from the carousel into a single ZIP and sends that to your device. One click, one file, every photo in the order they were posted. <b>Download instagram carousel all photos</b> in one tap — useful for product shots, photo essays, recipe steps where the order matters.\n\nOr download images individually if you only want a few. Click each thumbnail you want, hit save. The filename includes the position (e.g., post_2_of_8.jpg) so the order stays clear when you sort the folder.\n\nFor profile pictures specifically, the [DP downloader](/dp) is faster — it pulls the avatar at the maximum size Instagram exposes. For Reels and other video posts, see the [Video](/video) and [Reels](/reels) tools." },
  { h2: "Why insta photo down without login", body: "Instagram's own save-to-collections feature requires you to be logged in, and it bookmarks the post inside the app — it doesn't put a JPG on your device. Long-press and \"Save photo\" was removed from the official client years ago. The only way to get a real file out, short of screenshotting, is an <b>insta photo down</b> tool like this one.\n\nNo Instagram login means no risk of the request being tagged with your account, no follower graph pollution, no \"is this a bot\" lockout for behaving normally. The fetch goes through our server with anonymous credentials.\n\nNo install means it works on any device with a browser. Phone, laptop, work computer that won't let you install apps — same flow on all of them." },
];
const EN_FAQ = [
  { q: "Can I download every photo from a 10-image carousel?", a: "Yes. The \"Download all\" button pulls every frame from the carousel and packs them into a ZIP. Order is preserved (1 of 10, 2 of 10, etc.) so you can reconstruct the original sequence." },
  { q: "Will the photo come out in HD?", a: "It comes out at the resolution Instagram serves, which caps at 1080 pixels on the longest edge. That's the maximum public resolution — neither the app nor any third-party tool can pull a higher-res version because Instagram doesn't expose one to the public. Within that cap, no quality is lost; the JPG is the original CDN file." },
  { q: "Does this work for posts from accounts I don't follow?", a: "Yes, for public accounts. Following or not has no effect on what this tool reads. For private accounts, no third-party tool gets through — Instagram itself blocks the public endpoint." },
  { q: "How do I save the photo to camera roll on iPhone?", a: "Hit save here, the JPG lands in the Files app. Open it, tap share, choose \"Save Image.\" That moves it into the camera roll. The two-step shuffle is iOS's choice, not ours — Safari can't write directly to the camera roll from a download." },
];

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const dict = getToolContent(locale, 'photo');
  return (
    <ToolPageLayout
      num="02"
      topLine="PHOTO"
      bottomLine="DOWNLOADER"
      subtitle={dict?.subtitle ?? EN_SUBTITLE}
      currentHref="/photo"
      sections={dict?.sections ?? EN_SECTIONS}
      faq={dict?.faq ?? EN_FAQ}
    />
  );
}
