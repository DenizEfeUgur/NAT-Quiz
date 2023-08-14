export const Question = ({text, img}) => {

    return (
        <div>
           {text && <div className="question-text">
                {text}
            </div>}
            <img
                className="question-image"
                src={img}
                alt="Fragebild"
                />
        </div>

    )

}