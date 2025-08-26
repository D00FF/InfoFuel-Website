'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

type Props = {
  /** Your Cal link, e.g. "yourteam/30min" or "username/30min" */
  calLink: string;
  /** Optional unique namespace if you might have multiple embeddeds on one page */
  namespace?: string;
  /** Height in pixels (string), e.g. "700px" */
  height?: string;
};

export default function CalEmbed({ calLink, namespace = 'bookcall', height = '880px' }: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      // Configure UI options here
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, [namespace]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-4">
      <Cal
        namespace={namespace}
        calLink={calLink}
        style={{ width: '100%', height, overflow: 'auto' }}
        // You can tweak the initial layout here too:
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}
