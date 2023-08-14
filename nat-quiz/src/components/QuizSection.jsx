import React from "react";
import { QuizSectionItem } from "./QuizSectionItem";
import "../App.css"
import Flaggen from "../Flaggen"
import Allgemein from "../Allgemein";
import Tier from "../Tier";
import ReactDOM from "react-dom"



export const QuizSection = () => {

    const root = ReactDOM.createRoot(document.getElementById("root"));

    // function allgemeinQuiz() {
    //   root.render(<Allgemein />);
    // }
    
    // function flaggenQuiz() {
    //   root.render(<Flaggen />);
    // }
    
    // function ZliQuiz() {
    //   root.render(<Tier />);
    // }

    return (
        <div className="container">
            <QuizSectionItem page="/flaggenQuiz" picture="https://cdn.pixabay.com/photo/2013/07/12/19/18/world-154527_1280.png" description="Flaggen"/>
            <QuizSectionItem page="/allgemeinQuiz" picture="https://cdn.pixabay.com/photo/2017/01/31/00/09/books-2022464_1280.png" description="Allgemeinwissen"/>
            <QuizSectionItem page="/tierQuiz" picture="https://cdn.pixabay.com/photo/2016/03/31/22/14/blue-1296931_1280.png" description="Tier"/>
        </div>
    )
}