(()=>{window.app={blocks:{},screens:{},timers:[],renderScreen:e=>{r[e]||console.log("Такого экрана нет!"),window.app.mainNode.replaceChildren(),r[e]()},renderBlock:(r,n)=>{e[r]||console.log("Такого блока нет!"),e[r](n)},mainNode:document.querySelector(".game"),userLevel:"0",levels:[3,6,12],cards:[]};const e=window.app.blocks,r=window.app.screens;r.startScreen=renderStartScreen,e.startBtn=renderStartButton,e.levelNumber=renderLevelNumber,r.gameScreen=renderGameScreen,r.loseWindow=renderLoseWindow,r.winWindow=renderWinWindow,e.newGame=renderNewGame,e.cards=renderCards,e.clickHandler=cardClickHandler,window.app.renderScreen("startScreen")})();