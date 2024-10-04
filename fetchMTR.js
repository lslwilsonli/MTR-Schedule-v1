const mtrLine = {
  KTL: {
    text: "Kwun Tong Line",
    color: "#7ed957",
    sta: [
      { code: "WHA", name: "Whampoa" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Prince Edward" },
      { code: "SKM", name: "Shek Kip Mei" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "LOF", name: "Lok Fu" },
      { code: "WTS", name: "Wong Tai Sin" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "CHH", name: "Choi Hung" },
      { code: "KOB", name: "Kowloon Bay" },
      { code: "NTK", name: "Ngau Tau Kok" },
      { code: "KWT", name: "Kwun Tong" },
      { code: "LAT", name: "Lam Tin" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
    ],
  },
  ISL: {
    text: "Island Line",
    color: "#004aad",
    sta: [
      { code: "KET", name: "Kennedy Town" },
      { code: "HKU", name: "HKU" },
      { code: "SYP", name: "Sai Ying Pun" },
      { code: "SHW", name: "Sheung Wan" },
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "WAC", name: "Wan Chai" },
      { code: "CAB", name: "Causeway Bay" },
      { code: "TIH", name: "Tin Hau" },
      { code: "FOH", name: "Fortress Hill" },
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "TAK", name: "Tai Koo" },
      { code: "SWH", name: "Sai Wan Ho" },
      { code: "SKW", name: "Shau Kei Wan" },
      { code: "HFC", name: "Heng Fa Chuen" },
      { code: "CHW", name: "Chai Wan" },
    ],
  },
  TWL: {
    text: "Tsuen Wan Line",
    color: "#ff3131",
    sta: [
      { code: "CEN", name: "Central" },
      { code: "ADM", name: "Admiralty" },
      { code: "TST", name: "Tsim Sha Tsui" },
      { code: "JOR", name: "Jordan" },
      { code: "YMT", name: "Yau Ma Tei" },
      { code: "MOK", name: "Mong Kok" },
      { code: "PRE", name: "Price Edward" },
      { code: "SSP", name: "Sham Shui Po" },
      { code: "CSW", name: "Cheung Sha Wan" },
      { code: "LCK", name: "Lai Chi Kok" },
      { code: "MEF", name: "Mei Foo" },
      { code: "LAK", name: "Lai King" },
      { code: "KWF", name: "Kwai Fong" },
      { code: "KWH", name: "Kwai Hing" },
      { code: "TWH", name: "Tai Wo Hau" },
      { code: "TSW", name: "Tsuen Wan" },
    ],
  },
  SIL: {
    text: "South Island Line",
    color: "#cbcd09",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "OCP", name: "Ocean Park" },
      { code: "WCH", name: "Wong Chuk Hang" },
      { code: "LET", name: "Lei Tung" },
      { code: "SOH", name: "South Horizons" },
    ],
  },
  TCL: {
    text: "Tung Chung Line",
    color: "#f6943d",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "OLY", name: "Olympic" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "LAK", name: "Lai King" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "SUN", name: "Sunny Bay" },
      { code: "TUC", name: "Tung Chung" },
    ],
  },
  EAL: {
    text: "East Rail Line",
    color: "#5ce1e6",
    sta: [
      { code: "ADM", name: "Admiralty" },
      { code: "EXC", name: "Exhibition Centre" },
      { code: "HUH", name: "Hung Hom" },
      { code: "MKK", name: "Mong Kok East" },
      { code: "KOT", name: "Kowloon Tong" },
      { code: "TAW", name: "Tai Wai" },
      { code: "SHT", name: "Sha Tin" },
      { code: "FOT", name: "Fo Tan" },
      { code: "RAC", name: "Racecourse" },
      { code: "UNI", name: "University" },
      { code: "TAP", name: "Tai Po Market" },
      { code: "TWO", name: "Tai Wo" },
      { code: "FAN", name: "Fanling" },
      { code: "SHS", name: "Sheung Shui" },
      { code: "LOW", name: "Lo Wu" },
      { code: "LMC", name: "Lok Ma Chau" },
    ],
  },
  TML: {
    text: "Tuen Ma Line",
    color: "#8d6019",
    sta: [
      { code: "WKS", name: "Wu Kai Sha" },
      { code: "MOS", name: "Ma On Shan" },
      { code: "HEO", name: "Heng On" },
      { code: "TSH", name: "Tai Shui Hang" },
      { code: "SHM", name: "Shek Mun" },
      { code: "CIO", name: "City One" },
      { code: "STW", name: "Sha Tin Wai" },
      { code: "CKT", name: "Che Kung Temple" },
      { code: "TAW", name: "Tai Wai" },
      { code: "HIK", name: "Hin Keng" },
      { code: "DIH", name: "Diamond Hill" },
      { code: "KAT", name: "Kai Tak" },
      { code: "SUW", name: "Sung Wong Toi" },
      { code: "TKW", name: "To Kwa Wan" },
      { code: "HOM", name: "Ho Man Tin" },
      { code: "HUH", name: "Hung Hom" },
      { code: "ETS", name: "East Tsim Sha Tsui" },
      { code: "AUS", name: "Austin" },
      { code: "NAC", name: "Nam Cheong" },
      { code: "MEF", name: "Mei Foo" },
      { code: "TWW", name: "Tsuen Wan West" },
      { code: "KSR", name: "Kam Sheung Road" },
      { code: "YUL", name: "Yuen Long" },
      { code: "LOP", name: "Long Ping" },
      { code: "TIS", name: "Tin Shui Wai" },
      { code: "SIH", name: "Siu Hong" },
      { code: "TUM", name: "Tuen Mun" },
    ],
  },
  AEL: {
    text: "Airport Express",
    color: "#3d9ea0",
    sta: [
      { code: "HOK", name: "Hong Kong" },
      { code: "KOW", name: "Kowloon" },
      { code: "TSY", name: "Tsing Yi" },
      { code: "AIR", name: "Airport" },
      { code: "AWE", name: "AsiaWorld Expo" },
    ],
  },
  TKL: {
    text: "Tseung Kwan O Line",
    color: "#8d45ab",
    sta: [
      { code: "NOP", name: "North Point" },
      { code: "QUB", name: "Quarry Bay" },
      { code: "YAT", name: "Yau Tong" },
      { code: "TIK", name: "Tiu Keng Leng" },
      { code: "TKO", name: "Tseung Kwan O" },
      { code: "LHP", name: "LOHAS Park" },
      { code: "HAH", name: "Hang Hau" },
      { code: "POA", name: "Po Lam" },
    ],
  },
};

