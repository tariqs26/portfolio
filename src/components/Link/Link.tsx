import './Link.css';

export default function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className='link' target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
}
