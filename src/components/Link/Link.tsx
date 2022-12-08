import './Link.css';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};
export default function Link({ href, children }: LinkProps) {
  return (
    <a href={href} className='link' target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
}
