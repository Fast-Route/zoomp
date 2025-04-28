import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  className?: string;
  src?: string;
  loop?: boolean;
}

export default function Loading({ className, src, loop }: LoadingProps) {
  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay
      className={cn('w-64 h-64', className)}
    />
  );
};
