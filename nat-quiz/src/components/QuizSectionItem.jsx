import "../App.css"
import { Link } from "react-router-dom";

export const QuizSectionItem = ({picture, description, page}) => {
    return( 
        <div className="quiz-item">
            <Link to={page}>
                <img
                    alt="QuizSelectionItem"
                    className="pic"
                    src={picture}
                />
            </Link>
            <label className="lbl">{description} Quiz</label>
        </div>
    )
}