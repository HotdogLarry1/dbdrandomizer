"use strict";
/*
CHARACTER LIST ORDER
DWIGHT
*/

/*
PERK LIST ORDER
Bond
Prove Thyself
Leader
*/

//////////////////////////////
//////////////////////////////
//  MAIN
//////////////////////////////
//////////////////////////////
// TODO add select all survivors button
// TODO add de-select all survivors button
// TODO add select all perks button
// TODO add de-select all perks button
// TODO add select all perks & survivors button
// TODO add de-select all perks & survivors button
//////////////////////////////
//////////////////////////////
//  LOW PRIORITY
//////////////////////////////
//////////////////////////////
// TODO Turn Perks into separate objects with true/false tags
//    for categores (Exhaustion Perk, Healing Perk, etc.)

const survivors = {
  acevisconti: {
    name: "acevisconti",
    formattedName: "Ace Visconti",
    owned: false,
    perks: ["aceinthehole", "openhanded", "uptheante"],
    formattedPerks: ["Ace in the Hole", "Open-Handed", "Up the Ante"],
  },
  adamfrancis: {
    name: "adamfrancis",
    formattedName: "Adam Francis",
    owned: false,
    perks: ["diversion", "deliverance", "autodidact"],
    formattedPerks: ["Diversion", "Deliverance", "Autodidact"],
  },
  adawong: {
    name: "adawong",
    formattedName: "Ada Wong",
    owned: false,
    perks: ["lowprofile", "reactivehealing", "wiretap"],
    formattedPerks: ["Low Profile", "Reactive Healing", "Wiretap"],
  },
  ashwilliams: {
    name: "ashwilliams",
    formattedName: "Ashley J. Williams",
    owned: false,
    perks: ["buckleup", "flipflop", "mettleofman"],
    formattedPerks: ["Buckle Up", "Flip-Flop", "Mettle of Man"],
  },
  billoverbeck: {
    name: "billoverbeck",
    formattedName: 'William "Bill" Overbeck',
    owned: false,
    perks: ["borrowedtime", "leftbehind", "unbreakable"],
    formattedPerks: ["Borrowed Time", "Left Behind", "Unbreakable"],
  },
  cherylmason: {
    name: "cherylmason",
    formattedName: "Cheryl Mason",
    owned: false,
    perks: ["bloodpact", "repressedalliance", "soulguard"],
    formattedPerks: ["Blood Pact", "Repressed Alliance", "Soul Guard"],
  },
  claudettemorel: {
    name: "claudettemorel",
    formattedName: "Claudette Morel",
    owned: false,
    perks: ["botanyknowledge", "empathy", "selfcare"],
    formattedPerks: ["Botany Knowledge", "Empathy", "Self-Care"],
  },
  davidking: {
    name: "davidking",
    formattedName: "David King",
    owned: false,
    perks: ["deadhard", "nomither", "weregonnaliveforever"],
    formattedPerks: ["Dead Hard", "No Mither", "We're Gonna Live Forever"],
  },
  davidtapp: {
    name: "davidtapp",
    formattedName: "Detective David Tapp",
    owned: false,
    perks: ["detectiveshunch", "stakeout", "tenacity"],
    formattedPerks: ["Detective's Hunch", "Stake Out", "Tenacity"],
  },
  dwightfairfield: {
    name: "dwightfairfield",
    formattedName: "Dwight Fairfield",
    owned: false,
    perks: ["bond", "provethyself", "leader"],
    formattedPerks: ["Bond", "Prove Thyself", "Leader"],
  },
  elodierakoto: {
    name: "elodierakoto",
    formattedName: "Élodie Rakoto",
    owned: false,
    perks: ["appraisal", "deception", "powerstruggle"],
    formattedPerks: ["Appraisal", "Deception", "Power Struggle"],
  },
  felixrichter: {
    name: "felixrichter",
    formattedName: "Felix Richter",
    owned: false,
    perks: ["builttolast", "desperatemeasures", "visionary"],
    formattedPerks: ["Built to Last", "Desperate Measures", "Visionary"],
  },
  fengmin: {
    name: "fengmin",
    formattedName: "Feng Min",
    owned: false,
    perks: ["alert", "lithe", "technician"],
    formattedPerks: ["Alert", "Lithe", "Technician"],
  },
  haddiekaur: {
    name: "haddiekaur",
    formattedName: "Haddie Kaur",
    owned: false,
    perks: ["innerfocus", "overzealous", "residualmanifest"],
    formattedPerks: ["Inner Focus", "Overzealous", "Residual Manifest"],
  },
  jakepark: {
    name: "jakepark",
    formattedName: "Jake Park",
    owned: false,
    perks: ["calmspirit", "ironwill", "saboteur"],
    formattedPerks: ["Calm Spirit", "Iron Will", "Saboteur"],
  },
  janeromero: {
    name: "janeromero",
    formattedName: "Jane Romero",
    owned: false,
    perks: ["headon", "poised", "solidarity"],
    formattedPerks: ["Head On", "Poised", "Solidarity"],
  },
  jeffjohansen: {
    name: "jeffjohansen",
    formattedName: 'Jeffery "Jeff" Johansen',
    owned: false,
    perks: ["aftercare", "breakdown", "distortion"],
    formattedPerks: ["Aftercare", "Breakdown", "Distortion"],
  },
  jillvalentine: {
    name: "jillvalentine",
    formattedName: "Jill Valentine",
    owned: false,
    perks: ["blastmine", "counterforce", "resurgence"],
    formattedPerks: ["Blast Mine", "Counterforce", "Resurgence"],
  },
  jonahvasquez: {
    name: "jonahvasquez",
    formattedName: "Jonah Vasquez",
    owned: false,
    perks: ["boonexponential", "correctiveaction", "overcome"],
    formattedPerks: ["Boon: Exponential", "Corrective Action", " Overcome"],
  },
  katedenson: {
    name: "katedenson",
    formattedName: "Kate Denson",
    owned: false,
    perks: ["boilover", "dancewithme", "windowsofopportunity"],
    formattedPerks: ["Boil Over", "Dance With Me", "Windows of Opportunity"],
  },
  lauriestrode: {
    name: "lauriestrode",
    formattedName: "Laurie Strode",
    owned: false,
    perks: ["decisivestrike", "objectofobsession", "solesurvivor"],
    formattedPerks: ["Decisive Strike", "Object of Obsession", "Sole Survivor"],
  },
  leonkennedy: {
    name: "leonkennedy",
    formattedName: "Leon S. Kennedy",
    owned: false,
    perks: ["bitethebullet", "flashbang", "rookiespirit"],
    formattedPerks: ["Bite the Bullet", "Flashbang", "Rookie Spirit"],
  },
  megthomas: {
    name: "megthomas",
    formattedName: "Meg Thomas",
    owned: false,
    perks: ["adrenaline", "quickandquiet", "sprintburst"],
    formattedPerks: ["Adrenaline", "Quick & Quiet", "Sprint Burst"],
  },
  mikaelareid: {
    name: "mikaelareid",
    formattedName: "Mikaela Reid",
    owned: false,
    perks: ["booncircleofhealing", "boonshadowstep", "clairvoyance"],
    formattedPerks: [
      "Boon: Circle of Healing",
      "Boon: Shadow Step",
      "Clairvoyance",
    ],
  },
  nancywheeler: {
    name: "nancywheeler",
    formattedName: "Nancy Wheeler",
    owned: false,
    perks: ["bettertogether", "fixated", "innerstrength"],
    formattedPerks: ["Better Together", "Fixated", "Inner Strength"],
  },
  neakarlsson: {
    name: "neakarlsson",
    formattedName: "Nea Karlsson",
    owned: false,
    perks: ["balancedlanding", "streetwise", "urbanevasion"],
    formattedPerks: ["Balanced Living", "Streetwise", "Urban Evasion"],
  },
  quentinsmith: {
    name: "quentinsmith",
    formattedName: "Quentin Smith",
    owned: false,
    perks: ["pharmacy", "vigil", "wakeup"],
    formattedPerks: ["Pharmacy", "Vigil", "Wake Up!"],
  },
  rebeccachambers: {
    name: "rebeccachambers",
    formattedName: "Rebecca Chambers",
    owned: false,
    perks: ["betterthannew", "hyperfocus", "reassurance"],
    formattedPerks: ["Better than New", "Hyperfocus", "Reassurance"],
  },
  steveharrington: {
    name: "steveharrington",
    formattedName: "Steve Harrington",
    owned: false,
    perks: ["babysitter", "camaraderie", "secondwind"],
    formattedPerks: ["Babysitter", "Camaraderie", "Second Wind"],
  },
  vittoriotoscano: {
    name: "vittoriotoscano",
    formattedName: "Vittorio Toscano",
    owned: false,
    perks: ["fogwise", "potentialenergy", "quickgambit"],
    formattedPerks: ["Fogwise", "Potential Energy", "Quick Gambit"],
  },
  yoichiasakawa: {
    name: "yoichiasakawa",
    formattedName: "Yoichi Asakawa",
    owned: false,
    perks: ["boondarktheory", "empathicconnection", "parentalguidance"],
    formattedPerks: [
      "Boon: Dark Theory",
      "Empathic Connection",
      "Parental Guidance",
    ],
  },
  yuikimura: {
    name: "yuikimura",
    formattedName: "Yui Kimura",
    owned: false,
    perks: ["anymeansnecessary", "breakout", "luckybreak"],
    formattedPerks: ["Any Means Necessary", "Breakout", "Lucky Break"],
  },
  yunjinlee: {
    name: "yunjinlee",
    formattedName: "Yun-Jin Lee",
    owned: false,
    perks: ["fasttrack", "self-preservation", "smashhit"],
    formattedPerks: ["Fast Track", "Self-Preservation", "Smash Hit"],
  },
  zarinakassir: {
    name: "zarinakassir",
    formattedName: "Zarina Kassir",
    owned: false,
    perks: ["forthepeople", "offtherecord", "redherring"],
    formattedPerks: ["For the People", "Off the Record", "Red Herring"],
  },
};

