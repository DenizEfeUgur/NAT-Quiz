import "../App.css"

export const QuizSectionItem = ({picture, description, quiz}) => {
    return( 
        <div className="quiz-item">
            <img
                onClick={quiz}
                alt="QuizSelectionItem"
                className="pic"
                src={picture}
            />
            <label className="lbl">{description} Quiz</label>
        </div>
    )
}