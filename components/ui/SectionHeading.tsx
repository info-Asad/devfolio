import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', className)}>
      <h2 className="relative inline-block text-2xl md:text-3xl font-bold uppercase tracking-wider">
        <AnimatedText text={title} />
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary mt-2"></span>
      </h2>
    </div>
  );
}