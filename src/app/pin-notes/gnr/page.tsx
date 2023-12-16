import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function GNR() {
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

              <h1>Guns N Roses</h1>
              <Link className="btn" href="/playfields/GnR_PF_SE.jpg">SE Playfield</Link>
              <Link className="btn" href="/playfields/GnR_PF_LE.jpg">CE Playfield</Link>

              <div className="quick-notes__section">
                <h2>Stuff:</h2>
                <ul>
                    <li>Shoot Slash spinner and pyro target during multiballs</li>
                    <li>JAM right inlane starts hurry up at JAM target to the left of the scoop. Spots missing band members</li>
                    <li>Select album and song by hitting that albums stand up target</li>
                    <li>Low song level is 20, and great would be 100. Epic would be 150+</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Multiballs: Increase song level by getting jackpots before starting a song</h2>
                <ul>
                    <li><i>Lights</i> - Left ramp</li>
                    <li><i>Amp</i> - Left inlane</li>
                    <li><i>Crowd</i> - Skill shot and upper right flipper</li>
                    <li><i>Pyro</i> - Pyro target</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Songs:</h2>
                <ul>
                    <li><i>November Rain</i> - Switch hit based mode (Use Your Illusion I - Right ramps left standup)</li>
                    <li><i>Welcome to the Jungle</i> - Lots of shots (Appetite for Destruction album - Left ramps right standup)</li>
                    <li><i>Sweet Child of Mine</i> - Lots of shots (Appetite for Destruction album - Left ramps right standup album)</li>
                    <li><i>AVOID - Mr. Brownstone</i> (Appetite for Destruction album - Left ramps right standup album)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Patches:</h2>
                <ul>
                    <li><i>Fender</i> - Active band member shots spot another member (Matt & Steph Tip)</li>
                    <li><i>Gun</i> - Increase all patch scoring</li>
                    <li><i>Rose</i> - Axl spotted for the rest of the game</li>
                    <li><i>Axl&apos;s Mic Fuzzy</i> - Better scoring increase</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Patch Combos:</h2>
                <ul>
                    <li><i>Gun and Rose</i> - Increase Welcome to the Jungle scoring (Dan Tip)</li>
                    <li><i>Bra and Underwear</i> - Double bonus for rest of game</li>
                    <li><i>Poster and T-Shirt</i> - Rick it Meter flipper decay halved</li>
                    <li><i>All 4 albums</i> - 2x album levels</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
