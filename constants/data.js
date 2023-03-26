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

const livegames = [
    {
        id: 1,
        competition: 'UEFA Champions League',
        minute: "40",
        scoreboard: '4-0',
        team1: 'Bayern Munich',
        team2: 'Real Madrid',
        team1image: bayernmunich,
        team2image: realmadrid,
    },
    {
        id: 2,
        competition: 'UEFA Europa League',
        minute: '70',
        scoreboard: '2-1',
        team1: 'FC Barcelona',
        team2: 'Man. United',
        team1image: barcelona,
        team2image: manunited,
    },
    {
        id: 3,
        competition: 'UEFA Europa League',
        minute: '70',
        scoreboard: '2-0',
        team1: 'Sevilla',
        team2: 'Bétis',
        team1image: sevilla,
        team2image: betis,
    },
    {
        id: 4,
        competition: 'UEFA Europa League',
        minute: '70',
        scoreboard: '1-0',
        team1: 'Bayer Leverkusen',
        team2: 'AS Roma',
        team1image: bayerleverkusen,
        team2image: asroma,
    },

    {
        id: 5,
        competition: 'UEFA Champions League',
        minute: '40',
        scoreboard: '1-3',
        team1: 'Arsenal',
        team2: 'AC Milan',
        team1image: arsenal,
        team2image: acmilan,
    },
    {
        id: 6,
        competition: 'UEFA Champions League',
        minute: '40',
        scoreboard: '2-0',
        team1: 'Livepool',
        team2: 'B. Dortmund',
        team1image: liverpool,
        team2image: borussiadortmund,
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

export { livegames, matchschedule, footballnews }