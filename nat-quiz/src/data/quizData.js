/** @format */

/**
 * Centralized quiz data.
 *
 * Every quiz shares the same normalized question shape so a single, reusable
 * <Quiz /> component can render all of them:
 *
 *   {
 *     prompt:  string | null,   // question text (null for pure image quizzes)
 *     image:   string | null,   // optional illustration / flag
 *     options: string[],        // answer choices
 *     answer:  string,          // the correct option
 *   }
 */

const flaggenQuestions = [
  {
    image:
      "https://cdn.pixabay.com/photo/2012/04/10/23/11/switzerland-26891_1280.png",
    options: ["Canada", "Russland", "USA", "Schweiz"],
    answer: "Schweiz",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/11/12/16/23/flag-1040575_1280.png",
    options: ["Neuseeland", "Zypern", "Columbien", "England"],
    answer: "Zypern",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326_1280.png",
    options: ["Kroatien", "Italien", "Thailand", "Indien"],
    answer: "Italien",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017_1280.png",
    options: ["Deutschland", "Frankreich", "Spanien", "Italien"],
    answer: "Deutschland",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/17/58/thailand-152711_1280.png",
    options: ["Costa Rica", "Thailand", "Lettland", "Estland"],
    answer: "Thailand",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/16/maldives-162352_1280.png",
    options: ["Türkei", "Algerien", "Malediven", "Libanon"],
    answer: "Malediven",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/16/new-zealand-162373_1280.png",
    options: ["Neuseeland", "Australien", "cookinseln", "Belgien"],
    answer: "Neuseeland",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/16/mozambique-162366_1280.png",
    options: ["Mosambik", "Belarus", "Kenia", "Nicaragua"],
    answer: "Mosambik",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_1280.png",
    options: ["Kanada", "USA", "Mexiko", "Brasilien"],
    answer: "USA",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/16/mexico-162359_1280.png",
    options: ["Kanada", "USA", "Mexiko", "Brasilien"],
    answer: "Mexiko",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2012/04/10/23/17/ethiopia-26943_1280.png",
    options: ["Ghana", "Mali", "Tansania", "Äthiopien"],
    answer: "Äthiopien",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2018/01/27/09/21/wallpaper-3110721_1280.jpg",
    options: ["Algerien", "Türkei", "Marokko", "Tunesien"],
    answer: "Türkei",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/10/24/21/30/albania-1005017_1280.png",
    options: ["Bosnien", "Albanien", "Serbien", "Mazedonien"],
    answer: "Albanien",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/17/swaziland-162432_1280.png",
    options: ["Benin", "Gabun", "Swasiland", "Mauritius"],
    answer: "Swasiland",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/16/lesotho-162340_1280.png",
    options: ["Lesotho", "Mauretanien", "Seychellen", "Malawi"],
    answer: "Lesotho",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/17/south-africa-162425_1280.png",
    options: ["Südafrika", "Kenia", "Äthiopien", "Nigeria"],
    answer: "Südafrika",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/15/fiji-162293_1280.png",
    options: ["Burundi", "Botsuana", "Fidschi", "Gambia"],
    answer: "Fidschi",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/16/monaco-162361_1280.png",
    options: ["Indonesien", "Monaco", "Polen", "Tunesien"],
    answer: "Monaco",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/14/17/uruguay-162455_1280.png",
    options: ["Uruguay", "Paraguay", "Griechenland", "Argentinien"],
    answer: "Uruguay",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2020/12/05/06/40/kazakhstan-5805211_1280.png",
    options: ["Irland", "Norwegen", "Kasachstan", "Slowakei"],
    answer: "Kasachstan",
  },
].map((q) => ({ prompt: null, ...q }));

