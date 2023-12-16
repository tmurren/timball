import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function Bond() {
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
              
              <h1>Bond</h1>
              <Link className="btn" href="/playfields/JamesBond-Pro-Playfield-a98dfd.jpg">Pro Playfield</Link>
              <Link className="btn" href="/playfields/JamesBond-Premium-Playfield-4fnadf.jpg">Premium Playfield</Link>

              <div className="quick-notes__section">
                <h2>Skill Shots:</h2>
                <ul>
                  <li>Hold left flipper and plunge. Shoot the Q-Branch within 5 switch hits for 10M + 2.5M per skill shot</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Bird One Multiball:</h2>
                <ul>
                  <li>Shoot drop targets to light center lane for three shots to start multiball</li>
                  <li>Subsequent multiballs require all locks to be lit by drop targets</li>
                  <li>Hurry Up: Shoot side shots three times to get multiball extend (7 seconds to do so)</li>
                  <li>Shoot green shots for 1M and to make upper flipper shots worth double while blinking</li>
                  <li>Shoot enough shots to light rocket (green) for super jackpot</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Jetpack Multiball:</h2>
                <ul>
                  <li>Left eject lights left orbit to be shot three times to start multiball</li>
                  <li>Subsequent multiballs require each orbit shot to be lit by left eject</li>
                  <li>Hurry Up: Center lane starting at 5M, and locks that in as jackpot values</li>
                  <li>Shoot all red jackpot shots to light super jackpot at left ramp/orbit</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Modes:</h2>
                <ul>
                  <li>All modes are timed (60 seconds) and start at right inlane ball hold</li>
                  <li>Villian start on right ramp (3 shots) (pops change villian)</li>
                  <li>Henchmen start on side ramp (1 shot) (pops change henchman)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Playfield X:</h2>
                <ul>
                  <li>Playfield Awards (some number of spinner/bumpers/rocket hits award) may light a bond woman at upper orbit</li>
                  <li>Shoot orbit to collect women</li>
                  <li>Collecting bond women can be activated by pressing action button</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Extras:</h2>
                <ul>
                  <li>Extra Ball: Two upper orbit shots</li>
                  <li>Q-Branch is lit by hitting certain things (some modes are multiballs)</li>
                  <li>Bond inlanes/outlanes light High Stakes mystery every even completion</li>
                  <li>Shots to center target can light outlane ball save. Slingshots change outlane</li>
                  <li>Light center lights when you complete villian, henchman, and bond girl</li>
                  <li>Spelling Spectre lights Goldfinger target between ramps to start a hurry up. Complete hurry up to get perk for rest of game</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
