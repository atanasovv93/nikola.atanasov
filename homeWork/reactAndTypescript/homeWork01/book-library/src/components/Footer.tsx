const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem' }}>
      <p>© {year} My Book Library</p>
    </footer>
  );
};

export default Footer;
