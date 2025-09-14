import { useState, useEffect } from 'react';

export default function Projects() {
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
    <section id="projects" className="py-20 px-10 bg-white">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="projects-container">
        <div
          className="projects-page"
          style={{
            display: displayedPage === 1 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 1 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="project-grid grid md:grid-cols-2 gap-8">
            <div className="project-card p-6 border rounded-lg shadow">
              <a
                href="https://github.com/pedroifgonzalez/fastapi-project"
                target="_blank"
                className="project-card-link"
              >
                <h3 className="font-bold text-xl">API Gateway</h3>
                <p className="text-gray-600 mt-2">
                  A scalable API gateway built with FastAPI and React for monitoring and managing
                  microservices.
                </p>
                <span className="view-project">View project →</span>
              </a>
            </div>
            <div className="project-card p-6 border rounded-lg shadow">
              <a
                href="https://github.com/pedroifgonzalez/django-cms"
                target="_blank"
                className="project-card-link"
              >
                <h3 className="font-bold text-xl">Content Management System</h3>
                <p className="text-gray-600 mt-2">
                  A modern CMS built with Django and React for content creators and publishers.
                </p>
                <span className="view-project">View project →</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="projects-page"
          style={{
            display: displayedPage === 2 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 2 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="project-grid grid md:grid-cols-2 gap-8">
            <div className="project-card p-6 border rounded-lg shadow">
              <a href="#" target="_blank" className="project-card-link">
                <h3 className="font-bold text-xl">E-commerce Platform</h3>
                <p className="text-gray-600 mt-2">
                  A full-featured e-commerce platform with NestJS backend and React frontend.
                </p>
                <span className="view-project">View project →</span>
              </a>
            </div>
            <div className="project-card p-6 border rounded-lg shadow">
              <a href="#" target="_blank" className="project-card-link">
                <h3 className="font-bold text-xl">Dashboard Analytics</h3>
                <p className="text-gray-600 mt-2">
                  Real-time analytics dashboard built with PostgreSQL, FastAPI, and React.
                </p>
                <span className="view-project">View project →</span>
              </a>
            </div>
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
        </div>
      </div>
    </section>
  );
}
