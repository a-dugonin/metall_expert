// components/ui/Button.tsx
import Link from 'next/link';

export default function Button({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block bg-primary text-white px-8 py-3 rounded-md
               hover:bg-primary-dark transition-colors font-medium"
    >
      {children}
    </Link>
  );
}