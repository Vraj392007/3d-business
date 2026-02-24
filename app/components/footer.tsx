export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <h4>Marketplace</h4>
          <a href="/models">Browse Models</a>
          <a href="/upload">Sell Models</a>
          <a href="/pricing">Pricing</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
        </div>

      </div>

      <p className="copy">© 2026 3DModelsHub — All rights reserved</p>
    </footer>
  );
}