const mtrLineKey = Object.keys(mtrLine);

// DOM add Update Time

function addTime() {
  const dateFormatter = new Intl.DateTimeFormat("en-us", {
    timeStyle: "short",
    dateStyle: "medium",
    hour12: false,
  });
  const formattedDate = dateFormatter.format(new Date());
  document.getElementById("updateTimeValue").innerText = formattedDate;
}

// DOM add Line
function addLine() {
  for (let i = 0; i < mtrLineKey.length; i++) {
    let line = document.createElement("div");
    line.classList.add("lineStyle");

    //set id for each line for add event listener
    line.setAttribute("id", mtrLineKey[i]);
    line.style.backgroundColor = mtrLine[mtrLineKey[i]].color;
    const lineText = document.createTextNode(mtrLine[mtrLineKey[i]].text);
    line.appendChild(lineText);
    document.getElementById("bar").appendChild(line);
  }
}
addLine();

// DOM add Station
function addSta(upArr, downArr, line) {
  // DOM remove current stations once clicked
  let station = document.getElementsByClassName("staStyle");
  while (station.length > 0) {
    station[0].parentNode.removeChild(station[0]);
  }
  let dir = document.getElementsByClassName("trainDirection");
  while (dir.length > 0) {
    dir[0].parentNode.removeChild(dir[0]);
  }

  // trainDirection
  // bug: lines with different destination (e.g., TKL / EAL)
  let leftDir = document.createElement("div");
  leftDir.classList.add("trainDirection");
  leftDir.innerHTML = `To: ${downArr[0]["name"]}`;
  document.getElementById("up").appendChild(leftDir);

  let rigDir = document.createElement("div");
  rigDir.classList.add("trainDirection");
  rigDir.innerHTML = `To: ${upArr[0]["name"]}`;
  document.getElementById("down").appendChild(rigDir);

  // DOM up arr

  for (let i = 0; i < upArr.length; i++) {
    let leftSta = document.createElement("div");
    leftSta.classList.add("staStyle");
    leftSta.style.backgroundColor = mtrLine[line].color;
    leftSta.innerHTML = `<p><span>${Object.values(upArr[i])[0]}</span></br>
    Next Train: ${Object.values(upArr[i])[2]}</br>
    Platform: ${Object.values(upArr[i])[1]}</p>
    `;
    document.getElementById("up").appendChild(leftSta);
  }

  // DOM down arr
  for (let i = 0; i < downArr.length; i++) {
    let rightSta = document.createElement("div");
    rightSta.classList.add("staStyle");
    rightSta.style.backgroundColor = mtrLine[line].color;
    rightSta.innerHTML = `<p><span>${Object.values(downArr[i])[0]}</span></br>
    Next Train: ${Object.values(upArr[i])[2]}</br>
    Platform: ${Object.values(upArr[i])[1]}</p>
    `;
    document.getElementById("down").appendChild(rightSta);
  }
}

