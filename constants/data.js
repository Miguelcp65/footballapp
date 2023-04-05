import barcelona from '../assets/images/barcelona.png'
import manunited from '../assets/images/manunited.png'
import sevilla from '../assets/images/sevilla.png'
import betis from '../assets/images/betis.png'
import bayerleverkusen from '../assets/images/bayerleverkusen.png'
import asroma from '../assets/images/asroma.png'
import arsenal from '../assets/images/arsenal.png'
import acmilan from '../assets/images/acmilan.png'
import liverpool from '../assets/images/liverpool.png'
import borussiadortmund from '../assets/images/borussiadortmund.png'
import bayernmunich from '../assets/images/bayernmunich.png'
import realmadrid from '../assets/images/realmadrid.png'
import psg from '../assets/images/psg.png'
import marseille from '../assets/images/marseille.png'
import atalanta from '../assets/images/atalanta.png'
import sampdoria from '../assets/images/sampdoria.png'
import newcastle from '../assets/images/newcastle.png'
import chelsea from '../assets/images/chelsea.png'
import news1 from '../assets/images/news1.jpg'
import news2 from '../assets/images/news2.jpg'
import news3 from '../assets/images/news3.jpg'

const populargames = [
    {
        id: 1,
        competition: 'UEFA Champions League',
        scoreboard: '4-0',
        team1: 'Bayern Munich',
        team2: 'Real Madrid',
        team1goals: [
            "Gnabry 23'",
            "Coupo-Mouting 56', 49'",
            "Goretzka 34'",
        ],
        team2goals: [],
        team1image: bayernmunich,
        team2image: realmadrid,
        saved: true,
        stadium: "Allianz Arena"
    },
    {
        id: 2,
        competition: 'UEFA Europa League',
        scoreboard: '2-1',
        team1: 'FC Barcelona',
        team2: 'Man. United',
        team1goals: [
            "Lewandowski 18'",
            "Fati 22'"
        ],
        team2goals: [
            "Rashford 81'"
        ],
        team1image: barcelona,
        team2image: manunited,
        saved: false,
        stadium: "Camp Nou"
    },
    {
        id: 3,
        competition: 'UEFA Europa League',
        scoreboard: '2-0',
        team1: 'Sevilla',
        team2: 'Bétis',
        team1goals: [
            "Nesyri 65', 72'"
        ],
        team2goals: [],
        team1image: sevilla,
        team2image: betis,
        saved: false,
        stadium: "Ramon Sanchez-Pizjuan"
    },
    {
        id: 4,
        competition: 'UEFA Europa League',
        scoreboard: '1-0',
        team1: 'Bayer Leverkusen',
        team2: 'AS Roma',
        team1goals: [
            "Wirtz 33'"
        ],
        team2goals: [],
        team1image: bayerleverkusen,
        team2image: asroma,
        saved: false,
        stadium: "BayArena"
    },

    {
        id: 5,
        competition: 'UEFA Champions League',
        scoreboard: '1-3',
        team1: 'Arsenal',
        team2: 'AC Milan',
        team1goals: [
            "Jesus 54'"
        ],
        team2goals: [
            "Hernandez 12'",
            "Leão 32'",
            "Saelemaekers 67'",
        ],
        team1image: arsenal,
        team2image: acmilan,
        saved: true,
        stadium: "Emirates Stadium"
    },
    {
        id: 6,
        competition: 'UEFA Champions League',
        scoreboard: '2-0',
        team1: 'Liverpool',
        team2: 'B. Dortmund',
        team1goals: [
            "Salah 78'",
            "Nunez 90'"
        ],
        team2goals: [],
        team1image: liverpool,
        team2image: borussiadortmund,
        saved: true,
        stadium: "Anfield"
    },
]

const matchschedule = [
    {
        id: 1,
        date: '29/03',
        hour: "18:00",
        competition: 'Premier League',
        team1: 'Newcastle',
        team2: 'Chelsea',
        team1image: newcastle,
        team2image: chelsea,
    },
    {
        id: 2,
        date: '29/03',
        hour: "19:45",
        competition: 'Serie A',
        team1: 'Atalanta',
        team2: 'Sampdoria',
        team1image: atalanta,
        team2image: sampdoria,
    },
    {
        id: 3,
        date: '30/03',
        hour: "20:00",
        competition: 'Ligue 1',
        team1: 'Marseille',
        team2: 'Paris-SG',
        team1image: marseille,
        team2image: psg,
    },
]

