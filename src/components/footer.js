import Image from 'next/image';
import { Flex } from '../../styles/globalsStyled';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [background, setBackground] = useState('/images/bg/bg_free_data_movement_dark.svg')
  useEffect(() => {
    const footerWebsite = document.querySelector('#footerWebsite');

    if (footerWebsite.classList.contains('bg-white')) {
      setBackground('/images/bg/bg_free_data_movement_light.svg');
    } else {
      setBackground('/images/bg/bg_free_data_movement_dark.svg');
    }
  }, []);
  return (
    <footer id="footerWebsite" className="bg-black">
      <div className="position-relative vh-100">
        <Image id="bgFreeDataMovement" src={background} layout="fill" alt="Free Data Movement" />
      </div>
      <div className="bg-black p-4">
        <Flex className="justify-content-between" as={Container}>
          <small style={{ color: '#aaa' }}>Web3 Consortium</small>
          <small style={{ color: '#aaa' }}><i>#FreeDataMovement</i></small>
          <small style={{ color: '#aaa' }} >© 2022 Web3 Consortium, All Rights Reserved</small>
        </Flex>
      </div>
    </footer>
  );
}