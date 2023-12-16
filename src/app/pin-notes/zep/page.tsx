import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const faiChevronLeft = <FontAwesomeIcon icon={faChevronLeft} />;

export default function Zep() {
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

              <h1>Led Zeppelin</h1>
              <Link className="btn" href="/playfields/LedZeppelin-Pro-Playfield-3kjnra-scaled-807x1536.jpg">Pro Playfield</Link>
              <Link className="btn" href="/playfields/LedZeppelin-Premum-Playfield2-rgrardf-scaled-949x1536.jpg">Premium Playfield</Link>

              <div className="quick-notes__section">
                <h2>Stuff:</h2>
                <ul>
                    <li>Skillshot is plunging into lit LED target (controlled by flippers)</li>
                    <li>Add-a-ball in multiball by hitting icarus target three times, or action button (1 hit green, 3 hits red)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Band icon insert multipliers:</h2>
                <ul>
                    <li>End combos at targets to add to multipliers (0.2x for a 2-way combo)</li>
                    <li>Complete target bank to collect band member</li>
                    <li>Collect all band members to light Icarus to start multipliers</li>
                    <li>Hitting left flipper shot will add to, or extend, playfiled x timer</li>
                    <li>Orange &gt; yellow &gt; green &gt; blue &gt; red &gt; orange (again)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Band Boosts (Action Button)</h2>
                <ul>
                    <li>Start with 1, and store up to 5 (3 or more is super band boost)</li>
                    <li>Add more by completing a song (1), going platinum with song (1), or changing song (2)</li>
                    <li><i>Single ball</i>: 5x to current combo value (10x super), ends combo, and terminates combo at lowest multiplied band member (2 lowest super)</li>
                    <li><i>Multiball</i>: Regular counts as 1 Icarus add-a-ball hit, and super counts as 3</li>
                    <li>Solid means you can&apos;t use it, and blinking means you can use it</li>
                    <li>Green means regular boost, and red means super boost</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Songs</h2>
                <ul>
                    <li>Complete a song by collecting 5 gold records</li>
                    <li>Change songs at top scoop (also adds 2 band boosts)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Zepplin Multiball</h2>
                <ul>
                    <li>Shoot left ramp 3 times to start (complete rock target bank to relight)</li>
                    <li>Shoot 1 of the 4 red shots, and then you can shoot its blinking combo shot for a 2x jackpot (farthest shot from flipper to left or right)</li>
                    <li>After 4 jackpot shots are made, supers light at left scoop and upper flipper shot</li>
                    <li>Complete ROCK, LED, and ZEP targets or shooting the upper flipper shot before collecting the supers adds 1x each (double the multiplier if super is collected at upper flipper shot)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Tour Multiball</h2>
                <ul>
                    <li>Shoot right ramp and then left scoop to select objectives</li>
                    <li>Complete objectives and then shoot left scoop to start (blinking white?)</li>
                    <li><i>US 1977</i>: Switches build jackpot, which is collected at the left scoop. Super is at upper flipper shot for 3x jackpot</li>
                    <li><i>UK 1971</i>: Shoot left scoop, and then shoot all shots to the right of it. Repeat until super is lit at right orbit</li>
                    <li><i>Earl&apos;s Court</i>: Complete target bank for jackpot, and then lit shot for jackpot</li>
                    <li><i>US 1975</i>: Shoot lit ramps</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Extra Balls</h2>
                <ul>
                    <li>5 gold records</li>
                    <li>4 completed songs</li>
                    <li>Start 2 tour multiballs</li>
                    <li>8 Zeppelin awards (upper flipper shot)</li>
                </ul>
              </div>

              <div className="quick-notes__section">
                <h2>Zeppelin Awards (Upper Flipper Shot)</h2>
                <ul>
                    <li>Adds/extends to multiplier timer</li>
                    <li>2x song scoring value (when song arrow lit)</li>
                    <li>Award super spinner, then pops, then slings, and then ramps for certain ammount of hits for rest of ball</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