const footballnews = [
    {
        id: 1,
        date: '14/03',
        hour: "15:00",
        title: 'Barcelona vs Manchester City, Charity Match: Final Score 3-3.',
        topic: 'Club Friendly',
        description: [
            "Barcelona and Manchester City put on a great show in their charity match on Wednesday night at the Spotify Camp Nou which ended in a 3-3 draw in a very entertaining affair. Barça played well for most of the match and competed at a high level against one of the best teams in Europe, and the two sides shared the spoils in front of over 91,000 fans who packed the Blaugrana’s home to raise funds for ALS research and watch a very fun game of football. ",
            "Barça started the game brightly, pressing City’s buildup play well and creating chances by moving the ball quickly from back to front with Jules Koundé, Franck Kessie and Raphinha heavily involved as the Blaugrana attacked mostly through the right wing. Kessie hit the post after a nice solo run and Pierre-Emerick Aubameyang missed an open header from just 10 yards, and Barça should have been ahead after 20 minutes.",
            "But it was the away team that took the lead in horrible fashion when Iñaki Peña couldn’t claim a simple cross and dropped the ball right at the foot of Julian Álvarez who scored the easiest goal of his career. Barça responded well, however, and got the equalizer just eight minutes later when a cross into the box was deflected into the path of Aubameyang and the Gabonese fired a rocket of a volley into the near post that was too strong for Stefan Ortega to deal with. ",
            "The final 15 minutes had very little meaningful action as both teams mostly cancelled each other and a hard-fought, competitive friendly was all square at halftime. The final period continued to be well played by both sides, though Barça had a lot of trouble getting out of City’s press and constantly gave the ball away in dangerous positions. But the Blaugrana also did a good job pressing on the other end, and that led to their second goal when Gavi intercepted a Kevin De Bruyne pass inside the City box, and after Ortega saved Memphis Depay’s shot the ball fell to Frenkie De Jong who put the home team ahead."
        ],
        image: news1,
        saved: true
    },
    {
        id: 2,
        date: '21/03',
        hour: "20:00",
        title: "Bayer Leverkusen 2-1 Bayern Munich: Xabi Alonso's side claim win.",
        topic: 'Bundesliga',
        description: [
            "Bayern took the lead against the run of play after 22 minutes, scoring with their first and only shot of the first half. The ball fell to Joshua Kimmich who struck a fierce effort which, with the help of a deflection, found its way past Lukas Hradecky and into the back of the net.",
            "Julian Nagelsmann made a triple substitution at half time, bringing on Kingsley Coman, Jamal Musiala and Serge Gnabry with the German coach clearly looking for improvement from his side in attacking areas.",
            "Ten minutes into the second half, Frech winger Amine Adli went down inside the penalty area and was booked for simulation despite being clearly fouled. The referee went to the monitor and following a very brief VAR check he overturned the decision, rescinded Adli's card and Bayer Leverkusen were able to equalise from the penalty spot courtesy of Exequiel Palacios.",
            "Incredibly, Bayer Leverkusen scored a goal under the exact same circumstances as the first. 20 minutes after the first penalty, Adli was once again brought down inside the penalty area and was once again booked for simulation by the referee. However, just like in the first instance, his booking was rescinded following a VAR check, a penalty was given and Palacios was on hand to convert his second of the game.",
            "Alonso's side had to withstand a late barrage from Bayern but ultimately held firm in the closing moments to pull off a superb comeback - a win which sees them climb to eighth in the Bundesliga table and three points off the European places."
        ],
        image: news2,
        saved: false
    },
    {
        id: 3,
        date: '29/03',
        hour: "19:45",
        title: "Portugal 4-0 Liechtenstein: Cristiano Ronaldo scores twice.",
        topic: 'European Qualifiers',
        description: [
            "The 38-year-old has now scored a men's record 120 international goals.",
            "He made his international debut in 2003 and in Qatar last year became the first man to score in five World Cups.",
            "Ronaldo added to his goals tally with a second-half penalty before finding the top corner with a free-kick.",
            "Incredibly, Bayer Leverkusen scored a goal under the exact same circumstances as the first. 20 minutes after the first penalty, Adli was once again brought down inside the penalty area and was once again booked for simulation by the referee. However, just like in the first instance, his booking was rescinded following a VAR check, a penalty was given and Palacios was on hand to convert his second of the game.",
            "The forward - now playing in Saudi Arabia for Al Nassr - had been frustrated in front of goal during the first period, blazing a clear-cut chance well over the bar with the hosts only having a deflected Joao Cancelo effort as a reward for their dominance.",
            "However, Bernardo Silva doubled their advantage shortly after the restart with a low effort into the bottom corner, before Ronaldo came to the fore as he reached yet another milestone in fine fashion, while also becoming the first man to score 100 times in competitive internationals.",
            "Ronaldo had moved level with Kuwait forward Bader Al-Mutawa on 196 caps at the World Cup but there were question marks over his international future after Portugal's elimination by Morocco at the quarter-final stage.",
            "The five-time Ballon d'Or winner found himself dropped from the Portuguese starting XI at the tournament but justified his selection as captain in new manager Roberto Martinez's first game in charge."
        ], image: news3,
        saved: false
    },
]

