import { Button } from "./Button"

export const ButtonSection = ({onAnswer, answers}) => {
    
    return(
        <>
            {answers.map((data) => {
                for(let i=0; i <= answers.length; i++){
                return (
                    <div className="answer-options">
                        <Button onClick={onAnswer} value={answers[i]}/>
                    </div>
                )}
            })}
        </>
    )
}