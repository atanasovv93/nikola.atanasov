type HeaderProps = {
  title: string;
  username: string;
};

const Header = ({ title, username }: HeaderProps) => {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <h1>{title}</h1>
      <p>Welcome, {username}!</p>
    </header>
  );
};

export default Header;
