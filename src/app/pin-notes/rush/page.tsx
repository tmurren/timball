import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function Rush() {
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
              
              <h1>Rush</h1>
              <Link className="btn" href="/playfields/Rush-Pro-Playfield-afda-scaled.jpg">Pro Playfield</Link>
              <Link className="btn" href="/playfields/Rush-Premium-Playfield-hnad-scaled.jpg">Premium Playfield</Link>

              <div className="quick-notes__section">
                <h2>Stuff:</h2>
                <ul>
                  <li>Low bonus so don&apos;t worry about tilting</li>
                  <li>Shot hit scoring/whatever in top right screen</li>
                  <li>Upper loops increase famous meter???</li>
                  <li>No delay / &quot;debounce&quot; on time machine shot to light multiball right now if half-ramped</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Time Machine Lights</h2>
                <ul>
                  <li>Left Red Blinking: Mode ready</li>
                  <li>Middle Yellow Light: 1-2-3 combo jackpot</li>
                  <li>Right Green Lit: Time Machine (lit at start)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Skill Shot(s):</h2>
                <ul>
                  <li>Short plunge to side ramp: 1,500,000 +5 sec ball save</li>
                  <li>???</li>
                </ul>
              </div>

              <div className="quick-notes__section">
              <h2>Action Button</h2>
              <ul>
                <li>Hit to toggle diverter direction (illustrated by the two red mars domes above outlanes)</li>
                <li>Holding button in song mode will use an album/song mode &quot;weapon&quot; (boom button)</li>
                <li>Holding button in multiball will use an album/song multiball add-a-ball</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Modes (Top Left Screen):</h2>
                <ul>
                  <li>Shoot 2 records to light mode at time machine (each record shot also changes mode)</li>
                  <li>Keep shooting records before time machine to boost mode scoring (10% each). Light all records to make them blink again to keep building</li>
                  <li>These records are different colors, and correspond to different modes. Shooting them provide higher scores for that mode</li>
                  <li>In the mode, shots with both records and arrows worth more (Boosted?)</li>
                  <li>After beating a mode, one record will be rainbow colored and counts towards all modes</li>
                  <li>
                    <h3>Tom Sawyer (Cyan) Moving Pictures Album:</h3>
                    <ul>
                      <li>Shoot each orbit</li>
                      <li>Then, shoot each ramp</li>
                      <li>Then, shoot 8 arrow shots</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Limelight (Lime) Moving Pictures Album:</h3>
                    <ul>
                      <li>Shoot arrow shot to start 15 second hurry up at next arrow show to build fame percentage, and keep going till 100%.</li>
                      <li>If you get to 0% shoot time machine to start again.</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Working Man (Orange) Rush Album:</h3>
                    <ul>
                      <li>Progress clock from 9am to 5pm by hitting switches.</li>
                      <li>Lit arrows are worth more, and are worth even more at left orbit, side ramp, and side loop.</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Spirit of the Radio (Blue) Permanent Waves Album:</h3>
                    <ul>
                      <li>Spinner adds arrow shots and increases jackpot value.</li>
                      <li>Arrow shots grow jackpot and give points.</li>
                      <li>Top left lane shots cashes out the jackpot (5 jackpots to end mode).</li>
                    </ul>
                  </li>
                  <li>
                    <h3>The Big Money (Pink) Power Windows Album:</h3>
                    <ul>
                      <li>Shoot lit arrows to qualify jackpot at time machine.</li>
                      <li>First 3 arrow shots, then 4, and then 5.</li>
                      <li>Shoot same shots again before collecting to multiply jackpot.</li>
                    </ul>
                  </li>
                  <li>
                    <h3>La Villa Strangiato (Purple) Hemispheres Album:</h3>
                    <ul>
                      <li>Shoot 12 individually lit arrow shots.</li>
                      <li>Combos worth more.</li>
                      <li>Shots 8-11 can be completed with inner loop</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Combo 1-2-3 Lights (Middle Left Screen):</h2>
                <ul>
                  <li>Shoot 1-2-3 to complete a combo, and light the time machine for a jackpot and to collect an Album (Yellow Light)</li>
                  <li>Keep shooting shots with 1-2-3 inserts lit to build jackpot before collecting</li>
                  <li>Jackpot can light super jackpot at the side ramp (Super Jackpot worth the most)</li>
                  <li>Albums give you a &quot;boom&quot; button press if you are playing a song mode from that album</li>
                  <li>
                    <table>
                      <thead>
                        <tr>
                            <th>Album:</th><th>Shot 1:</th><th>Shot 2:</th><th>Shot 3:</th><th>Related Songs:</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Signals</td><td>Right Ramp</td><td>Spinner</td><td>Side Ramp</td><td>Subdivisions</td>
                        </tr>
                        <tr>
                          <td>Moving Pictures</td><td>Right Ramp</td><td>Spinner</td><td>Inner Loop</td><td>Limelight, Red Barchetta, Tom Sawyer</td>
                        </tr>
                        <tr>
                          <td>Hemispheres</td><td>Right Ramp</td><td>Right Orbit</td><td>None</td><td>La Villa Strangiato</td>
                        </tr>
                        <tr>
                          <td>Clockwork Angels</td><td>Spinner</td><td>Side Ramp</td><td>Left Lane</td><td>Headlong Flight</td>
                        </tr>
                        <tr>
                          <td>Permanent Waves</td><td>Spinner</td><td>Inner Loop</td><td>Side Ramp</td><td>Freewill, The Spirit of Radio</td>
                        </tr>
                        <tr>
                          <td>Power Windows</td><td>Spinner</td><td>Inner Loop</td><td>Inner Loop</td><td>The Big Money</td>
                        </tr>
                        <tr>
                          <td>Vapor Trails</td><td>Left Lane</td><td>Left Orbit</td><td>Side Ramp</td><td>One Little Victory</td>
                        </tr>
                        <tr>
                          <td>Snakes & Arrows</td><td>Left Lane</td><td>Left Orbit</td><td>Side Loop</td><td>Far Cry</td>
                        </tr>
                        <tr>
                          <td>Fly by Night</td><td>Left Orbit</td><td>Side Ramp</td><td>Left Lane</td><td>Fly By Night</td>
                        </tr>
                        <tr>
                          <td>Rush</td><td>Left Orbit</td><td>Inner Loop</td><td>Side Ramp</td><td>Working Man</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Instrument Boost Drop Targets (Bottom Left):</h2>
                <ul>
                  <li>
                    <h3>Collect to Boost:</h3>
                    <ul>
                      <li>Bass: 2x Combo</li>
                      <li>Guitar: 2x Spinner</li>
                      <li>Drums: 2x Pops</li>
                    </ul>
                  </li>
                  <li>Collect instrument sets for multiballs (1st is 1 set) (Bottom Right)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Mystery:</h2>
                <ul>
                  <li>Collect inlanes to light mystery at the scoop</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>RUSH Targets:</h2>
                <ul>
                  <li>Complete targets to start hurry-up somewhere? Bastille Day?</li>
                  <li>Right ramp builds hurry-up value</li>
                  <li>At some point lights ball save (changes outlane with each flip)???</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Drum Solo:</h2>
                <ul>
                  <li>Unlit under upper flipper shot changes color of pop bumper and boosts it</li>
                  <li>Lit under upper flipper shot starts timed drum solor scoring at pop bumpers</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Extra Balls:</h2>
                <ul>
                  <li>10 ramp shots (100k & 100k+25K after that? $$$?)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Time Machine Multiball (Topish Right Screen):</h2>
                <ul>
                  <li>Shoot time machine 4 times to light, and start, one of three multiballs</li>
                  <li>Shot to left of time machine should change multiball mode before starting</li>
                  <li>Subdivisions</li>
                  <li>Fly By Night</li>
                  <li>
                    <h3>Red Barchetta:</h3>
                    <ul>
                      <li>Switches and shots build RPM</li>
                      <li>Then you need pops to switch gears</li>
                      <li>Repeat</li>
                      <li>Add-a-ball is at lit bottom scoop(lights???)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Far Cry Multiball (Middle Right Screen):</h2>
                <ul>
                  <li>Shoot ramp standups and ramp to light lock at scoops</li>
                  <li>Repeat until both scoops blink for multiball</li>
                  <li>Collect Far Cry album, Snakes & Arrows, before to have add-a-ball at action button?</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Freewill Multiball:</h2>
                <ul>
                  <li>Shoot target behind the drop target bank to start freewill multiball</li>
                  <li>Shoot locked ball to build and start multiball (Prem & LE)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Headlong Flight Multiball (Middle Right Screen):</h2>
                <ul>
                  <li>Shoot pop bumpers to progress the drum clock from 9am to 5pm</li>
                  <li>Shoot under flipper shot when &quot;drum solo&quot; is lit to advance drum clock too?</li>
                  <li>Shoot right orbit to start</li>
                  <li>Add-a-Ball in the mystery?</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Wizard Modes:</h2>
                <ul>
                  <li>Cybnus X-1: Book One</li>
                  <li>Cybnus X-1: Book Two</li>
                  <li>2112</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Bonus:</h2>
                <ul>
                  <li>Spinner advances to light bonus x at upper flipper loop shot</li>
                  <li>
                    <h3>Points:</h3>
                    <ul>
                      <li>Instruments</li>
                      <li>Drum Clock</li>
                      <li>Records</li>
                      <li>Time Machine</li>
                      <li>1-2-3 Combo</li>
                      <li>Targets (RUSH?)</li>
                    </ul>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