const livegamestatus = [
    {
        game_id: 1,
        team1xg: 3.61,
        team2xg: 0.72,
        team1shoots: 15,
        team2shoots: 3,
        team1shootsontarget: 7,
        team2shootsontarget: 1,
        team1ballpossession: 67,
        team2ballpossession: 33,
        team1passes: 502,
        team2passes: 230,
        team1passesaccuracy: 87,
        team2passesaccuracy: 60,
        team1corners: 7,
        team2corners: 1,
        team1fouls: 8,
        team2fouls: 11,
        team1yellowcards: 2,
        team2yellowcards: 4,
        team1redcards: 0,
        team2redcards: 0,
        team1offsides: 3,
        team2offsides: 1,
    },
    {
        game_id: 2,
        team1xg: 1.36,
        team2xg: 1.07,
        team1shoots: 8,
        team2shoots: 5,
        team1shootsontarget: 3,
        team2shootsontarget: 2,
        team1ballpossession: 60,
        team2ballpossession: 40,
        team1passes: 302,
        team2passes: 285,
        team1passesaccuracy: 67,
        team2passesaccuracy: 65,
        team1corners: 4,
        team2corners: 2,
        team1fouls: 5,
        team2fouls: 7,
        team1yellowcards: 1,
        team2yellowcards: 3,
        team1redcards: 1,
        team2redcards: 0,
        team1offsides: 2,
        team2offsides: 2,
    },
    {
        game_id: 3,
        team1xg: 2.19,
        team2xg: 0.27,
        team1shoots: 9,
        team2shoots: 1,
        team1shootsontarget: 3,
        team2shootsontarget: 0,
        team1ballpossession: 72,
        team2ballpossession: 28,
        team1passes: 506,
        team2passes: 150,
        team1passesaccuracy: 85,
        team2passesaccuracy: 55,
        team1corners: 8,
        team2corners: 4,
        team1fouls: 8,
        team2fouls: 13,
        team1yellowcards: 3,
        team2yellowcards: 6,
        team1redcards: 0,
        team2redcards: 0,
        team1offsides: 5,
        team2offsides: 1,
    },
    {
        game_id: 4,
        team1xg: 0.99,
        team2xg: 0.13,
        team1shoots: 3,
        team2shoots: 1,
        team1shootsontarget: 2,
        team2shootsontarget: 0,
        team1ballpossession: 55,
        team2ballpossession: 45,
        team1passes: 303,
        team2passes: 110,
        team1passesaccuracy: 59,
        team2passesaccuracy: 57,
        team1corners: 3,
        team2corners: 1,
        team1fouls: 5,
        team2fouls: 7,
        team1yellowcards: 1,
        team2yellowcards: 3,
        team1redcards: 0,
        team2redcards: 0,
        team1offsides: 2,
        team2offsides: 0,
    },

    {
        game_id: 5,
        team1xg: 1.82,
        team2xg: 2.11,
        team1shoots: 3,
        team2shoots: 8,
        team1shootsontarget: 2,
        team2shootsontarget: 4,
        team1ballpossession: 44,
        team2ballpossession: 56,
        team1passes: 201,
        team2passes: 341,
        team1passesaccuracy: 60,
        team2passesaccuracy: 71,
        team1corners: 2,
        team2corners: 6,
        team1fouls: 5,
        team2fouls: 5,
        team1yellowcards: 2,
        team2yellowcards: 1,
        team1redcards: 0,
        team2redcards: 0,
        team1offsides: 2,
        team2offsides: 3,
    },
    {
        game_id: 6,
        team1xg: 4.07,
        team2xg: 0.88,
        team1shoots: 7,
        team2shoots: 2,
        team1shootsontarget: 4,
        team2shootsontarget: 1,
        team1ballpossession: 75,
        team2ballpossession: 25,
        team1passes: 608,
        team2passes: 120,
        team1passesaccuracy: 88,
        team2passesaccuracy: 52,
        team1corners: 7,
        team2corners: 2,
        team1fouls: 4,
        team2fouls: 9,
        team1yellowcards: 2,
        team2yellowcards: 3,
        team1redcards: 0,
        team2redcards: 0,
        team1offsides: 4,
        team2offsides: 1,
    },
]

export { populargames, matchschedule, footballnews, livegamestatus }