// DONE log formatted Names and perks....
//    this is for adding images in .html
// for (const item in survivors) {
//   const [morb1, morb2, morb3] = [...survivors[item].perks];
//   const [yorb1, yorb2, yorb3] = [...survivors[item].formattedPerks];
//   console.log(`${survivors[item].formattedName}\t${survivors[item].name}`);
//   console.log(`\t${yorb1}\t${yorb2}\t${yorb3}`);
//   console.log(`\t${morb1}\t${morb2}\t${morb3}`);
// }

const selectedCharacters = [];
const selectedPerks = [];
const filteredPerks = [];

const categoryExhaustion = [];
const categoryAuraReading = ["bond"];
const categoryRepair = ["provethyself"];
const categoryHealing = ["autodidact"];
const categoryBloodpoints = ["provethyself"];
const categoryActionSpeed = ["leader"];
const categoryActiveAbility = ["diversion"];
const categoryStealth = ["diversion"];
const categoryUnhook = ["deliverance"];

const inputCharacter = document.querySelectorAll(".input-character");
const inputPerk = document.querySelectorAll(".input-perk");
const availableCharacters = document.querySelector(".characters-available");

const selCharImg = document.querySelector(".selected-character");
const selPerkImg1 = document.querySelector(".selected-perk-01");
const selPerkImg2 = document.querySelector(".selected-perk-02");
const selPerkImg3 = document.querySelector(".selected-perk-03");
const selPerkImg4 = document.querySelector(".selected-perk-04");

