import { useState, useEffect } from 'react';

export default function Blog() {
  const [activePage, setActivePage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedPage, setDisplayedPage] = useState(1);

  // Handle page transitions
  useEffect(() => {
    if (activePage !== displayedPage) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayedPage(activePage);
        setIsTransitioning(false);
      }, 300); // Match this with CSS transition time
      return () => clearTimeout(timer);
    }
  }, [activePage, displayedPage]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber !== activePage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActivePage(pageNumber);
      }, 50);
    }
  };

  return (
    <section id="blog">
      <h2>Blog</h2>
      <div className="blog-container">
        <div
          className="blog-page"
          style={{
            display: displayedPage === 1 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 1 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="blog-posts">
            <article className="blog-post">
              <a
                target="_blank"
                href="https://medium.com/@pedroifgonzalez/two-underrated-pieces-of-software-development-1f5690ef2d4d"
                className="blog-post-link"
              >
                <h3>Two Underrated Pieces of Software Development</h3>
                <p>
                  Once you realize how important these pieces are, you won't want to miss them...
                </p>
                <span className="read-more">Read more →</span>
              </a>
            </article>
          </div>
        </div>
        <div
          className="blog-page"
          style={{
            display: displayedPage === 2 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 2 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="blog-posts">
            <article className="blog-post">
              <a target="_blank" href="#" className="blog-post-link">
                <h3>Building Scalable APIs with FastAPI</h3>
                <p>
                  Learn how to structure your FastAPI projects for maximum scalability and
                  maintainability...
                </p>
                <span className="read-more">Read more →</span>
              </a>
            </article>
          </div>
        </div>
        <div
          className="blog-page"
          style={{
            display: displayedPage === 3 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 3 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="blog-posts">
            <article className="blog-post">
              <a target="_blank" href="#" className="blog-post-link">
                <h3>React Best Practices in 2025</h3>
                <p>
                  The React ecosystem continues to evolve. Here are the patterns and practices you
                  should adopt...
                </p>
                <span className="read-more">Read more →</span>
              </a>
            </article>
          </div>
        </div>
        <div className="content-pagination">
          <button
            className={`pagination-btn ${activePage === 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          <button
            className={`pagination-btn ${activePage === 2 ? 'active' : ''}`}
            onClick={() => handlePageChange(2)}
          >
            2
          </button>
          <button
            className={`pagination-btn ${activePage === 3 ? 'active' : ''}`}
            onClick={() => handlePageChange(3)}
          >
            3
          </button>
        </div>
      </div>
    </section>
  );
}
