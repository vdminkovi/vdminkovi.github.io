import React from 'react';
import { Link,Route } from 'react-router-dom';

/*const TeamAPI = {
  en : {
   TeamsData : [
       {
         "id": 1,
         "title": "Camp of Entertainment and Challenges",
         "groups": "10 to 500 people.",
         "type": "adventure, leisure, creative, fun ",
         "description": `Participants are taken into the nature. They will have to build up their own camp with the provided from us tents and materials.
         Lunch, dinner and breakfast is delicious home - made food, by a kitchen caravan shiny cooks.`,
         "description1" : `The event will go through several phases:` ,
        "description2" :`- Challenges – build up a camp, start a fire, play traditional Bulgarian pipe with special trainers, play horo with the live folk band, play several games of teambuilding activity`,
        "description3" : `- Leisure – Lie in hammocks, listen to the chill out, Drum and Bass, Jazz brass, Funky DJ in the forest. Eat ice cream, popcorn, sugar cotton, adoring desserts, degustation of traditional lutenitza, degustation of wine, play and sing around the camp fires.`,
        "description4"  : ` - Sport – play badminton, volleyball, soccer one kick game and small teambuilding activities of your choice (like binocular soccer, ropes and beers or bow shooting)`,
        "description5" : ``,
        "description6" : ``,
         "timing": "5-24 hours",
         "img": "/style/Images/tents.jpg"
       },
       {
         "id": 2,
         "title": "Pleasure Fair",
         "groups": "20 to 300 people.",
         "type": "creative, fun ",
         "description": `The Pleasure fair is a 6-7 topic fun and pleasure games with adorable rewards.
         Participants are divided to groups to go through certain funny, provocative, entertaining and creative tasks in order to get to their pleasure type reward and gain knowledge to produce it.
         They earn special money (printed for you), which they can use to buy others’items.
         The end is a pleasure fair, where all participants are trying out, checking listening, or just watching the products done by their colleagues and present theirs.`,
         "description1": `Chocolate, Cocktail Bar, Massage stand,Immage makers, Raw bars, Media, Fitness`,
         "description2" : ``,
         "description3" : ``,
         "description4" : ``,
         "description5" : ``,
        "description6" : ``,
         "timing": "2-5 hours",
         "img": "/style/Images/tents.jpg"
       },
       {
         "id": 3,
         "title": "Game of thrones",
         "groups": "40 to 300 people.",
         "type": "physical and strategy",
         "description": `In this day you will have the power and the strength to turn the history as you wanted it to be.
                        Stark can live and North will survive if YOU are able to beat your enemies; if YOU can maneuver your forces rightful and clever.
                        This story showed that not only strength was leading heroes to victory, but also knowledge, intelligence and treat…
                        But gaining honor and fame is always based on bravery and honesty in warriors. You decide how to play this out, you decide who to be.
                        There are plenty of Houses you can choose from, but also we urge you to create your own House and Family. You can play in Unions and you can break them if you decide.
                        All of this is ok by the rules of life. No one is insured to survive; this is an age of glory and betrayal;
                        age that can lead you to dominance in the Western Lands or to a total oblivion behind the Wall.`,
                        "description1": `The first task of the group is to make up a name and make their flag, slogan and logo with certain materials
                        Each state receives a certain arsenal battles (game types) through which they can invade and conquer neighboring territories.
                            `,
          "description2": `The first task of the group is to make up a name and make their flag, slogan and logo with certain materials
                          Each state receives a certain arsenal battles (game types) through which they can invade and conquer neighboring territories.
                          `,
        "description3" : `If you win 4 fights, you conquer a territory and take their flag. Defeated country can attack other countries and settle in newly conquered territories, but after 4 failures, it goes behind the WALL, from where they can also attack. They can return at the map if they win 4 times.
                          The goal is to have the largest number of sites.
                          `,
        "description4" : `List of types of battles:
                          1. Ropes and arrows.
                          2. Fruit race
                          3. Monster battle
                          4. Puzzle battle
                          5. Samuel battle of the blinds
                          6. National Battle
                          7. Water battle
                          8. Ropes adventure
                          `,
          "description5" : `Additional tasks for pacifists. They will be called historians - chroniclers and film and comment on interesting thing happening.
                            There will be two teams that will have a camera, tripod and microphone. You have to make a report, historical documentary and action movie of the war.
                            Or they will shoot your season of Game of thrones. The categories of material will be fighting for the top prize for Journalism,
                            Documentary and the GAME OF THRONES series and will be broadcasted at the dinner as sweet memories of the war years.`,
          "description6" : ``,
         "timing": "2-5 hours",
         "img": "/style/Images/tents.jpg"
       },
       {
         "id": 4,
         "title": "Crazy Games",
         "groups": "10 to 200 people.",
         "type": "physical and strategy ",
         "description": "Includes a list of crazy, entertaining but creative games,",
         "description1": `1.	Binocular Soccer`,
         "description2":  `2.	Blind Graffiti sprays`,
          "description3": `3.	Bow Shooting`,
          "description4":  `4.	Beers on the ropes`,
          "description5": `5.	Sheep can speak`,
          "description6": `6.	“Three Big Balls” soccer`,
        "timing": "1-3 hours",
        "img": "/style/Images/tents.jpg"
      },
       {
         "id": 5,
         "title": "Film challenge ",
         "groups": "10 to 200 people",
         "type": "creative and art ",
         "description": "The participants will be divided to teams that have to create movie on a topic, involving the corporation and few obligatory words or genres that we will challenge them with. Participants will receive  cameras, short training in movie making and acting and our HOW TO booklet. There are certain stages to go trough:",
         "description1": `1. Brainstorming`,
         "description2":  `2.	Script writing`,
          "description3": `3.	Shooting`,
          "description4":  `4.	Montage (by professional facilitator or together with the director)`,
          "description5": `5.	Oscars night `,
          "description6": ``,
        "timing": "1-3 hours",
        "img": "/style/Images/tents.jpg"
      },
       {
         "id": 6,
         "title": "Communication center",
         "groups": "12 to 60 people",
         "type": "creative and art ",
         "description": "Participants need to find a way to communicate and understand each other, regardless of the conditions. The games are very strong to show and emphasize how the right communication in the office is important. Participants will play the creative and art games in or outdoors of:",
         "description1": `1.	Play without words`,
         "description2":  `2.	Intonation vs. Sense`,
          "description3": `3.	Automatical surrealistic interview`,
          "description4":  ``,
          "description5": ``,
          "description6": ``,
        "timing": "0.30 to 2 hours",
        "img": "/style/Images/tents.jpg"
      },
      {
        "id": 7,
        "title": "Your company Olympic games",
        "groups": "60 to 500 people",
        "type": "sports and betting",
        "description": `Olympic games is a sport teambuilding event that goes with team games in various sports and fun disciplines.
        Participants play in teams against each other (departments, teams or friends ...).
        Viewers (who are participants in other disciplines) have the right to bet on their favorites with tokens money.
        Bets and payouts (1 to 1) are made before and after the match. Money tokens are specially designed and printed for the client and have pictures of colleagues or bosses of you choose.
         With them you can buy alcohol, ice cream, treats, cakes, golf lessons, horse riding etc..`,
        "description1": ``,
        "description2":  ``,
         "description3": ``,
         "description4":  ``,
         "description5": ``,
         "description6": ``,
       "timing": "5 to 12 hours",
       "img": "/style/Images/tents.jpg"
     },
     {
       "id": 8,
       "title": "Get out alive withOUT Bear Grills",
       "groups": "10 to 100 people",
       "type": "adventure, quest",
       "description": `Using map and a compass, the participants will be involved in a Quest which will take them through entertaining and curious stops.
       Includes lots of funny elements, like “Shoot the most incredible picture/pose”`,
       "description1": ``,
       "description2":  ``,
        "description3": ``,
        "description4":  ``,
        "description5": ``,
        "description6": ``,
      "timing": "1 to 3 hours",
      "img": "/style/Images/tents.jpg"
    },
    {
      "id": 9,
      "title": "Приключенски, екстремни ",
      "groups": "10 to 100 people",
      "type": "Приключенски, екстремни ",
      "description": `- Пейнтбол война със сценарий`,
      "description1": `- Рафтинг и каяк приключение – „По устието на Амазонка”`,
      "description2":  `- Пещерно приключение – Индиана Джоунс и светият Граал `,
       "description3": `- Скално катерене, планинско ориентиране, колела и др. `,
       "description4":  `- Туристически преход тип екскурзионно летуване `,
       "description5": `- Сървайвър (включва лагеруване на открито, режисирано оцеляване в дивата природа)`,
       "description6": ``,
     "timing": "1 to 3 hours",
     "img": "/style/Images/tents.jpg"
   },
   {
     "id": 10,
     "title": " Игрови, нефизически ",
     "groups": "10 to 100 people",
     "type": " Игрови, нефизически",
     "description": " - Lord of the Chefs/ BBQ Lord – готварски турнир",
     "description1": " - Рекламен панаир (предизвиква креативното във всеки, създава се реклама на фирмата от нейните служители, помага да се припознаят хората с компанията и да се почувстват важни)",
     "description2":  " - Тематични Партита (Хелоуин, Коледа... Зелено парти, Кариоки и др.)",
      "description3": " - Вашето събитие – дизайн според нуждите",
      "description4":  "",
      "description5": "",
      "description6": "",
      "timing": "1 to 3 hours",
      "img": "/style/Images/tents.jpg"
  }
   ]
 },
   bg : {
     TeamsData : [
         {
           "id": 1,
           "title": "Къмпинг Забава",
           "groups": "от 10 до 500 души.",
           "type": "приключенска, разпускаща, креативна, забавление ",
           "description": `Това е тимбилдинг сред природата. ИЗграждаме палатков лагер, огън, храним се от подвижна каравнна гурме кухня с наливна бира и дегустации на вино. `,
           "timing": "5-24 часа",
           "img": "./style/Images/tents.jpg"
         },
         {
           "id": 2,
           "title": "Панаирът на удоволствията",
           "groups": "от 20 до 300 души.",
           "type": "креативна, забавление  ",
           "description": `Панаирът на удоволствията е тимбилдинг, в който участниците усвояват нови знания и
            компетенции, забавляват се и сплотяват като екипи по забавни проекти.  `,
           "timing": "2-5 часа",
           "img": "./style/Images/tents.jpg"
         },
         {
           "id": 3,
           "title": "Игра на тронове",
           "groups": "от 40 до 300 души.",
           "type": "физическа и стратегическа - изисква разгрявка и средна физическа активност  ",
           "description": `В тази игра участниците се превъплъщават в героите от популярния филм Игра на тронове. `,
           "timing": "2-5 часа",
           "img": "./style/Images/tents.jpg"
         },
         {
           "id": 4,
           "title": "Лудите на стадиона",
           "groups": "от 10 до 200 души.",
           "type": "физическа и стратегическа - изисква разгрявка и средна физическа активност ",
           "description": `Игра 1 Футбол с бинокли`,
           "timing": "1-3 часа",
           "img": "./style/Images/tents.jpg"
         }
     ]
   },

    all: function() {
      return this.en.TeamsData;
    },
    get: function(id) {
      const isTeam = p => p.id === id
    //  console.log('isTeam=', this.en.TeamsData);
      return this.en.TeamsData.find(isTeam)
    }
 }
export default TeamAPI*/
