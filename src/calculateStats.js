const killsArr = [];
const deathsArr = [];
const assistsArr = [];
const kdaNumArr = [];

export const calculateStats = function (
  gamesData,
  setstats,
  setIsError,
  setErrorMsg,
  setshowStats,
  setInstructionHighlight,
  whichGames,
  radioChange,
  isError
) {
  let data = gamesData;

  if (data.match(/Preferred Position \(Rank\)|OP.GG\nOP.GG/g)) {
    data = data.split(/Preferred Position \(Rank\)|OP.GG\nOP.GG/g);
    data = data.slice(1, 2)[0];
  }
  // trzeba to zmienic
  if (whichGames === "victories") {
    data = gamesData
      .split(/ago\n/g)
      .filter((item) => item.match("Victory\n"))
      .join("");
  } else if (whichGames === "defeats") {
    data = gamesData
      .split(/ago\n/g)
      .filter((item) => item.match("Defeat\n"))
      .join("");
  }

  console.log(data);

  killsArr.length = 0;
  deathsArr.length = 0;
  assistsArr.length = 0;
  kdaNumArr.length = 0;

  // Validate
  if (data.length < 300) {
    setIsError(true);
    setErrorMsg("You need to paste more data");
    setshowStats({
      showAnyStats: false,
      showGeneral: false,
      showKDA: false,
      showRecords: false,
      showMVP: false,
      showTime: false,
    });
    return;
  }

  if (
    data.match(/(\d{2}) (\d{2}|\d)|[5-9] (\d{2}|\d)/g) &&
    !data.match(/(\d{2})m (\d{2}|\d)s|[5-9]m (\d{2}|\d)s/g)
  ) {
    setIsError(true);
    setErrorMsg(
      "This calculator supports only English language. Try changing the language to English in OP.GG."
    );
    setshowStats({
      showAnyStats: false,
      showGeneral: false,
      showKDA: false,
      showRecords: false,
      showMVP: false,
      showTime: false,
    });
    return;
  }

  if (data.match("Remake") && !data.match("Victory") && !data.match("Defeat")) {
    setIsError(true);
    setErrorMsg(`Try entering not only remake games.`);
    setshowStats({
      showAnyStats: false,
      showGeneral: false,
      showKDA: false,
      showRecords: false,
      showMVP: false,
      showTime: false,
    });
    return;
  }

  if (
    !data.match(/(\d{2})m (\d{2}|\d)s|[5-9]m (\d{2}|\d)s/g) &&
    !data.match(/(\d{2})m (\d{2}|\d)s|[5-9]m (\d{2}|\d)s/g)
  ) {
    setIsError(true);
    setErrorMsg(`Wrong data. Check out the instruction :)`);
    setInstructionHighlight(true);
    setshowStats({
      showAnyStats: false,
      showGeneral: false,
      showKDA: false,
      showRecords: false,
      showMVP: false,
      showTime: false,
    });
    return;
  }

  // Number of games
  const numOfVictories = data.match(/Victory/g) ? data.match(/Victory/g).length : 0;
  const numOfDefeats = data.match(/Defeat/g) ? data.match(/Defeat/g).length : 0;
  const numOfRemakes = data.match(/Remake/g) ? data.match(/Remake/g).length : 0;
  const numOfGames = numOfVictories + numOfDefeats;

  // Win ratio
  const winratio = ((numOfVictories / (numOfDefeats + numOfVictories)) * 100).toFixed(2);

  //  KDA
  const kda = data.match(/(\d{2}|\d) \/ (\d{2}|\d) \/ (\d{2}|\d)/g);
  calculateKda(kda);

  const numOfKills = killsArr.reduce((a, b) => Number(a) + Number(b));
  const numOfDeaths = deathsArr.reduce((a, b) => Number(a) + Number(b));
  const numOfAssists = assistsArr.reduce((a, b) => Number(a) + Number(b));

  let avgStats = "";

  if (
    (numOfKills / numOfGames) % 1 !== 0 ||
    (numOfDeaths / numOfGames) % 1 !== 0 ||
    (numOfAssists / numOfGames) % 1 !== 0
  ) {
    avgStats = `${(numOfKills / numOfGames).toFixed(1)} / ${(numOfDeaths / numOfGames).toFixed(
      1
    )} / ${(numOfAssists / numOfGames).toFixed(1)}`;
  } else {
    avgStats = `${numOfKills / numOfGames} / ${numOfDeaths / numOfGames} / ${
      numOfAssists / numOfGames
    }`;
  }

  const mostKills = killsArr.sort((a, b) => b - a)[0];
  const mostDeaths = deathsArr.sort((a, b) => b - a)[0];
  const mostAssists = assistsArr.sort((a, b) => b - a)[0];

  const avgKda = ((+numOfKills + +numOfAssists) / (+numOfDeaths === 0 ? 1 : +numOfDeaths)).toFixed(
    2
  );
  const highestKda = kdaNumArr.sort((a, b) => b - a)[0];

  const numOfDeathlessGames = data.match(/Perfect KDA/g) ? data.match(/Perfect KDA/g).length : 0;
  const percentOfDeathlessGames = ((numOfDeathlessGames / numOfGames) * 100).toFixed(2);

  //MVP and Ace
  const numOfMVP = data.match(/\nMVP\n/g) ? data.match(/\nMVP\n/g).length : 0;
  const percentOfMVP = ((numOfMVP / (numOfVictories === 0 ? 1 : numOfVictories)) * 100).toFixed(2);

  const numOfACE = data.match(/\nACE\n/g) ? data.match(/\nACE\n/g).length : 0;
  const percentOfACE = ((numOfACE / (numOfDefeats === 0 ? 1 : numOfDefeats)) * 100).toFixed(2);

  const numOfMvpOrAce = data.match(/\nMVP\n|\nACE\n/g) ? data.match(/\nMVP\n|\nACE\n/g).length : 0;
  const percentOfMvpOrAce = ((numOfMvpOrAce / numOfGames) * 100).toFixed(2);

  // CS
  const creepScoreArr = data.match(/CS (\d\d\d\d|\d\d\d|\d\d|\d)/g).map((item) => item.slice(3));
  const creepScore = (
    creepScoreArr.reduce((a, b) => Number(a) + Number(b)) / Number(numOfGames)
  ).toFixed(1);

  const CSPerMinuteArr = data
    .match(/(\(\d.\d\))|\(\d\)/g)
    .map((item) => item.slice(1, item.length - 1));
  const CSPerMinute = (
    CSPerMinuteArr.reduce((a, b) => Number(a) + Number(b)) / Number(numOfGames)
  ).toFixed(1);

  // Time
  const arrOfTime = data.match(/(\d{2})m (\d{2}|\d)s|[5-9]m (\d{2}|\d)s/g);

  calculateTime(arrOfTime);

  // setState
  if (whichGames)
    setstats({
      victories: numOfVictories,
      defeats: numOfDefeats,
      remakes: numOfRemakes,
      games: numOfGames,
      winratio: winratio,
      kills: numOfKills,
      deaths: numOfDeaths,
      assists: numOfAssists,
      mostKills: mostKills,
      mostDeaths: mostDeaths,
      mostAssists: mostAssists,
      highKDA: highestKda,
      KDA: avgKda,
      avgStats: avgStats,
      deathlessGames: numOfDeathlessGames,
      deathlessGamesPercent: percentOfDeathlessGames,
      MVP: numOfMVP,
      MVPPercent: percentOfMVP,
      ACE: numOfACE,
      ACEPercent: percentOfACE,
      MVPOrACE: numOfMvpOrAce,
      MVPOrACEPercent: percentOfMvpOrAce,
      creepScore: creepScore,
      CSPerMinute: CSPerMinute,
      gameTime: calculateTime(arrOfTime).avgTime,
      shortestGame: calculateTime(arrOfTime).shortestGame,
      longestGame: calculateTime(arrOfTime).longestGame,
    });
  if (!radioChange || (radioChange && isError)) {
    setshowStats({
      showAnyStats: true,
      showGeneral: true,
      showKDA: false,
      showRecords: false,
      showMVP: false,
      showTime: false,
    });
  }

  setIsError(false);
  setInstructionHighlight(false);
};

