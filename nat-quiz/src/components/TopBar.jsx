import { Clock } from "./Clock"

export const TopBar = ({text}) => {
    return (
        <div className="question-count">
              {text}
              <Clock />
        </div>
    )
}