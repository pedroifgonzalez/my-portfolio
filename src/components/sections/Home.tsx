interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <nav id="sections">
      <p>
        <a className="current-page">Home</a>
      </p>
      <p>
        <a onClick={() => onNavigate('portfolio')} style={{ cursor: 'pointer' }}>
          Portfolio
        </a>
      </p>
      <p>
        <a onClick={() => onNavigate('blog')} style={{ cursor: 'pointer' }}>
          Blog
        </a>
      </p>
      <p>
        <a onClick={() => onNavigate('skills')} style={{ cursor: 'pointer' }}>
          Skills
        </a>
      </p>
      <p>
        <a onClick={() => onNavigate('contact')} style={{ cursor: 'pointer' }}>
          Contact
        </a>
      </p>
      <p>
        <a onClick={() => onNavigate('about')} style={{ cursor: 'pointer' }}>
          About
        </a>
      </p>
    </nav>
  );
}
