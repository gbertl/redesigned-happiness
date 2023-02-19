import Image from 'next/image';
import Container from './Container';
import logo from '../../public/logo.png';

const Header = () => {
  return (
    <nav className="mt-10">
      <Container>
        <div className="w-[90%] flex justify-between items-center mx-auto">
          <Image src={logo} alt="" className="w-[41px]" />

          <ul className="flex items-center gap-10 font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
