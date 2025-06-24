// src/components/icons/tech/NodeIcon.tsx
import { FC } from 'react';

export const NodeIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2zm0 2.03L18.5 8 12 12.12 5.5 8 12 3.88zm-8.5 5.49L11 13.5v7.38l-7.5-4.34V9.37zm9.5 7.38V13.5l7.5-4.13v7.17L13 20.75z"/>
  </svg>
);