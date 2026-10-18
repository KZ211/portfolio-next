'use client';

import { useEffect, useRef } from 'react';

// Staggered entrance for the parts of a section. Children marked with
// `data-reveal` rise in once, in order, when the block enters the viewport.
// Content stays visible without JavaScript: the hidden state only applies
// once <html> has the `js` class (set in app/layout.js).
export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.setAttribute('data-shown', '');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </Tag>
  );
}
