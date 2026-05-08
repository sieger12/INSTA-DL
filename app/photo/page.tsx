import type { Metadata } from 'next';
import ToolPageLayout from '@/components/ToolPageLayout';

export const metadata: Metadata = {
  title: '[Tool Title]',
  description: '[Meta description]',
};

export default function Page() {
  return (
    <ToolPageLayout
      num="02"
      title="[TOOL\nDOWNLOADER]"
      subtitle="[Short description — 1 sentence]"
      currentHref="/photo"
      sections={[
        { h2: '[What is it?]', body: '[Body text here]\n\n[Second paragraph]' },
        { h2: '[How to use]',  body: '[Steps explanation]\n\n[Continue here]' },
        { h2: '[Why use it?]', body: '[Reasons & use cases]\n\n[Continue here]' },
      ]}
      faq={[
        { q: '[FAQ 1?]', a: '[Answer 1]' },
        { q: '[FAQ 2?]', a: '[Answer 2]' },
        { q: '[FAQ 3?]', a: '[Answer 3]' },
        { q: '[FAQ 4?]', a: '[Answer 4]' },
      ]}
    />
  );
}
