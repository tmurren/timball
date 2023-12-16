import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function Godzilla() {
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
              
              <h1>Godzilla</h1>
              <Link className="btn" href="/playfields/Godzilla-Pro-Playfield-1-scaled.jpg">Pro Playfield</Link>
              <Link className="btn" href="/playfields/Godzilla-Premium-Playfield-scaled.jpg">Premium Playfield</Link>

              <div className="quick-notes__section">
                <h2>Strategy?</h2>
                <ul>
                    <li>Switch hits light bridge attack at magnet. Do this 4 (?) times to light multiball</li>
                    <li>During ball save hit heat ray spinner and then bridge attack. After that, get your ramps and start a battle. Keep tank shots in mind</li>
                    <li>Choose Megalon for first battle</li>
                    <li>Get out of first city (Tokyo) as soon as you complete a battle. Go to London instead</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Loops:</h2>
                <ul>
                    <li>2x loops from magnagrab</li>
                    <li>Consecutive loops can get you an ally</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Skill Shots:</h2>
                <ul>
                    <li>Short Plunge - 500,000, +1x, and +5 ball save</li>
                    <li>Behind Upper Flipper - 5 mill, +1x, and +8 ball save. Additional shots add 1 mill (plus x2)</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Modes: (each ramp then scoop) (yellow)</h2>
                <ul>
                    <li>Ebirah - Three spinners then pop</li>
                    <li>Titanosaurus - 3 powerline targets left to right, and then maser canon target (maybe one more shot ???)</li>
                    <li>Gigan - Shoot 8 ramps (combos better)</li>
                    <li>Megalon - One shot lit and can time out & move (need 7 shots). Hitting it lights another timed shot for x2 (can go up to 5x). He disappears, but you shoot switches to get him back.</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Godzilla Multiball:</h2>
                <ul>
                    <li>Shoot/hit building and up ramps 8(?) times to light locks through building</li>
                    <li>Add-a-ball on right spinner</li>
                    <li>Shoot lit arrows to fill damage meter for super. Shots can be repeated up to three times for highers scores.</li>
                    <li>Super jackpot at building</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Mecha-Godzilla Multiball:</h2>
                <ul>
                    <li>Shoot right spinner, then shield standups, and then spinner again to start</li>
                    <li>Shoot all lits shots for jackpots, and then the shield targets for jackpot and relight other jackpots</li>
                    <li>Super jackpot value builds with right spinner, and collects in tail whip lane</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Bridge Attack Multiball:</h2>
                <ul>
                    <li>Get certain number of switch hits to light captive ball (hit)</li>
                    <li>Repeat until bridge integrity is low, then shoot a ramp will start multiball</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Tank Attack Multiball:</h2>
                <ul>
                    <li>Shoot lit tank shots to start multiball at scoop</li>
                    <li>Shoot tank shots as they advance towards Godzilla</li>
                </ul>
              </div>
              

              <div className="quick-notes__section">
                <h2>Destruction Jackpot:</h2>
                <ul>
                    <li>Raise score with multiple destruction jackpots and in Mechagodzilla Multiball</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Tesla Strike:</h2>
                <ul>
                    <li>Hit all three standups, then roving standup 4 times</li>
                    <li>Shoot spinner to build value, and collect at blue shot</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Fighter Attack:</h2>
                <ul>
                    <li>Rollover 6 lit inlanes to start</li>
                    <li>Shoot red arrow hurryups (5 for ally, 10 for extra ball), then left spinner to collect</li>
                </ul>
              </div>
              
              <div className="quick-notes__section">
                <h2>Monster Rampage:</h2>
                <ul>
                    <li>Left spinner lane advances/spells &quot;rampage&quot;</li>
                    <li>Keep shooting single lit shot until it times out and moves (yellow). Moves L&gt;R from left ramp. 4mill +1 mill for consecutive shots</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Heat Ray:</h2>
                <ul>
                    <li>Charges at center spinner</li>
                    <li>Used by holding action button</li>
                </ul>
              </div>


              <div className="quick-notes__section">
                <h2>Godzilla Power-Up:</h2>
                <ul>
                    <li>Complete tasks, and then shoot scoop for award (upgrade)</li>
                    <li>3 tailwhips for +2</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Planet X Mini Wizard Mode:</h2>
                <ul>
                    <li>Defeat a monster in each city</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
