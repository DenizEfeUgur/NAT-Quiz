import { Button } from "./Button"

export const ButtonSection = ({onAnswer, answers}) => {
    return(
        <>
            {answers.map((answer) => {
                return (
                    <div className="answer-options">
                        <Button onClick={() => onAnswer(answer)} value={answer}/>
                    </div>
                )
            })}
        </>
    )
}