const allgemeinQuestions = [
  {
    prompt: "Welches ist das grösste Land der Welt?",
    image:
      "https://cdn.pixabay.com/photo/2016/04/01/22/32/world-1301744_1280.png",
    options: ["Canada", "Russland", "USA", "China"],
    answer: "Russland",
  },
  {
    prompt: "In welchem Jahr endete der Zweite Weltkrieg?",
    image:
      "https://cdn.pixabay.com/photo/2017/06/10/06/39/calender-2389150_1280.png",
    options: ["1939", "1944", "1945", "1950"],
    answer: "1945",
  },
  {
    prompt: "Wie viele Planeten hat unser Sonnensystem?",
    image:
      "https://cdn.pixabay.com/photo/2012/04/10/17/38/saturn-26618_1280.png",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    prompt: "Welcher ist der längste Fluss der Welt?",
    image:
      "https://cdn.pixabay.com/photo/2015/08/26/17/35/water-908813_1280.png",
    options: ["Nil", "Amazonas", "Mississippi", "Jangtse"],
    answer: "Nil",
  },
  {
    prompt: "Was ist die chemische Formel für Sauerstoff?",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/01/07/chemistry-155121_1280.png",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "O2",
  },
  {
    prompt: "Welches ist das höchste Gebirge der Welt?",
    image:
      "https://cdn.pixabay.com/photo/2012/04/13/01/09/mountains-31590_1280.png",
    options: ["Anden", "Himalaya", "Rocky Mountains", "Alpen"],
    answer: "Himalaya",
  },
  {
    prompt: "Wie viele Zähne hat ein Mensch?",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/28/dentist-158225_1280.png",
    options: ["24", "26", "32", "36"],
    answer: "32",
  },
  {
    prompt: "Wer ist der Gründer von Microsoft?",
    image: "https://cdn.pixabay.com/photo/2012/04/10/23/33/logo-27046_1280.png",
    options: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"],
    answer: "Bill Gates",
  },
  {
    prompt: "Was ist die Hauptstadt von Australien?",
    image:
      "https://cdn.pixabay.com/photo/2016/03/31/21/55/australia-1296727_1280.png",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
  },
  {
    prompt: "Wie viele Ozeane gibt es auf der Erde?",
    image: "https://cdn.pixabay.com/photo/2014/04/02/11/01/wave-305226_1280.png",
    options: ["3", "4", "5", "6"],
    answer: "5",
  },
  {
    prompt: "Wie viele Knochen hat ein Mensch?",
    image: "https://cdn.pixabay.com/photo/2013/07/13/10/27/bone-157272_1280.png",
    options: ["187", "156", "127", "206"],
    answer: "206",
  },
  {
    prompt: "Wer malte das Gemälde 'Die Mona Lisa'?",
    image:
      "https://cdn.pixabay.com/photo/2016/03/19/04/40/paint-1266212_1280.png",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    prompt: "In welchem Jahr fand die erste Mondlandung statt?",
    image:
      "https://cdn.pixabay.com/photo/2018/03/26/14/07/space-3262811_1280.jpg",
    options: ["1969", "1975", "1981", "1992"],
    answer: "1969",
  },
  {
    prompt: "Wie viele Kantone hat die Schweiz?",
    image:
      "https://cdn.pixabay.com/photo/2016/10/21/19/05/switzerland-1758854_1280.png",
    options: ["23", "24", "25", "26"],
    answer: "26",
  },
  {
    prompt: "Was ist die chemische Formel für Wasser?",
    image:
      "https://cdn.pixabay.com/photo/2012/04/26/11/17/periodic-table-42115_1280.png",
    options: ["H2O", "CO2", "NaCl", "C6H12O6"],
    answer: "H2O",
  },
  {
    prompt: "Welcher Planet ist der nächste zur Sonne?",
    image: "https://cdn.pixabay.com/photo/2012/05/04/10/17/sun-47083_1280.png",
    options: ["Venus", "Mars", "Merkur", "Jupiter"],
    answer: "Merkur",
  },
  {
    prompt: "Wer hat die Relativitätstheorie entwickelt?",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/18/31/einstein-153422_1280.png",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Stephen Hawking",
      "Galileo Galilei",
    ],
    answer: "Albert Einstein",
  },
  {
    prompt: "Wie viele Kontinente gibt es auf der Erde?",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/12/54/world-map-146505_1280.png",
    options: ["4", "5", "6", "7"],
    answer: "7",
  },
  {
    prompt:
      "Welches ist das älteste noch existierende Weltwunder der Antike?",
    image:
      "https://cdn.pixabay.com/photo/2017/08/13/16/29/eye-of-horus-2637716_1280.png",
    options: [
      "Pyramiden von Gizeh",
      "Hängende Gärten von Babylon",
      "Zeusstatue des Phidias",
      "Artemistempel in Ephesos",
    ],
    answer: "Pyramiden von Gizeh",
  },
  {
    prompt: "Welches ist das längste Tier der Welt?",
    image: "https://cdn.pixabay.com/photo/2012/04/13/21/31/fish-33712_1280.png",
    options: ["Blauwal", "Koloss-Kalmar", "Ameise", "Riesenseestern"],
    answer: "Blauwal",
  },
];

