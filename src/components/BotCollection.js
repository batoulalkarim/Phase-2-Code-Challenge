import React from "react";
import BotCard from './BotCard';


function BotCollection({bots, onAddToArmy, onBotDelete}) {
  const botCards = bots.map((bot) => {
    return <BotCard key={bot.id} bot={bot} onBotClicked={onAddToArmy} onBotDelete={onBotDelete}/>
  })
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {botCards}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