const randomAllBtn = document.querySelector(".random-all");
const randomCharBtn = document.querySelector(".random-character");
const randomPerkBtn1 = document.querySelector(".random-perk1");
const randomPerkBtn2 = document.querySelector(".random-perk2");
const randomPerkBtn3 = document.querySelector(".random-perk3");
const randomPerkBtn4 = document.querySelector(".random-perk4");

const perksOutput1 = document.querySelector(".perks-available-01");
const perksOutput2 = document.querySelector(".perks-available-02");
const perksOutput3 = document.querySelector(".perks-available-03");
const perksOutput4 = document.querySelector(".perks-available-04");

const toggleAllBtn = document.querySelector(".select-all-button");
const toggleCharBtn = document.querySelector(".select-char-button");
const togglePerksBtn = document.querySelector(".select-perks-button");

availableCharacters.addEventListener("change", function () {
  selCharImg.src =
    availableCharacters.options[availableCharacters.selectedIndex].getAttribute(
      "rel"
    );
});

const availablePerks = document.querySelectorAll(".perks-available");
for (let i = 0; i < availablePerks.length; i++) {
  availablePerks[i].addEventListener("change", function () {
    // console.log(selector);
    switch (i + 1) {
      case 1:
        selPerkImg1.src =
          availablePerks[i].options[
            availablePerks[i].selectedIndex
          ].getAttribute("rel");
        break;
      case 2:
        selPerkImg2.src =
          availablePerks[i].options[
            availablePerks[i].selectedIndex
          ].getAttribute("rel");
        break;
      case 3:
        selPerkImg3.src =
          availablePerks[i].options[
            availablePerks[i].selectedIndex
          ].getAttribute("rel");
        break;
      case 4:
        selPerkImg4.src =
          availablePerks[i].options[
            availablePerks[i].selectedIndex
          ].getAttribute("rel");
        break;
      default:
        break;
    }
  });
}

