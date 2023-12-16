import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCirclePlus, faComment, faStar, faThumbsUp, faLocationDot, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const faiTrashCan = <FontAwesomeIcon icon={faTrashCan} />;
const faiCirclePlus = <FontAwesomeIcon icon={faCirclePlus} />;
const faiComment = <FontAwesomeIcon icon={faComment} />;
const faiStar = <FontAwesomeIcon icon={faStar} />;
const faiThumbsUp = <FontAwesomeIcon icon={faThumbsUp} />;
const faiLocationDot = <FontAwesomeIcon icon={faLocationDot} />;
const faiCircleUser = <FontAwesomeIcon icon={faCircleUser} />;

import Header from "../header";

export default async function Activity() {
  const getRecentActivity = async () => {
    const recentActivityRaw = await fetch('https://pinballmap.com/api/v1/user_submissions/list_within_range.json?lat=38.81000638904329;lon=-77.0575514790148;max_distance=30',
    { next: { revalidate: 10} }); // 300 = 5 min
    const recentActivityJson = await recentActivityRaw.json();
    return recentActivityJson;
  }
  const recentActivity = await getRecentActivity();

  const recentActivityReturn = recentActivity.user_submissions.map((activity:any) => {
    var submissionType = activity.submission_type;
    var submissionTypeClass: string;
    var submissionTypeIcon;
    switch (submissionType) {
      case 'remove_machine':
        submissionTypeClass = 'pinball-map-activity__list__item pinball-map-activity__list__item--removed';
        submissionTypeIcon = faiTrashCan;
        break;
      case 'new_lmx':
        submissionTypeClass = 'pinball-map-activity__list__item pinball-map-activity__list__item--added';
        submissionTypeIcon = faiCirclePlus;
        break;
      case 'new_condition':
        submissionTypeClass = 'pinball-map-activity__list__item pinball-map-activity__list__item--comment';
        submissionTypeIcon = faiComment;
        break;
      case 'new_msx':
        submissionTypeClass = 'pinball-map-activity__list__item pinball-map-activity__list__item--score';
        submissionTypeIcon = faiStar;
        break;
      case 'confirm_location':
        submissionTypeClass = 'pinball-map-activity__list__item pinball-map-activity__list__item--confirm';
        submissionTypeIcon = faiThumbsUp;
        break;
      case 'location_metadata':
        submissionTypeClass = 'pinball-map-activity__list__item pinball-map-activity__list__item--location-data';
        submissionTypeIcon = faiLocationDot;
        break;
      case 'ic_toggle':
        submissionTypeClass = 'pinball-map-activity__list__item pinball-map-activity__list__item--insider';
        submissionTypeIcon = faiCircleUser;
        break;
      default:
        submissionTypeClass = 'pinball-map-activity__list__item';
        submissionTypeIcon = '';
    }

    var updatedAt = activity.updated_at.substring(0,10);

    return <li className={submissionTypeClass} key={activity.id}>
      <span className="pinball-map-activity__list__item__icon">{submissionTypeIcon}</span>
      <h3>{activity.submission}</h3>
      <p>{updatedAt}</p>
    </li>
  });

  return (
    <main>
      
      <Header />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">

            <div className="paper">
              <h1>Pinball Map Recent Activity</h1>
              <div className="pinball-map-activity">
                <ul className="pinball-map-activity__list unlisted">
                  {recentActivityReturn}
                </ul>
              </div>
            </div>

            <p className="refresh-notice">Location data refreshes every 5 minutes from <a href="https://www.pinballmap.com">pinballmap.com</a></p>

          </div>
        </div>
      </div>
    </main>
  )
}