const calculateKda = (kda) => {
  const kdaSplit = [];
  kda.forEach((item) => kdaSplit.push(item.split(" / ")));

  kdaSplit.forEach((item) => {
    killsArr.push(item[0]);
    deathsArr.push(item[1]);
    assistsArr.push(item[2]);
    kdaNumArr.push(((Number(item[0]) + Number(item[2])) / (item[1] == 0 ? 1 : item[1])).toFixed(2));
  });
};

const calculateTime = (arrOfTime) => {
  const arrOfTimeSplit = [];
  const minutesArr = [];
  const secondsArr = [];
  arrOfTime.forEach((item) => arrOfTimeSplit.push(item.split(" ")));
  arrOfTimeSplit.forEach((item) => {
    minutesArr.push(item[0].slice(0, -1));
    secondsArr.push(item[1].slice(0, -1));
  });

  longestGame(arrOfTime, minutesArr, secondsArr);
  shortestGame(arrOfTime, minutesArr, secondsArr);

  let seconds = 0;

  if (arrOfTime.length === 1) {
    seconds = +minutesArr[0] * 60 + +secondsArr[0];
  } else {
    seconds =
      (minutesArr.reduce((a, b) => +a + +b) * 60 + secondsArr.reduce((a, b) => +a + +b)) /
      arrOfTime.length;
  }

  const avgMinutes = Math.floor(seconds / 60);
  const avgSeconds = Math.round(seconds - avgMinutes * 60);

  return {
    avgTime: `${avgMinutes}m : ${avgSeconds < 10 ? `0${avgSeconds}` : avgSeconds}s`,
    shortestGame: shortestGame(arrOfTime, minutesArr, secondsArr),
    longestGame: longestGame(arrOfTime, minutesArr, secondsArr),
  };
};

const longestGame = (arrOfTime, minutesArr, secondsArr) => {
  arrOfTime.sort((a, b) => {
    return Number(a.slice(0, 2)) - Number(b.slice(0, 2));
  });

  const biggestMin = minutesArr.at(-1);
  const biggestSecArr = [];

  for (let i = arrOfTime.length - 1; i >= 0; i--) {
    if (Number(arrOfTime[i].slice(0, 2)) == biggestMin) {
      biggestSecArr.push(secondsArr[i]);
    } else break;
  }

  const biggestSec = biggestSecArr.sort((a, b) => b - a)[0];
  return `${biggestMin}m : ${biggestSec < 10 ? `0${biggestSec}` : biggestSec}s`;
};

const shortestGame = (arrOfTime, minutesArr, secondsArr) => {
  const lowestMin = minutesArr[0];
  const lowestSecArr = [];

  for (let i = 0; i < arrOfTime.length; i++) {
    if (Number(arrOfTime[i].slice(0, 2)) == lowestMin) {
      lowestSecArr.push(secondsArr[i]);
    } else break;
  }

  const lowestSec = lowestSecArr.sort((a, b) => a - b)[0];

  return `${lowestMin}m : ${lowestSec < 10 ? `0${lowestSec}` : lowestSec}s`;
};