const perkRemoval = function (perkName, perkClicked) {
  perkClicked.classList.remove("highlight");
  selectedPerks.splice(selectedPerks.indexOf(perkName), 1);
  selectedPerks.sort();
};

const perkAddition = function (perkName, perkClicked) {
  perkClicked.classList.add("highlight");
  selectedPerks.push(perkName);
  selectedPerks.sort();
};

const charRemoval = function (charName, charPicked) {
  charPicked.classList.remove("highlight");
  selectedCharacters.splice(selectedCharacters.indexOf(charName), 1);
  selectedCharacters.sort();
};

const charAddition = function (charName, charPicked) {
  charPicked.classList.add("highlight");
  selectedCharacters.push(charName);
  selectedCharacters.sort();
};

const removePerkOptions = function () {
  availablePerks.forEach((eachPerk) => {
    var length = eachPerk.options.length - 1;
    for (var i = length; i >= 1; i--) {
      eachPerk.remove(i);
    }
  });
};

const addPerkOptions = function () {
  for (const selPerk in selectedPerks) {
    for (var i = 0; i < availablePerks.length; i++) {
      const perkOption = document.createElement("option");
      for (const item in survivors) {
        if (survivors[item].perks.includes(selectedPerks[selPerk])) {
          // console.log(
          //   survivors[item].formattedPerks[
          //     survivors[item].perks.indexOf(selectedPerks[selPerk])
          //   ]
          // );
          perkOption.text =
            survivors[item].formattedPerks[
              survivors[item].perks.indexOf(selectedPerks[selPerk])
            ];
          perkOption.value =
            survivors[item].perks[
              survivors[item].perks.indexOf(selectedPerks[selPerk])
            ];
          perkOption.setAttribute(
            "rel",
            `/perks/iconPerks_${
              survivors[item].perks[
                survivors[item].perks.indexOf(selectedPerks[selPerk])
              ]
            }.png`
          );
          // console.log(availablePerks[i]);
          availablePerks[i].add(perkOption);
        }
      }
    }
  }
  // console.log(survivors[item].perks.includes(selPerk));
  // availablePerks.forEach((eachPerk) => {});
};

const removeCharOptions = function () {
  var length = availableCharacters.options.length - 1;
  for (var i = length; i >= 1; i--) {
    availableCharacters.remove(i);
  }
};

