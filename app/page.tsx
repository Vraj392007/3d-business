import ModelCard from "./components/modelscard";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover & Sell Professional 3D Models</h1>
          <p>
            Explore thousands of high-quality 3D assets for games,
            architecture, product design, and 3D printing.
          </p>

          <div className="hero-buttons">
            <a href="/models" className="btn-primary">
              Browse Models
            </a>
            <a href="/upload" className="btn-outline">
              Sell Your Models
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED MODELS */}
      <section className="section">
        <h2 className="section-title">Featured Models</h2>

        <div className="grid">
          <ModelCard title="Modern Chair" type="Furniture" price="$19" />
          <ModelCard title="Sports Car" type="Vehicle" price="$49" />
          <ModelCard title="Office Tower" type="Architecture" price="$79" />
          <ModelCard title="Game Character" type="Character" price="$29" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="section alt">
        <h2 className="section-title">Why Use Our Platform</h2>

        <div className="features">
          <div className="feature">
            <h3>Interactive 3D Preview</h3>
            <p>View models directly in your browser before purchase.</p>
          </div>

          <div className="feature">
            <h3>Secure Marketplace</h3>
            <p>Protected payments and verified creators.</p>
          </div>

          <div className="feature">
            <h3>Multiple Formats</h3>
            <p>Download in OBJ, FBX, STL, GLB and more.</p>
          </div>

          <div className="feature">
            <h3>Creator Earnings</h3>
            <p>Upload and earn from your 3D work.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Start Selling Your 3D Models Today</h2>
        <p>Join our creator community and reach global buyers.</p>
        <a href="/upload" className="btn-primary big">
          Upload Your First Model
        </a>
      </section>

      <Footer />

    </main>
  );
}