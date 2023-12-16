import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function Avengers() {
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

              <h1>Avengers</h1>
              <Link className="btn" href="/playfields/Avengers-Pro-Playfield-4gakjda-scaled.jpg">Pro Playfield</Link>
              <Link className="btn" href="/playfields/Avengers-Premium-Playfield-elfnasd-scaled.jpg">Premium Playfield</Link>

              <div className="quick-notes__section">
                <h2>Stuff:</h2>
                <ul>
                    <li>Hubbard: Start with mind gem. Hit disk a bunch. Put it on aventer that is level 2 for smart missle collect (black widow?)</li>
                    <li>Full plunge during start animation and hit middle drop target for 2x arc reactor square</li>
                    <li>&quot;Super&quot; modes are worth good points, go for them</li>
                    <li>Right inlane gives you double disc spinning</li>
                    <li>
                      <h3>Portal Locks:</h3>
                      <ul>
                          <li>4 combo lights</li>
                          <li>Secret skill shot</li>
                          <li>Hawkeye challenge</li>
                          <li>Computer grid</li>
                      </ul>
                    </li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Thor Multiball</h2>
                <ul>
                    <li>If black widow is lvl 1, rolling through left inlane before hitting captive ball collects two letters</li>
                    <li>1 lit shot then captive ball</li>
                    <li>2 lit shots then captive ball</li>
                    <li>3 lit shots then captive ball</li>
                    <li>4 lit shots then captive ball</li>
                    <li>Super jackpot lit at tower (20x jackpot value)</li>
                    <li>Pops lane and upper orbit score double jackpots</li>
                    <li>Add-a-ball is spelling strange at disk and shooting sanctum</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Iron Man Multiball</h2>
                <ul>
                    <li>Left ramp and gauntlet ramp (tower)</li>
                    <li>Left orbit and right orbit (tower)</li>
                    <li>Pops lane and captain marvel (tower)</li>
                    <li>Tower and upper orbit (tower)</li>
                    <li><i>Super Jackpot:</i> Shoot tower with one ball, and then try with a second ball. After this, disc is lit</li>
                    <li>Add-a-ball is completing iron lanes and shooting sanctum target</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Time Gem <span style={{ color: 'orange' }}>(Orange)</span> - Proxima Midnight:</h2>
                <ul>
                    <li><i>Perk: Add time to master timer, and increase ball save timers</i></li>
                    <li>Shoot left and right ramps then shoot lit drop target on grid</li>
                    <li>Repeat three times</li>
                    <li>Good with iron man multiball</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Reality Gem <span style={{ color: '#b0b000' }}>(Yellow)</span> - Ebony Maw:</h2>
                <ul>
                    <li><i>Perk: Shot Multiplier</i></li>
                    <li>Shoot 8 lit shots to win</li>
                    <li>Shoot disc to increase points</li>
                    <li>Pops shot and upper loop score double</li>
                    <li>Good with thor multiball</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Power Gem <span style={{ color: 'red' }}>(Red)</span> - Black Dwarf:</h2>
                <ul>
                    <li><i>Perk: Easier Avenger power-ups and power-up memory</i></li>
                    <li>3 pairs of shots lit. Middle shot is 30% damage, and side shots are 15%</li>
                    <li>Shot values raised at disc and spinner</li>
                    <li>Final blow is at left orbit</li>
                    <li><i>Critical Hit Order:</i> Captain marvel, pops lane, upper loop, and tower</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Mind Gem <span style={{ color: 'blue' }}>(Blue)</span> - Supergiant:</h2>
                <ul>
                    <li><i>Perk: Action button collects shot or chooses grid award</i></li>
                    <li>Shoot a shot, and then shoot the spinner</li>
                    <li>More shots before spinner is better</li>
                    <li>After doing this 3 times, shoot the sanctum target (unless you shot fast blinking lights)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Space Gem <span style={{ color: 'purple' }}>(Purple)</span> - Corvus Glaive:</h2>
                <ul>
                    <li><i>Perk: Shoot shot to move gems</i></li>
                    <li>Shoot combos to attack (using shots that feed the right inlane switch to parry, and attacking on left orbit?)</li>
                    <li>Attack three times</li>
                    <li>Final blow is at black widow and black panther shots</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Soul Gem <span style={{ color: 'green' }}>(Green)</span> - Collect Avengers Mini-Wizard:</h2>
                <ul>
                    <li><i>Perk: Soul gem jackpot, replay gem quests, black order multiball extender</i></li>
                    <li>Right orbit, left ramp, gauntlet ramp, left orbit, captive ball, drop targets, captain marvel, tower</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Extra Balls:</h2>
                <ul>
                    <li>3 completions of bullseye targets</li>
                    <li>2 waves of super targets</li>
                    <li>8 trophies</li>
                    <li>Hawkeye challenge (level 2)</li>
                    <li>Computer grid award</li>
                    <li>Captain marvel 50 ramps or 1500 spins</li>
                    <li>50 combos</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