const addCharOptions = function () {
  for (const item in selectedCharacters) {
    const characterOption = document.createElement("option");
    // "/char-img/char_dwightfairfield.png"
    characterOption.text = survivors[selectedCharacters[item]].formattedName;
    characterOption.value = survivors[selectedCharacters[item]].name;
    characterOption.setAttribute(
      "rel",
      `/char-img/char_${survivors[selectedCharacters[item]].name}.png`
    );
    availableCharacters.add(characterOption);
  }
};

const perkToggle = function (perk, perkClicked) {
  if (selectedPerks.includes(perk)) {
    perkRemoval(perk, perkClicked);
    removePerkOptions();
    addPerkOptions();
  } else {
    perkAddition(perk, perkClicked);
    removePerkOptions();
    addPerkOptions();
  }
};

const characterToggleGroup = function (charPicked) {
  if (this.owned) {
    this.owned = false;
    charRemoval(this.name, charPicked);
    removeCharOptions();
    addCharOptions();
  } else {
    this.owned = true;
    charAddition(this.name, charPicked);
    removeCharOptions();
    addCharOptions();
  }
};

const toggleCharFn = function (charPicked, currentToggle) {
  if (currentToggle) {
    toggleCharBtn.textContent = "TOGGLE CHAR OFF";
    toggleCharBtn.classList.add("toggled-on");
    if (this.owned) null;
    else {
      this.owned = true;
      charAddition(this.name, charPicked);
      removeCharOptions();
      addCharOptions();
    }
  } else {
    if (this.owned) {
      toggleCharBtn.textContent = "TOGGLE CHAR ON";
      toggleCharBtn.classList.remove("toggled-on");
      this.owned = false;
      charRemoval(this.name, charPicked);
      removeCharOptions();
      addCharOptions();
    } else null;
  }
};

const togglePerkFn = function (perk, perkClicked, currentToggle) {
  if (currentToggle) {
    togglePerksBtn.textContent = "TOGGLE PERKS OFF";
    togglePerksBtn.classList.add("toggled-on");
    if (selectedPerks.includes(perk)) {
      null;
    } else {
      perkAddition(perk, perkClicked);
      removePerkOptions();
      addPerkOptions();
    }
  } else {
    if (selectedPerks.includes(perk)) {
      togglePerksBtn.textContent = "TOGGLE PERKS ON";
      togglePerksBtn.classList.remove("toggled-on");
      perkRemoval(perk, perkClicked);
      removePerkOptions();
      addPerkOptions();
    } else {
      null;
    }
  }
};

const characterAllPerks = function () {
  if (this.owned) {
    let counter = 0;
    for (const item in this.perks) {
      // console.log(this.perks[item]);
      if (selectedPerks.includes(this.perks[item])) {
        break;
      } else {
        // console.log("1 check");
        counter++;
      }
    }
    // console.log(counter);
    if (counter === 3) {
      for (const item in this.perks) {
        selectedPerks.push(this.perks[item]);
        // console.log(this.perks[item]);
        // console.log(document.getElementsByClassName(this.perks[item])[0]);
        document
          .getElementsByClassName(this.perks[item])[0]
          .classList.add("highlight");
      }
      selectedPerks.sort();
      removePerkOptions();
      addPerkOptions();
    }
  }
};

const randomCharBtnPress = function () {
  if (availableCharacters.options.length > 2) {
    let randomizing = true;
    const oldSelection = availableCharacters.selectedIndex;

    while (randomizing) {
      let randomNumber =
        Math.trunc(Math.random() * availableCharacters.options.length - 1) + 1;
      availableCharacters.selectedIndex = randomNumber;

      switch (
        availableCharacters.options[availableCharacters.selectedIndex].text
      ) {
        case availableCharacters.options[oldSelection].text:
          break;
        default:
          randomizing = false;
          selCharImg.src =
            availableCharacters.options[
              availableCharacters.selectedIndex
            ].getAttribute("rel");
      }
    }
  } else console.log("Not ready");
};

