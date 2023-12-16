import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function FooFighters() {
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
              
              <h1>Foo Fighters</h1>
              <Link className="btn" href="/playfields/foo-fighters-pro.jpg">Pro Playfield</Link>
              <Link className="btn" href="/playfields/foo-fighters-prem.jpg">Premium Playfield</Link>

              <div className="quick-notes__section">
                <h2>Notes:</h2>
                <ul>
                  <li>Dave combo gives you 2x? (Right ramp &gt; left ramp &gt; right orbit ?)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Skill Shot:</h2>
                <ul>
                  <li>Drop targets give you lit power up at level 1</li>
                  <li>Far left &quot;Rami&quot; shot combo with side ramp shot (keep doing this for six shots)</li>
                  <li>Can just short plunge into Godzilla area and let it come down</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Modes:</h2>
                <ul>
                  <li>Shoot three white arrows to light mode at left ramp (spell van)</li>
                  <li>14 shots per mode to complete (timed)</li>
                  <li>Completing three modes lights Austin mini-wizard mode</li>
                  <li>New York (Yellow) - Shoot blinking yellow shot. Spinner moves blinking shot and also counts as a shot after some number of spins</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Drop Targets:</h2>
                <ul>
                  <li>First hit on drop targets locks in roving light on power up</li>
                  <li>Complete drop target bank to award power up. 10 seconds to shoot standup behind drop targets to increase power up</li>
                  <li>If standup behind drop targets is hit before all targets are dropped, drop targets will reset and award bonus x (two middle lights by drops)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Main Multiball:</h2>
                <ul>
                  <li>Hit targets then lock a ball. Then, shoot the locked ball</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Area 51 Multiball:</h2>
                <ul>
                  <li>Shoot side ramp to start it</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Playfield X:</h2>
                <ul>
                  <li>Keep shooting right orbit to build</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Boom Button:</h2>
                <ul>
                  <li>Shoot UFO captive ball when lit to build boom button (lit with inlanes)</li>
                  <li>First boom button is 10-ish shots and the next two are 5-ish</li>
                  <li>So, you may want to only use the first one if you are draining or you really need it</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Ball Save:</h2>
                <ul>
                  <li>Right ball save is lit by shooting standup target above  right inlane 3-ish times</li>
                  <li>Left ball save is lit by hitting lower left standups</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Mystery:</h2>
                <ul>
                  <li>Lit by hitting lower left standups</li>
                  <li>Collect there too?</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Extra Balls:</h2>
                <ul>
                  <li>Complete all bot standup targets?</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Combotron:</h2>
                <ul>
                  <li>?</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
