import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function HotWheels() {
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
              
              <h1>Hot Wheels</h1>
              <Link className="btn" href="/playfields/HotWheels.jpg">Playfield</Link>

              <div className="quick-notes__section">
                <h2>Stuff:</h2>
                <ul>      
                    <li>Turbo 10x is good to use when stacking modes and multiballs (spcecifically before shooting tricera mode shots)</li>
                    <li>Insert Color Codes: Mode shots (purple), epic shots (blue), multiball shots (green), incidental shots (red), and treasure hunts (yellow)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Skill Shot:</h2>
                <ul>
                    <li>Hold left flipper till tach hit 10, and plunge the ball so it rolls over the top switch and returns to the right inlane</li>
                    <li>Super skill shot is collected at the left orbits spinner</li>
                    <li>Missed hard plunges let you shoot the kickback shot for a last chance</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Modes:</h2>
                <ul>
                    <li>Light by hitting all battle targets (spinners move letters)</li>
                    <li>Easy first mode: any battle target, and the right saucers drop target, spot a letter</li>
                    <li>Start at the right saucer, or the left saucer for the first two modes (battle targets and spinners change modes when lit)</li>
                    <li>90 seconds long, but can be extended by hitting/lighting battle targets</li>
                    <li>Shoot purple shots, and complete with a right saucer shot, or the left saucer for the first two modes</li>
                    <li>T-Rex: Get 20 spins to light right ramp (do this three times)</li>
                    <li>Gorilla: Hit car targets, then both ramps, then the saucers</li>
                    <li>Tricera: Hit three lit shots and then the saucers</li>
                    <li>Cobras: Shoot shots before they relight and then shoot saucers (relight every 30 seconds)</li>
                    <li>Draven: Shoot right drop target, and then ul-light all the battle targets (final steps unknown ?)</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Multiballs:</h2>
                <ul>
                    <li>Car targets work towards add-a-ball ???</li>
                    <li>
                      <h3>Victory Lap:</h3>
                      <ul>
                          <li>Started when race is finished</li>
                          <li>Shoot jackpots shots multiple times to build super jackpot (focus on 1 or 2 shots at a time)</li>
                          <li>Collect super jackpot at the kickback</li>
                      </ul>
                    </li>
                    <li>
                      <h3>Loop Crash:</h3>
                      <ul>
                          <li>Light by shooting 6 alternating loops</li>
                          <li>Start at the left orbit</li>
                          <li>Shoot red arrows and pop bumpers to collect 10 crashes and light left orbit for super jackpot setup</li>
                          <li>Shoot left orbit again to collect super jackpot (repeat with growing crashes needed)</li>
                      </ul>
                    </li>
                    <li>
                      <h3>Track Builder Unlimited:</h3>
                      <ul>
                          <li>Shoot track builder drop target or left saucer 4 times to light</li>
                          <li>Shoot left saucer to start</li>
                          <li>15 seconds to hit right scoop for add a ball and double base jackpots</li>
                          <li>Shoot orbits and loops for jackpots</li>
                          <li>Enough jackpots lights super jackpots at the left saucer</li>
                          <li>Super jackpot starts quick hurry-up for mega jackpot at kickback</li>
                      </ul>
                    </li>
                    <li>
                      <h3>Car Chaos:</h3>
                      <ul>
                          <li>Light by collecting 40 cars</li>
                          <li>Start at the right scoop through a mystery Collector Case Reward</li>
                          <li>Shoot car targets to light jackpots at shots</li>
                      </ul>
                    </li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Turbo Boost (15 second 10x PF Multiplier):</h2>
                <ul>
                    <li>Qualify with pop bumper hits (number counts down on screen and carries over from ball to ball)</li>
                    <li>Collect at kickback (clears with drain)</li>
                    <li>One boost allowed per gear</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Epics:</h2>
                <ul>
                    <li>Light inlane/outlane inserts to qualify</li>
                    <li>Start at the lower right targets</li>
                    <li>Cars (8), loops (5), pops (20), ramps (5), ultimate (40 shots ?)</li>
                    <li>End/collect at the lower right targets</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Tachometer (PF Multiplier):</h2>
                <ul>
                    <li>Make shots for small tach values</li>
                    <li>Hit flashing RPM targets for larger tach values and pause tach decrease</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Red Line Mania:</h2>
                <ul>
                    <li>Max tachometer to start</li>
                    <li>Collect red arrow inserts to score jackpots</li>
                    <li>Collect all to get super jackpot (repeat)</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Bonus Multiplier:</h2>
                <ul>
                    <li>
                      <h3>Gears (view on display):</h3>
                      <ul>
                          <li>1st gear 1x (white)</li>
                          <li>2nd gear 2x (green)</li>
                          <li>3rd gear 3x (yellow)</li>
                          <li>4th gear 4x (orange)</li>
                          <li>5th gear 5x (red)</li>
                      </ul>
                    </li>
                    <li>Hit all 4 car standup targets to light end of ball bonus x target next to pop bumpers</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Extra Balls:</h2>
                <ul>
                    <li>Reaching score requirements (instant)</li>
                    <li>Two hero cars</li>
                    <li>Forty cars (stand ups)</li>
                    <li>Random collector case redward</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Hero Cars:</h2>
                <ul>
                    <li>Complete Car Chaos (Twin Mill)</li>
                    <li>Complete Draven Battle Mode (Roger Dodger)</li>
                    <li>Complete Victory Lap, Loop Crash, and Track Builder Unlimited multiballs (Sharkruiser)</li>
                    <li>Complete Ultimate Epic (Boneshaker)</li>
                    <li>Complete Red Line Mania (Rip Rod)</li>
                    <li>Collect all to qualify Legend Multiball</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
