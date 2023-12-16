import Link from 'next/link';

import Header from "../header";

export default function PinNotes() {
  const venom = {
    background: "url(/backglasses/venom.jpg) no-repeat center center / cover"
  }

  const fooFighters = {
    background: "url(/backglasses/foo-fighters.jpg) no-repeat center center / cover"
  }

  const bond = {
    background: "url(/backglasses/bond.jpg) no-repeat center center / cover"
  }

  const rush = {
    background: "url(/backglasses/rush.webp) no-repeat center center / cover"
  }

  const godzilla = {
    background: "url(/backglasses/godzilla.webp) no-repeat center center / cover"
  }

  const hotWheels = {
    background: "url(/backglasses/hot-wheels.png) no-repeat center center / cover"
  }

  const mando = {
    background: "url(/backglasses/mando.webp) no-repeat center center / cover"
  }

  const gnr = {
    background: "url(/backglasses/gnr.jpg) no-repeat center center / cover"
  }

  const zep = {
    background: "url(/backglasses/zep.webp) no-repeat center center / cover"
  }

  const avengers = {
    background: "url(/backglasses/avengers.webp) no-repeat center center / cover"
  }

  const got = {
    background: "url(/backglasses/got.jpg) no-repeat center center / cover"
  }

  const demoMan = {
    background: "url(/backglasses/demoMan.jpg) no-repeat center center / cover"
  }

  return (
    <main>
      <Header />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">

            <div className="paper">
              
              <h1>Pin Notes</h1>
            
              <ul className="pin-notes-list row unlisted">
                <li className="col-6"><Link href="/pin-notes/venom" style={venom}><span className="hidden-for-accessibility">Venom</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/foo-fighters" style={fooFighters}><span className="hidden-for-accessibility">Foo Fighters</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/bond" style={bond}><span className="hidden-for-accessibility">Bond</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/rush" style={rush}><span className="hidden-for-accessibility">Rush</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/godzilla" style={godzilla}><span className="hidden-for-accessibility">Godzilla</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/hot-wheels" style={hotWheels}><span className="hidden-for-accessibility">Hot Wheels</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/mando" style={mando}><span className="hidden-for-accessibility">Mando</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/gnr" style={gnr}><span className="hidden-for-accessibility">Guns N Roses</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/zep" style={zep}><span className="hidden-for-accessibility">Led Zeppelin</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/avengers" style={avengers}><span className="hidden-for-accessibility">Avengers</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/got" style={got}><span className="hidden-for-accessibility">Game of Thrones</span></Link></li>
                <li className="col-6"><Link href="/pin-notes/demo-man" style={demoMan}><span className="hidden-for-accessibility">Demolition Man</span></Link></li>
              </ul>

            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
