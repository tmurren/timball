import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const faiCircleCheck = <FontAwesomeIcon icon={faCircleCheck} />;

import Header from "../header";

export default async function Locations() {
  const getLocations = async () => {
    const locationsRaw = await fetch('https://pinballmap.com/api/v1/users/7205/list_fave_locations.json',
    { next: { revalidate: 10} }); // 300 = 5 min
    const locationsJson = await locationsRaw.json();
    return locationsJson;
  }
  const locations = await getLocations();
  
  locations.user_fave_locations.sort( function( a:any, b:any ) {
    a = a.location.name.toLowerCase();
    b = b.location.name.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
  });
  
  const currentlyTracking: string = 'Venom';
  let trackedMachineFound: boolean = false;

  const locationsReturn = locations.user_fave_locations.map((favorite:any) => {
    const machineList = favorite.location.machines.map((machine:any) => {
      const machineNameTrim = machine.name.replace(/ *\([^)]*\) */g, "").trim();
      if (machineNameTrim === currentlyTracking) {
        trackedMachineFound = true;
        return <li key={machine.id} className="machine-tracking-found">{faiCircleCheck}{machine.name}</li>
      } else {
        return <li key={machine.id}>{machine.name}</li>
      }
    });
    return <div key={favorite.location.id} className="col-12 col-md-6 col-lg-3">
      <div className="paper">
        <h2>{favorite.location.name}</h2>
        <ul className="pinball-map__fav-locations__machines unlisted">
          {machineList}
        </ul>
      </div>
    </div>
  });

  return (
    <main className="pinball-map">
      <Header />

      <div className="container-fluid">
        
        <div className="row">
          <div className="new-pin-tracking col-12">
              { trackedMachineFound === false ? (<div className="new-pin-tracking__searching"><p>Currently tracking {currentlyTracking}</p></div>) : (<div className="new-pin-tracking__found"><p><Image src="/icon-pinball.svg" width={35} height={35} alt="Pinball Icon" />Found {currentlyTracking}!</p></div>)}
          </div>
        </div>

        <div className="pinball-map__fav-locations row">
          {locationsReturn}
        </div>

        <div className="row">
         <div className="col-12">
         <p className="refresh-notice">Location data refreshes every 5 minutes from <a href="https://www.pinballmap.com">pinballmap.com</a></p>
         </div>
      </div>

      </div>
    </main>
  )
}
