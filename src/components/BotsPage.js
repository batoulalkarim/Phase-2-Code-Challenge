import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [armyList, setArmyList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(res => res.json())
    .then(data => {
      setBots(data);
    })
  }, [])

  function handleAddToArmy(bot){
    const foundIndex = armyList.findIndex(item => bot.id === item.id);
    if (foundIndex === -1) {
      setArmyList([...armyList, bot]);
    } else {
      console.log("This bots already in the army!")
    }
  }

  function handleRemoveFromArmy(bot){
    const foundIndex= armyList.findIndex(item => bot.id === item.id);
    if (foundIndex === -1) {
      console.log("Bot isn't in the army!")
    } else {
      const copyArray = [...armyList];
      copyArray.splice(foundIndex, 1);

      setArmyList(copyArray);
    }
  }

  function handleBotDelete(event, bot){
    event.stopPropagation();
    const foundIndex = bots.findIndex(item => bot.id === item.id);
    if (foundIndex === -1) {
      console.log("you found the secret message! Hello!")
    } else {
      const copyArray = [...bots];
      copyArray.splice(foundIndex, 1);

      setBots(copyArray)
    }
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })

    console.log("Deleteing id" + bot.id);
  }
  return (
    <div>
      <YourBotArmy armyList={armyList} onRemoveFromArmy={handleRemoveFromArmy} onBotDelete={handleRemoveFromArmy}/>
      <BotCollection bots={bots} onAddToArmy={handleAddToArmy} onBotDelete={handleBotDelete} />
    </div>
  )
}

export default BotsPage;