const randomPerkBtn1Press = function () {
  if (perksOutput1.options.length > 5) {
    let randomizing = true;
    const oldSelection = perksOutput1.selectedIndex;
    const perkCheck2 = perksOutput2.options[perksOutput2.selectedIndex].text;
    const perkCheck3 = perksOutput3.options[perksOutput3.selectedIndex].text;
    const perkCheck4 = perksOutput4.options[perksOutput4.selectedIndex].text;

    while (randomizing) {
      let randomNumber =
        Math.trunc(Math.random() * perksOutput1.options.length - 1) + 1;
      perksOutput1.selectedIndex = randomNumber;

      switch (perksOutput1.options[perksOutput1.selectedIndex].text) {
        case perksOutput1.options[oldSelection].text:
          break;
        case perkCheck2:
          break;
        case perkCheck3:
          break;
        case perkCheck4:
          break;
        default:
          randomizing = false;
          selPerkImg1.src =
            perksOutput1.options[perksOutput1.selectedIndex].getAttribute(
              "rel"
            );
      }
    }
  }
};

const randomPerkBtn2Press = function () {
  if (perksOutput2.options.length > 5) {
    let randomizing = true;
    const oldSelection = perksOutput2.selectedIndex;
    const perkCheck1 = perksOutput1.options[perksOutput1.selectedIndex].text;
    const perkCheck3 = perksOutput3.options[perksOutput3.selectedIndex].text;
    const perkCheck4 = perksOutput4.options[perksOutput4.selectedIndex].text;

    while (randomizing) {
      let randomNumber =
        Math.trunc(Math.random() * perksOutput2.options.length - 1) + 1;
      perksOutput2.selectedIndex = randomNumber;

      switch (perksOutput2.options[perksOutput2.selectedIndex].text) {
        case perksOutput2.options[oldSelection].text:
          break;
        case perkCheck1:
          break;
        case perkCheck3:
          break;
        case perkCheck4:
          break;
        default:
          randomizing = false;
          selPerkImg2.src =
            perksOutput2.options[perksOutput2.selectedIndex].getAttribute(
              "rel"
            );
      }
    }
  }
};

const randomPerkBtn3Press = function () {
  if (perksOutput3.options.length > 5) {
    let randomizing = true;
    const oldSelection = perksOutput3.selectedIndex;
    const perkCheck1 = perksOutput1.options[perksOutput1.selectedIndex].text;
    const perkCheck2 = perksOutput2.options[perksOutput2.selectedIndex].text;
    const perkCheck4 = perksOutput4.options[perksOutput4.selectedIndex].text;

    while (randomizing) {
      let randomNumber =
        Math.trunc(Math.random() * perksOutput3.options.length - 1) + 1;
      perksOutput3.selectedIndex = randomNumber;

      switch (perksOutput3.options[perksOutput3.selectedIndex].text) {
        case perksOutput3.options[oldSelection].text:
          break;
        case perkCheck1:
          break;
        case perkCheck2:
          break;
        case perkCheck4:
          break;
        default:
          randomizing = false;
          selPerkImg3.src =
            perksOutput3.options[perksOutput3.selectedIndex].getAttribute(
              "rel"
            );
      }
    }
  }
};

const randomPerkBtn4Press = function () {
  if (perksOutput4.options.length > 5) {
    let randomizing = true;
    const oldSelection = perksOutput4.selectedIndex;
    const perkCheck1 = perksOutput1.options[perksOutput1.selectedIndex].text;
    const perkCheck2 = perksOutput2.options[perksOutput2.selectedIndex].text;
    const perkCheck3 = perksOutput3.options[perksOutput3.selectedIndex].text;

    while (randomizing) {
      let randomNumber =
        Math.trunc(Math.random() * perksOutput4.options.length - 1) + 1;
      perksOutput4.selectedIndex = randomNumber;

      switch (perksOutput4.options[perksOutput4.selectedIndex].text) {
        case perksOutput4.options[oldSelection].text:
          break;
        case perkCheck1:
          break;
        case perkCheck2:
          break;
        case perkCheck3:
          break;
        default:
          randomizing = false;
          selPerkImg4.src =
            perksOutput4.options[perksOutput4.selectedIndex].getAttribute(
              "rel"
            );
      }
    }
  }
};

