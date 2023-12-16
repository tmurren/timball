'use client';
import React, {useState} from 'react'

const IfpaPlayer = () => {
  const [ifpaPlayerNumber, setIfpaPlayerNumber] = useState(''); // 75765 85502
  
  function getInputValue(e: any) {
    setIfpaPlayerNumber(e.target.value);
  }

  interface IfpaTypes {
    player: PlayerTypes,
    player_stats: PlayerStatsTypes,
  }

  interface PlayerTypes {
    first_name: string,
    last_name: string,
    player_id: number,
  }

  interface PlayerStatsTypes {
    current_wppr_rank: number,
    ratings_rank: number,
    efficiency_value: number,
  }

  const [ifpaUrl, setIfpaUrl] = useState<IfpaTypes | null>(null);
  const [ifpaSubmitted, setIfpaSubmitted] = useState(false);

  const loadIfpaUrl = async () => {
    const newUrl = await fetch('https://api.ifpapinball.com/v1/player/' + ifpaPlayerNumber + '?api_key=71b6ed213f6dca99b8a35dec41f7e1f8');
    const ifpaUserInfo = await newUrl.json();
    setIfpaUrl(ifpaUserInfo);
    setIfpaSubmitted(true);
  }

  return (
    <div className="paper">
      { ifpaSubmitted === false && (
        <div className="ifpaSubmit">
          <h2 className="h1-styling">IFPA Player Submit</h2>
          <div className="form-group">
            <label htmlFor="ifpaNumber" className="hidden-for-accessibility">Enter IFPA Number</label>
            <input type="text" className="form-control" id="ifpaNumber" placeholder="IFPA Number (example: 75765)" onInput={getInputValue} />
          </div>
          <button className="btn" onClick={loadIfpaUrl}>Submit</button>
        </div>
      )}
    
      { ifpaSubmitted && (
        <div className="ifpaPlayerInfo">
          <h2 className="h1-styling">{ifpaUrl!.player.first_name} {ifpaUrl!.player.last_name} - #{ifpaUrl!.player.player_id}</h2>
          <ul>
            <li>Rank: {ifpaUrl!.player_stats.current_wppr_rank}</li>
            <li>Rating: {ifpaUrl!.player_stats.ratings_rank}</li>
            <li>Efficiency Value: {ifpaUrl!.player_stats.efficiency_value}%</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default IfpaPlayer