// ASYNC FETCH
async function checkNextTrain(line) {
  let targetStaArr = []; // Sta Code of Line
  let targetStaNameArr = []; // Sta Name of Line
  const outputUpArr = []; // Sta Up Info in obj of arr
  const outputDownArr = []; // Sta Down Info in obj of arr

  // Handle Station and Data

  // take Sta.code of Line and save to targetStaArr
  mtrLine[line].sta.forEach((sta) => {
    targetStaArr.push(sta.code);
    targetStaNameArr.push(sta.name);
  });

  // what if api if status is 404?
  for (let i = 0; i < targetStaArr.length; i++) {
    let api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${line}&sta=${targetStaArr[i]}`;
    const response = await fetch(api);
    const result = await response.json();
    let targetStaArrEl = line + "-" + targetStaArr[i]; //Line - Sta
    const targetData = result.data[targetStaArrEl];
    const dataUpArr = targetData.UP;
    const dataDownArr = targetData.DOWN;
    if (dataUpArr && dataUpArr.length > 0) {
      // console.log("UP ", targetStaArrEl, dataUpArr[0].plat, dataUpArr[0].time);
      outputUpArr.push({
        name: targetStaNameArr[i],
        plat: dataUpArr[0].plat,
        time: dataUpArr[0].time.slice(-8, -3),
      });
    }
    if (dataDownArr && dataDownArr.length > 0) {
      // console.log("DOWN ", targetStaArrEl, dataDownArr[0].plat, dataDownArr[0].time);
      outputDownArr.unshift({
        name: targetStaNameArr[i],
        plat: dataDownArr[0].plat,
        time: dataDownArr[0].time.slice(-8, -3),
      });
    }
  }

  //return result to create station div
  addSta(outputUpArr, outputDownArr, line);

  //return time to show update time
  addTime();
}

//DOM event listener & Pass Line to ASYNC FETCH
for (const key of mtrLineKey) {
  document.getElementById(key).addEventListener("click", () => {
    checkNextTrain(key);
  });
}

/* 

step 1: func arg 入路線
step 2: func handle 入路線出全部站
step 2.5: 
  2x for loop (++ HOK to AWE &UP) (-- AWE to HOK &DOWN)
  targetStaArr[i]; 
  dataUpArr[0] / dataDownArr[0]: time; plat;
  step 3: 將全部站 > 放入loop > create div > add flex class > append child
  step 4: css
*/