const perkInputClicked = function (evt) {
  // console.log(perkName);
  // console.log(evt.currentTarget);
  // Slice filename to retrieve perk name
  const startSlice = evt.currentTarget.src.indexOf("iconPerks_") + 10;
  const endSlice = evt.currentTarget.src.indexOf(".png");
  const perkName = evt.currentTarget.src
    .slice(startSlice, endSlice)
    .toLowerCase();

  // console.log(perkName);
  perkToggle(perkName, evt.currentTarget);
  availablePerks.onchange = selPerkImg1.src = "/char-img/question-mark.png";
  availablePerks.onchange = selPerkImg2.src = "/char-img/question-mark.png";
  availablePerks.onchange = selPerkImg3.src = "/char-img/question-mark.png";
  availablePerks.onchange = selPerkImg4.src = "/char-img/question-mark.png";
};

const charInputClicked = function (evt) {
  // Slice filename to retrieve character name
  const startSlice = evt.currentTarget.src.indexOf("char_") + 5;
  const endSlice = evt.currentTarget.src.indexOf(".png");
  const charName = evt.currentTarget.src
    .slice(startSlice, endSlice)
    .toLowerCase();

  // console.log(charName);
  // console.log(survivors[charName].formattedName);
  characterToggleGroup.call(survivors[charName], evt.currentTarget);
  characterAllPerks.call(survivors[charName]);
  availableCharacters.onchange = selCharImg.src = "/char-img/question-mark.png";
};

// const allPerks = [
//   "bond",
//   "provethyself",
//   "leader",
//   "diversion",
//   "deliverance",
//   "autodidact",
// ];

//////////////////////////////
//////////////////////////////

// inputCharacter.addEventListener("click", function () {
//   console.log("Character clicked!");
// });

// const testFunction = function () {
//   console.log(...this.formattedPerks);
//   console.log(this.owned);
// };

inputCharacter.forEach((characterElement) => {
  characterElement.addEventListener("click", charInputClicked);
});

inputPerk.forEach((perkElement) => {
  perkElement.addEventListener("click", perkInputClicked);
});

randomAllBtn.addEventListener("click", randomCharBtnPress);
randomAllBtn.addEventListener("click", randomPerkBtn1Press);
randomAllBtn.addEventListener("click", randomPerkBtn2Press);
randomAllBtn.addEventListener("click", randomPerkBtn3Press);
randomAllBtn.addEventListener("click", randomPerkBtn4Press);

randomCharBtn.addEventListener("click", randomCharBtnPress);

randomPerkBtn1.addEventListener("click", randomPerkBtn1Press);
randomPerkBtn2.addEventListener("click", randomPerkBtn2Press);
randomPerkBtn3.addEventListener("click", randomPerkBtn3Press);
randomPerkBtn4.addEventListener("click", randomPerkBtn4Press);

toggleAllBtn.addEventListener("click", function () {
  console.log("Toggle All");
});

let toggleChar = false;
toggleCharBtn.addEventListener("click", function () {
  toggleChar = !toggleChar;

  inputCharacter.forEach((characterElement) => {
    const startSlice = characterElement.src.indexOf("char_") + 5;
    const endSlice = characterElement.src.indexOf(".png");
    const charName = characterElement.src
      .slice(startSlice, endSlice)
      .toLowerCase();
    // console.log(charName);
    toggleCharFn.call(survivors[charName], characterElement, toggleChar);
  });

  availableCharacters.onchange = selCharImg.src = "/char-img/question-mark.png";
});

let togglePerk = false;
togglePerksBtn.addEventListener("click", function () {
  togglePerk = !togglePerk;

  inputPerk.forEach((perkElement) => {
    const startSlice = perkElement.src.indexOf("iconPerks_") + 10;
    const endSlice = perkElement.src.indexOf(".png");
    const perkName = perkElement.src.slice(startSlice, endSlice).toLowerCase();
    console.log(perkName);
    togglePerkFn(perkName, perkElement, togglePerk);
  });

  availablePerks.onchange = selPerkImg1.src = "/char-img/question-mark.png";
  availablePerks.onchange = selPerkImg2.src = "/char-img/question-mark.png";
  availablePerks.onchange = selPerkImg3.src = "/char-img/question-mark.png";
  availablePerks.onchange = selPerkImg4.src = "/char-img/question-mark.png";
});

