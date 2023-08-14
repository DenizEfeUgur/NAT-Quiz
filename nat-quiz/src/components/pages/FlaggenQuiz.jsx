import React from 'react'
import { Quiz } from '../Quiz';

const flaggenQuestions = [
  {
    bild: "https://cdn.pixabay.com/photo/2012/04/10/23/11/switzerland-26891_1280.png",
    options: ["Canada", "Russland", "USA", "Schweiz"],
    answer: "Schweiz",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2015/11/12/16/23/flag-1040575_1280.png",
    options: ["Neuseeland", "Zypern", "Columbien", "England"],
    answer: "Zypern",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326_1280.png",
    options: ["Kroatien", "Italien", "Thailand", "Indien"],
    answer: "Italien",
  },

  {
    bild: "https://cdn.pixabay.com/photo/2012/04/12/23/52/germany-31017_1280.png",
    options: ["Deutschland", "Frankreich", "Spanien", "Italien"],
    answer: "Deutschland",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/12/17/58/thailand-152711_1280.png",
    options: ["Costa Rica", "Thailand", "Lettland", "Estland"],
    answer: "Thailand",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/16/maldives-162352_1280.png",
    options: ["Türkei", "Algerien", "Malediven", "Libanon"],
    answer: "Malediven",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/16/new-zealand-162373_1280.png",
    options: ["Neuseeland", "Australien", "cookinseln", "Belgien"],
    answer: "Neuseeland",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/16/mozambique-162366_1280.png",
    options: ["Mosambik", "Belarus", "Kenia", "Nicaragua"],
    answer: "Mosambik",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_1280.png",
    options: ["Kanada", "USA", "Mexiko", "Brasilien"],
    answer: "USA",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/16/mexico-162359_1280.png",
    options: ["Kanada", "USA", "Mexiko", "Brasilien"],
    answer: "Mexiko",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2012/04/10/23/17/ethiopia-26943_1280.png",
    options: ["Ghana", "Mali", "Tansania", "Äthiopien"],
    answer: "Äthiopien",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2018/01/27/09/21/wallpaper-3110721_1280.jpg",
    options: ["Algerien", "Türkei", "Marokko", "Tunesien"],
    answer: "Türkei",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2015/10/24/21/30/albania-1005017_1280.png",
    options: ["Bosnien", "Albanien", "Serbien", "Mazedonien"],
    answer: "Albanien",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/17/swaziland-162432_1280.png",
    options: ["Benin", "Gabun", "Swasiland", "Mauritius"],
    answer: "Swasiland",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/16/lesotho-162340_1280.png",
    options: ["Lesotho", "Mauretanien", "Seychellen", "Malawi"],
    answer: "Lesotho",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/17/south-africa-162425_1280.png",
    options: ["Südafrika", "Kenia", "Äthiopien", "Nigeria"],
    answer: "Südafrika",
  },
  {
    bild: " https://cdn.pixabay.com/photo/2013/07/13/14/15/fiji-162293_1280.png",
    options: ["Burundi", "Botsuana", "Fidschi", "Gambia"],
    answer: "Fidschi",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/16/monaco-162361_1280.png",
    options: ["Indonesien", "Monaco", "Polen", "Tunesien"],
    answer: "Monaco",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2013/07/13/14/17/uruguay-162455_1280.png",
    options: ["Uruguay", "Paraguay", "Griechenland", "Argentinien"],
    answer: "Uruguay",
  },
  {
    bild: "https://cdn.pixabay.com/photo/2020/12/05/06/40/kazakhstan-5805211_1280.png",
    options: ["Irland", "Norwegen", "Kasachstan", "Slowakei"],
    answer: "Kasachstan",
  },
];

function FlaggenQuiz() {

    return <Quiz questions={flaggenQuestions}/>
}


export default FlaggenQuiz