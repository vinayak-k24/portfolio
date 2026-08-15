"use client";

import { useEffect } from 'react';

export default function ClearHashOnLoad() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.location.hash) {
        // Remove fragment without reloading the page and ensure we're at the top
        history.replaceState(null, '', window.location.pathname + window.location.search);
        window.scrollTo({ top: 0 });
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