let toggleAll = false;
toggleAllBtn.addEventListener("click", function () {
  if (toggleAll === false) {
    toggleAllBtn.textContent = "TOGGLE ALL OFF";
    toggleAllBtn.classList.add("toggled-on");

    toggleAll = true;

    toggleChar = false; // button press will set to true right after this
    togglePerk = false;

    toggleCharBtn.click();
    togglePerksBtn.click();
  } else {
    toggleAllBtn.textContent = "TOGGLE ALL ON";
    toggleAllBtn.classList.remove("toggled-on");

    toggleAll = false;

    toggleChar = true; // button press will set to false right after this
    togglePerk = true;

    toggleCharBtn.click();
    togglePerksBtn.click();
  }
});

// perksOutput1
// perksOutput2
// perksOutput3
// perksOutput4

// characterOption.text = "Dingus Dongus";
// characterOption.value = "dingusdongus";
// availableCharacters.add(characterOption);

// characterOption.text = "Arty McTardy";
// characterOption.value = "artymctardy";
// availableCharacters.add(characterOption);

//////////////////////////////
//////////////////////////////
/* OTHER OLD STUFF
// test() {
//   console.log(this.formattedName);
// },

// testPerks() {
//   for (const item in this.perks) console.log(this.perks[item]);
// },

// testPerks2() {
//   for (const item in this.perksOwned) {
//     if (this.perksOwned[item]) console.log(this.perks[item]);
//   }
// },

// testPerks3(perk) {
//   for (const item in this.perks) {
//     if (this.perks[item] === perk)
//       console.log(item, this.perksOwned[item], !this.perksOwned[item]);
//   }
// },

// inputCharacters[0].test(); // logs to console "Dwight Fairfield"
// inputCharacters[0].testPerks(); // logs to console the values in array

// inputCharacters[0].perksOwned[1] = true; // set single perk to true to test next line ... clicking on specific images will change this later
// inputCharacters[0].testPerks2(); // logs to console perks[x] if perksOwned[x] === true

// inputCharacters[0].testPerks3("proveThyself"); // This matches name and returns array index
// inputCharacters[0].testPerks3("leader"); // This matches name and returns array index
// inputCharacters[0].testPerks3("bond"); // This matches name and returns array index
*/

//////////////////////////////
//////////////////////////////
/* OLD STUFF
inputCharacter.forEach((characterElement) => {
  characterElement.addEventListener("click", function () {
    // Slice filename to retrieve character name
    const startSlice = characterElement.src.indexOf("char_") + 5;
    const endSlice = characterElement.src.indexOf(".png");
    const charName = characterElement.src
      .slice(startSlice, endSlice)
      .toLowerCase();

    // console.log(charName);

    const charClicked = function (character) {
      if (character.name === charName) {
        console.log(character.formattedName);
        // testFunction.call(character);
        // console.log(character.owned);
        // const tempTest = testFunction.bind(character);
        // tempTest();

        const charToggle = characterToggleGroup.bind(character);
        charToggle();
        console.log(selectedCharacters);
      }
    };
    inputCharacters.find(charClicked);
  });
});

inputPerk.forEach((perkElement) => {
  perkElement.addEventListener("click", function () {
    // console.log(perkElement);
    // Slice filename to retrieve perk name
    const startSlice = perkElement.src.indexOf("iconPerks_") + 10;
    const endSlice = perkElement.src.indexOf(".png");
    const perkName = perkElement.src.slice(startSlice, endSlice).toLowerCase();
    console.log(perkName);

    if (inputPerks.includes(perkName)) console.log(`Found: ${perkName}`);
  });
});

*/
