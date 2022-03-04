import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({armyList, onRemoveFromArmy, onBotDelete}) {
  
  const botCards = armyList.map((bot) => {
    return <BotCard key={bot.id} bot={bot} onBotClicked={onRemoveFromArmy} onBotDelete={onBotDelete} />
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botCards}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
