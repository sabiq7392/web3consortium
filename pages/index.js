import Hero from '../src/components/pages/index/Hero';
import OpenData from '../src/components/pages/index/OpenData';
import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg';
import { AnchorWithIcons } from '../styles/styledIndex';

export default function Home() {
  return (
    <>
      <Hero />
      <OpenData />
      <div className="bg-black text-center" style={{ padding: 114 }}>
        <Link href="/learn-web-3" passHref><AnchorWithIcons>Learn More About Web 3 <CgArrowLongRight /></AnchorWithIcons></Link>
      </div>
      <div className="bg-black text-center" style={{ padding: 114 }}>
        <Link href="#join-us" passHref><AnchorWithIcons>Interested in joining the team researching, supporting and launching these projects? <CgArrowLongRight /></AnchorWithIcons></Link>
      </div>
    </>
  )
}