const tierQuestions = [
  {
    prompt: "Was ist das kleinste Tier der Welt?",
    image:
      "https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_1280.png",
    options: ["Myxobolus shekel", "Ameise", "Kaulquappe", "Laus"],
    answer: "Myxobolus shekel",
  },
  {
    prompt: "Welches Tier kann am höchsten springen?",
    image: "https://cdn.pixabay.com/photo/2013/07/13/14/07/man-162155_1280.png",
    options: ["Puma", "Pferd", "Heuschrecke", "Delfin"],
    answer: "Delfin",
  },
  {
    prompt: "Wie heisst dieses Tier hier?",
    image:
      "https://images.gutefrage.net/media/fragen/bilder/tun-diese-tiere-euch-leid/0_big.jpg?v=1622726471864",
    options: ["Wels", "Blobfisch", "Marwin", "Schleie"],
    answer: "Blobfisch",
  },
  {
    prompt: "Wie nennt man den weiblichen Schwan?",
    image: "https://cdn.pixabay.com/photo/2012/04/15/18/36/swan-34836_1280.png",
    options: ["Schwänin", "Schwan"],
    answer: "Schwänin",
  },
  {
    prompt: "Welches Tier existiert NOCH?",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/12/32/tombstone-159792_1280.png",
    options: ["Mamut", "Megaladon", "Wandertaube", "Nasenaffe"],
    answer: "Nasenaffe",
  },
  {
    prompt: "Welches Tier hat den längsten Winterschlaf?",
    image:
      "https://cdn.pixabay.com/photo/2014/03/24/17/19/winter-sleep-295403_1280.png",
    options: ["Schlafbeutler", "Murmeltier", "Bär", "Koala"],
    answer: "Murmeltier",
  },
  {
    prompt: "Wie heisst das Tier?",
    image:
      "https://st.depositphotos.com/1052482/3034/i/450/depositphotos_30344971-stock-photo-manta-and-divers-on-the.jpg",
    options: [
      "Schmetterlingsrochen",
      "Sternrochen",
      "Manta Rochen",
      "Gitarrenrochen",
    ],
    answer: "Manta Rochen",
  },
  {
    prompt: "Welches ist das faulste Tier der Welt?",
    image: "https://cdn.pixabay.com/photo/2012/04/28/20/55/bee-44523_1280.png",
    options: ["Faultier", "Koala", "Krabbe", "Katze"],
    answer: "Faultier",
  },
  {
    prompt: "Wie viele Tiere gibt es auf der Welt?",
    image: "https://cdn.pixabay.com/photo/2017/06/27/08/27/pay-2446667_1280.png",
    options: [
      "ca. 1 Billiarde",
      "ca. 10 Billiarden",
      "ca. 100 Billiarden",
      "ca. 1 Trillion",
    ],
    answer: "ca. 1 Trillion",
  },
  {
    prompt: "Wie nennt man ein männliches Schwein?",
    image: "https://cdn.pixabay.com/photo/2012/05/07/04/17/pig-47920_1280.png",
    options: ["Schwein", "Eber", "Sau", "Ferkel"],
    answer: "Eber",
  },
  {
    prompt: "Wie viel Liter trinkt ein Pferd durchschnittlich pro Tag?",
    image:
      "https://cdn.pixabay.com/photo/2016/04/01/09/28/donkey-1299389_1280.png",
    options: ["0-20 Liter", "20-40 Liter", "40-60 Liter", "60-80 Liter"],
    answer: "40-60 Liter",
  },
  {
    prompt:
      "Es gibt ein Tier, welches im Wasser lebt und unsterblich ist, solange es nicht gefressen wird.",
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/13/14/ocean-160613_1280.png",
    options: ["Richtig", "Falsch"],
    answer: "Richtig",
  },
  {
    prompt: "Welches Tier hat die längste Lebensdauer?",
    image: "https://cdn.pixabay.com/photo/2017/02/15/20/58/ekg-2069872_1280.png",
    options: ["Elefant", "Schildkröte", "Hund", "Pinguin"],
    answer: "Schildkröte",
  },
  {
    prompt: "Welches Tier kann am längsten ohne Nahrung auskommen?",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/19/05/no-food-154333_1280.png",
    options: ["Schlange", "Hai", "Kamel", "Fledermaus"],
    answer: "Kamel",
  },
  {
    prompt: "Welches ist das schnellste Landtier der Welt?",
    image: "https://cdn.pixabay.com/photo/2012/05/07/11/42/snail-48182_1280.png",
    options: ["Gepard", "Antilope", "Strauss", "Giraffe"],
    answer: "Gepard",
  },
  {
    prompt: "Welches ist die grösste flugfähige Vogelart?",
    image: "https://cdn.pixabay.com/photo/2015/01/30/00/45/bird-616803_1280.png",
    options: ["Adler", "Pinguin", "Pelikan", "Albatros"],
    answer: "Albatros",
  },
  {
    prompt: "Wie nennt man die männliche Biene?",
    image: "https://cdn.pixabay.com/photo/2012/04/02/14/24/bee-24633_1280.png",
    options: ["Arbeiter", "König", "Krieger", "Drohne"],
    answer: "Drohne",
  },
  {
    prompt: "Wie viele Herzen hat eine Krake?",
    image:
      "https://cdn.pixabay.com/photo/2017/01/31/19/03/animal-2026466_1280.png",
    options: ["0", "1", "2", "3"],
    answer: "3",
  },
  {
    prompt: "Welches Tier kann am längsten ohne Schlaf auskommen?",
    image:
      "https://cdn.pixabay.com/photo/2018/10/02/15/18/cloud-3719093_1280.png",
    options: ["Mensch", "Giraffe", "Elefant", "Koala"],
    answer: "Elefant",
  },
  {
    prompt: "Welches Tier kann am längsten unter Wasser bleiben?",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/16/36/snorkeling-151241_1280.png",
    options: ["Schildkröte", "Schnabelwal", "Delfin", "Seehund"],
    answer: "Schnabelwal",
  },
];

/**
 * Quiz catalogue consumed by the landing page and the <Quiz /> component.
 * `accent` drives the theme colour of each quiz via a CSS custom property.
 */
export const quizzes = [
  {
    id: "flaggen",
    title: "Flaggen-Quiz",
    emoji: "🌍",
    description: "Erkennst du die Flaggen der Welt?",
    accent: "#3b82f6",
    accentSoft: "rgba(59, 130, 246, 0.18)",
    questions: flaggenQuestions,
  },
  {
    id: "allgemein",
    title: "Allgemeinwissen",
    emoji: "🧠",
    description: "Teste dein Wissen über Gott und die Welt.",
    accent: "#f59e0b",
    accentSoft: "rgba(245, 158, 11, 0.18)",
    questions: allgemeinQuestions,
  },
  {
    id: "tier",
    title: "Tier-Quiz",
    emoji: "🐾",
    description: "Wie gut kennst du das Tierreich?",
    accent: "#10b981",
    accentSoft: "rgba(16, 185, 129, 0.18)",
    questions: tierQuestions,
  },
];

export default quizzes;
