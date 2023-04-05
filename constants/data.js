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
        description: "New Winning era FC manager Hano is reportedly interested in making Senja FC midfielder Samuel Marae his first signing in the June transfer window. As is known, the 31-year-old player has returned to be an important part of the White throughout the 2021/2022 season. He has made 40 appearances in all competitions, contributing two goals and five assists. Samule Marae current contract at Mandala Stadium expires in June. In recent weeks there has been speculation surrounding the Meranomi international's future.",
        image: news1,
        saved: true
    },
    {
        id: 2,
        date: '21/03',
        hour: "20:00",
        title: "Bayer Leverkusen 2-1 Bayern Munich: Xabi Alonso's side claim win.",
        topic: 'Bundesliga',
        description: "The ex-effect claims another victim, this time in the coaching sense. Xabi Alonso coached Bayer Leverkusen to a masterful win over Bayern Munich which now blows the title race wide open. Der Klassiker after the international break is going to be massive. Julian Nagelsmann made the wrong substitutions. Did he get overconfident? Subbing Thomas Muller so early was a mistake, Bayern’s control and pressing from the first half simply fell apart. Leroy Sane probably shouldn’t have played a full 90 minutes. Mathys Tel should’ve come on sooner. This is a very frustrating loss.",
        image: news2,
        saved: false
    },
    {
        id: 3,
        date: '29/03',
        hour: "19:45",
        title: "Portugal 4-0 Liechtenstein: Cristiano Ronaldo scores twice.",
        topic: 'European Qualifiers',
        description: "The 38-year-old has now scored a men's record 120 international goals. He made his international debut in 2003 and in Qatar last year became the first man to score in five World Cups. he forward - now playing in Saudi Arabia for Al Nassr - had been frustrated in front of goal during the first period, blazing a clear-cut chance well over the bar with the hosts only having a deflected Joao Cancelo effort as a reward for their dominance.",
        image: news3,
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