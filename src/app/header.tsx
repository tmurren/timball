'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faClipboard, faNewspaper, faShop } from '@fortawesome/free-solid-svg-icons';

const faiRankingStar = <FontAwesomeIcon icon={faRankingStar} />;
const faiClipboard = <FontAwesomeIcon icon={faClipboard} />;
const faiNewspaper = <FontAwesomeIcon icon={faNewspaper} />;
const faiShop = <FontAwesomeIcon icon={faShop} />;

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <ul className="header-nav unlisted inline">
        <li><Link href="/" className={pathname == '/' ? 'header-nav__current-page' : ''}>{faiRankingStar}IFPA</Link></li>
        <li><Link href="/pin-notes" className={pathname == '/pin-notes' ? 'header-nav__current-page' : ''}>{faiClipboard}Pin Notes</Link></li>
        <li><Link href="/activity" className={pathname == '/activity' ? 'header-nav__current-page' : ''}>{faiNewspaper}Activity</Link></li>
        <li><Link href="/locations" className={pathname == '/locations' ? 'header-nav__current-page' : ''}>{faiShop}Locations</Link></li>
      </ul>
    </header>
  )
}
