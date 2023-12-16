import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function Got() {
  return (
    <main>      
      <div className="container-fluid">

        <div className="row">
          <div className="col-12">
              <Link href="/pin-notes" className="back">{faiChevronLeft}Back</Link>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="quick-notes paper">

              <h1>Game of Thrones</h1>
              <Link className="btn" href="/playfields/got-pro.jpg">Pro Playfield</Link>
              <Link className="btn" href="/playfields/got-le.jpg">Premium Playfield</Link>

              <div className="quick-notes__section">
                <h2>Friends Strategies:</h2>
                <ul>
                    <li><i>Stark Strat:</i> Loop center ramp, complete (1 done). Start whatever mode you want, if you fail take the free kill and that&apos;s 2 done. Repeat on ball 2, that&apos;s 3 done. Find one more mode somewhere to complete your 4th mode.</li>
                    <li><i>Hubbard:</i> Stark, make sure to double Targaryen with any other mode first so you can get a free level if you fail (especdially if you are at Targaryan&apos;s last level)</li>
                    <li><i>Wycoff:</i> Stack Greyjoy and Stark with black water multiball (says a score of 500-600 mill gets you a win)</li>
                    <li><i>Dan:</i> In league, he just goes Martel because that is an automatic 300-400 mill</li>
                    <li><i>Steph:</i> Greyjoy because it steals other house&apos;s persistent powers for whole game, and most recent house&apos;s action button. Modes are harder to complete though</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Tips:</h2>
                <ul>
                    <li>Short plunge and use ball save to pick off Baratheon and Tyrell</li>
                    <li>Start modes with Targaryen so you get a free level if you drain</li>
                    <li>Shoot battering ram at start of multiball whith ball save to advance playfield x</li>
                    <li>Add-a-ball is rewarded in pop bumpers during all multiballs</li>
                    <li>Green wildfire shot at battering ram advances jackpot values in Blackwater Multiball</li>
                    <li>Swords are lit at right ramp when modes are finished or as pop bumper award. Lets you advance playfield x past 3</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Winter is Coming:</h2>
                <ul>
                    <li>Shoot white shot combos to light Winter is Coming hurry-up at last shot in combo (flashing shot)</li>
                    <li>Completing 4 hurry-ups will light Winter has Come multiball</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Blackwater Multiball:</h2>
                <ul>
                    <li>Shoot two right standups to light lock at left ramp (once for first multiball)</li>
                    <li>Shoot 5 major sshots to collect jackpots and light super jackpot at battering ram</li>
                    <li>Super jackpot stays lit for 20 seconds and can be hit repeatedly</li>
                    <li>Repeat again, but jackpots have to be hit twice. Super is then worth double</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Wall Multiball:</h2>
                <ul>
                    <li>Complete top lanes 6 times to light multiball at dragon shot</li>
                    <li>Shoot 3 ramps to collect jackpots and light super jackpot at dragon</li>
                    <li>Then, shoot 3 loops for jackpots to light super jackpot at dragon</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Hand of the King Mini Wizard:</h2>
                <ul>
                    <li>Complete 4 houses to light mode at center ramp</li>
                    <li>Complete sets of shots to light super jackpot at battering ram</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
