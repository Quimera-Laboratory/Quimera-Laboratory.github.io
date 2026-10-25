import React, { useRef } from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', id }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <article
      id={id}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`bento-card p-6 sm:p-9 flex flex-col justify-between ${className}`}
    >
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </article>
  );
};
