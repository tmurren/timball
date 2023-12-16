import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function Venom() {
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

              <h1>Venom</h1>
              <Link className="btn" href="/playfields/Venom-Pro-Playfield-akjn3f-scaled-922x1536.webp">Pro Playfield</Link>
              <Link className="btn" href="/playfields/Venom-Premium-Playfield-akjdf-scaled-963x1536.webp">Premium Playfield</Link>

              <div className="quick-notes__section">
                <h2>Strat 1:</h2>
                <ul>
                    <li>Start with Flash first to get Sleeper Team-Up (add a ball & battle time) (2nd grid column)</li>
                    <li>Skill shot at right ramp to spot mini-mode</li>
                    <li>Complete grid column mini-modes, lock balls, and change to Gwen or Peter for better web combos</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Strat Nick Weyna:</h2>
                <ul>
                  <li>Complete center grid and then go to left (Gwen then Flash) (gets you flamethrower)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Multipliers:</h2>
                <ul>
                  <li>1X Grid - Bottom two grid lights for Eddie and Flash</li>
                  <li>7X Bell Tower - Shoot police ramp to light bell tower to add 1X. First is 2 police shots, then 3, then 4, ect. Unlit bell tower adds time to multipliers</li>
                  <li>1X Mayhem Multiball Only - Lock three balls in the right lock before start</li>
                  <li>7X with Hybrid team-up - Defeat Riot, Agony, Phage, and Lasher</li>
                  <li>1X to 5X Web Combos - 10 way combo to get 5X (Gwen & Peter = Good) (Eddie & Wolverine = Average)</li>
                  <li>1X Mystery - One of many options. 4th mystery if in comp play</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Characters:</h2>
                <ul>
                  <li>
                    <h3>Eddie Brock</h3>
                    <ul>
                      <li>Web Combos: Average</li>
                      <li>Host Combo: Center ramp &gt; left ramp &gt; 180 &gt; right orbit</li>
                      <li>
                        <h4 className="h3-styling">Perks</h4>
                        <ul>
                          <li>Start with 2 locks lit</li>
                          <li>More valueable mahem multiball</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="h3-styling">Skill Shots</h4>
                        <ul>
                          <li>180 ramp for spot mini-mode</li>
                          <li>Right orbit for big points</li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h3>Flash Thompson</h3>
                    <ul>
                      <li>Web Combos: Poor</li>
                      <li>Host Combo: Right ramp &gt; scoop &gt; left ramp &gt; scoop</li>
                      <li>
                        <h4 className="h3-styling">Perks</h4>
                        <ul>
                          <li>Extra wide bell tower</li>
                          <li>Ball 1 sleeper unlocked if first host of game (Action button add a ball in multiball) (More time in battle modes)</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="h3-styling">Skill Shots</h4>
                        <ul>
                          <li>Right ramp for spot mini-mode</li>
                          <li>Mystery scoop for light mystery</li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h3>Gwen Stacy</h3>
                    <ul>
                      <li>Web Combos: Good</li>
                      <li>Host Combo: Left loop &gt; center ramp &gt; left loop &gt; left ramp</li>
                      <li>
                        <h4 className="h3-styling">Perks</h4>
                        <ul>
                          <li>Double infected defeated</li>
                          <li>More valuable Doppleganger</li>
                          <li>Can start Doppleganger from bonus shot</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="h3-styling">Skill Shots</h4>
                        <ul>
                          <li>Left horseshoe for spot mini-mode</li>
                          <li>Right horseshoe for start Doppleganger</li>
                        </ul>
                      </li>
                      <li>(Prem/LE) Quick Doppelganger Multiball - Shots to right loop stopped by post and advances to mb</li>
                    </ul>
                  </li>

                  <li>
                    <h3>Peter Parker</h3>
                    <ul>
                      <li>Web Combos: Good</li>
                      <li>Host Combo: Left orbit &gt; left ramp &gt; 180 &gt; scoop</li>
                      <li>
                        <h4 className="h3-styling">Perks</h4>
                        <ul>
                          <li>Miles Morales Team-Up if chosen for first host of the game (+1 web combo for each combo made)</li>
                          <li>Easier & more valuable Carnage</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="h3-styling">Skill Shots</h4>
                        <ul>
                          <li>180 for spot mini-mode</li>
                          <li>Mystery scoop for light mystery</li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h3>Hulk</h3>
                    <ul>
                      <li>Web Combos: Poor</li>
                      <li>Host Combo: Right orbit &gt; scoop &gt; left orbit &gt; left ramp</li>
                      <li>
                        <h4 className="h3-styling">Skill Shots</h4>
                        <ul>
                          <li>Right orbit for spot mini-mode</li>
                          <li>Mystery scoop for light mystery</li>
                        </ul>
                      </li>
                      <li>Hulk Smash: Once per ball action button can be pressed to collect all shots</li>
                    </ul>
                  </li>

                  <li>
                    <h3>Wolverine</h3>
                    <ul>
                      <li>Web Combos: Average</li>
                      <li>Host Combo: Left orbit &gt; left ramp &gt; scoop &gt; center ramp</li>
                      <li>
                        <h4 className="h3-styling">Skill Shots</h4>
                        <ul>
                          <li>Left horseshoe for spot mini-mode</li>
                          <li>Mystery scoop for light mystery</li>
                        </ul>
                      </li>
                      <li>(Prem/LE) Quick Doppelganger Multiball - Shots to right loop stopped by post and advances to mb</li>
                    </ul>
                  </li>

                  <li>
                    <h3>Captain America</h3>
                    <ul>
                      <li>Web Combos: Poor</li>
                      <li>Host Combo: 180 &gt; center ramp &gt; left orbit &gt; left ramp</li>
                      <li>
                        <h4 className="h3-styling">Skill Shots</h4>
                        <ul>
                          <li>Right ramp for spot mini-mode</li>
                          <li>Mystery scoop for light mystery</li>
                        </ul>
                      </li>
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
