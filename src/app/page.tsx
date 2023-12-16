// https://jsonplaceholder.typicode.com/users
// https://api.ifpapinball.com/v1/player/75765?api_key=71b6ed213f6dca99b8a35dec41f7e1f8
// https://pinballmap.com/api/v1/users/7205/list_fave_locations.json
// https://pinballmap.com/api/v1/user_submissions/list_within_range.json?lat=38.81000638904329;lon=-77.0575514790148;max_distance=30

import Header from "./header";
import IfpaPlayer from './ifpaPlayer'
import IfpaCalendar from './ifpaCalendar'

export default function Home() {
  return (
    <main>

      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">

            <h1 className="hidden-for-accessibility">Timball</h1>

            <IfpaPlayer />

            <IfpaCalendar />

          </div>
        </div>
      </div>
    </main>
  )
}
