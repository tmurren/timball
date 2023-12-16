import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function Mando() {
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

              <h1>Mando</h1>
              <Link className="btn" href="/playfields/Mandalorian-Pro-Playfield-01-afkjhadf-scaled-917x1536.jpg">Pro Playfield</Link>
              <Link className="btn" href="/playfields/Mandalorian-Premium-Playfield-01-knnfad-scaled-917x1536.jpg">Premium Playfield</Link>

              <div className="quick-notes__section">
                <h2>Mission:</h2>
                <ul>
                    <li>Shoot both ramps then vuk to start (or spot ramps at left scoop for first 2 missions)</li>
                    <li>175 bescar at vuk</li>
                    <li>All modes are timed</li>
                    <li>Change mission by hitting targets surrounding right ramp area</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Encounters:</h2>
                <ul>
                    <li>Keep shooting left ramp to qualify and play</li>
                    <li>Good points with encounters currently</li>
                    <li>Can play during mission only, but timer pauses ???</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Multiball:</h2>
                <ul>
                    <li>Cycle mode with right two target bank (flashing insert represents mode)</li>
                    <li>Ice spider multiball super jackpot reset is currently broken. Keep shooting to recollect</li>
                    <li>Light Razor Crest Hurry-Up by playing a hunter mode (three left standups, then a lit inlane, then each orbit)</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Hunter:</h2>
                <ul>
                    <li>Complete left 3 target bank</li>
                    <li>Start at selected inlane for 25-second mode</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Ambush:</h2>
                <ul>
                    <li>Random encounter</li>
                    <li>Shoot horseshow then right ramp</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Scope:</h2>
                <ul>
                    <li>Always check if lit in the left inlane (from left ramp shot)</li>
                    <li>Left = 2 items from foundry</li>
                    <li>Middle = beskar</li>
                    <li>Right = points</li>
                    <li>Target = 200 beskar</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Beskar:</h2>
                <ul>
                    <li>Play hunter modes, or hitting hunter targets and pop bumpers (shots?)</li>
                    <li>Need over 200 beskar to light foundry (or collect 1 beskar if over 200 to light foundry)</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Foundry:</h2>
                <Image src="/mando-foundry.jpg" width={981} height={471} alt="Mando Foundry" />
                {/* <ul>
                  <li>Adds to Ball Save - 200 Armor</li>
                    <li>Mission Smartbomb - 175 Whistling Birds</li>
                    <li>Complete an Encounter - 175 Rising Phoenix</li>
                    <li>2x Shots - ??? Flamethrower</li>
                    <li>Add a Ball - 100 Amban Rifle</li>
                    <li>Start Mission - 175 Continue Your Journey</li>
                    <li>Light Multiball - 300 Light Razor Crest</li>
                    <li>Light New Encounter Level - 100 Light Encounter</li>
                    <li>Light Scope - 75 Return Lane is Lit</li>
                    <li>Light Outlane Ball Save - 200 Light Heal</li>
                    <li>Light Extra Ball - 400 Extra Ball</li>
                    <li>Adds Playfiled X - ??? Multiplier</li>
                </ul> */}
              </div>
              
              <div className="quick-notes__section">
                <h2>Playfield X:</h2>
                <ul>
                    <li>Scope, Hunter, or Boba Fett (1x)</li>
                    <li>3 inserts lit = 5x</li>
                    <li>Usually on 20-30 second timer</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Extra Ball:</h2>
                <ul>
                    <li>2 missions</li>
                    <li>600 beskar at vuk</li>
                    <li>Child mystery award</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Action Button:</h2>
                <ul>
                    <li><i>Flamethrower (Red)</i> - Shots lit for one time 2x value</li>
                    <li><i>Whistling Birds (Yellow)</i> - Collects shot in mission</li>
                    <li><i>Rising Phoenix (Red)</i> - &quot;Flatten&quot; mini playfield during encounter</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Backhands:</h2>
                <ul>
                    <li>Left vuk</li>
                    <li>left ramp</li>
                    <li>Right ramp</li>
                    <li>Horseshoe</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Pro Differences:</h2>
                <ul>
                    <li>Horseshoe doesn&apos;t have ramp scoop</li>
                    <li>No Grogu magnet</li>
                    <li>No moving upper playfield, but flipper strength instead</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
