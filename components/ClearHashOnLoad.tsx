"use client";

import { useEffect } from 'react';

export default function ClearHashOnLoad() {
  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;

      // Run only once per tab session to avoid fighting normal in-page anchor navigation.
      const key = 'initial-top-scroll-done';
      if (sessionStorage.getItem(key) === '1') return;

      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
      sessionStorage.setItem(key, '1');
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
