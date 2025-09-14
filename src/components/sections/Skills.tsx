import { useState, useEffect } from 'react';

export default function Skills() {
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
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {/* Languages - Page 1 */}
        <div
          className="skills-page"
          style={{
            display: displayedPage === 1 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 1 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>SQL</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>

        {/* Frameworks - Page 2 */}
        <div
          className="skills-page"
          style={{
            display: displayedPage === 2 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 2 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="skill-category">
            <h3>Frameworks</h3>
            <ul>
              <li>FastAPI</li>
              <li>Django</li>
              <li>Django REST Framework</li>
            </ul>
          </div>
        </div>

        {/* Databases - Page 3 */}
        <div
          className="skills-page"
          style={{
            display: displayedPage === 3 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 3 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MariaDB</li>
              <li>DynamoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>

        {/* DevOps - Page 4 */}
        <div
          className="skills-page"
          style={{
            display: displayedPage === 4 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 4 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="skill-category">
            <h3>DevOps</h3>
            <ul>
              <li>Docker</li>
              <li>Terraform</li>
              <li>GitHub Actions</li>
              <li>GitLab CI/CD</li>
            </ul>
          </div>
        </div>

        {/* Cloud - Page 5 */}
        <div
          className="skills-page"
          style={{
            display: displayedPage === 5 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 5 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="skill-category">
            <h3>Cloud (AWS)</h3>
            <ul>
              <li>Lambda</li>
              <li>Cognito</li>
              <li>Aurora</li>
              <li>API Gateway</li>
              <li>S3</li>
            </ul>
          </div>
        </div>

        {/* Tools - Page 6 */}
        <div
          className="skills-page"
          style={{
            display: displayedPage === 6 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 6 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Jira</li>
              <li>Redmine</li>
              <li>Postman</li>
              <li>SonarQube</li>
              <li>Sentry</li>
            </ul>
          </div>
        </div>

        {/* Practices - Page 7 */}
        <div
          className="skills-page"
          style={{
            display: displayedPage === 7 ? 'block' : 'none',
            opacity: isTransitioning && activePage === 7 ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="skill-category">
            <h3>Practices</h3>
            <ul>
              <li>TDD</li>
              <li>Agile/Scrum</li>
              <li>Microservices</li>
              <li>Async Communication</li>
            </ul>
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
          <button
            className={`pagination-btn ${activePage === 4 ? 'active' : ''}`}
            onClick={() => handlePageChange(4)}
          >
            4
          </button>
          <button
            className={`pagination-btn ${activePage === 5 ? 'active' : ''}`}
            onClick={() => handlePageChange(5)}
          >
            5
          </button>
          <button
            className={`pagination-btn ${activePage === 6 ? 'active' : ''}`}
            onClick={() => handlePageChange(6)}
          >
            6
          </button>
          <button
            className={`pagination-btn ${activePage === 7 ? 'active' : ''}`}
            onClick={() => handlePageChange(7)}
          >
            7
          </button>
        </div>
      </div>
    </section>
  );
}
