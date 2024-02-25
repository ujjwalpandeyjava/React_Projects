import Answer from './Answer';
import ErrorMessage from './ErrorMessage';
import sSheet from './Messages.module.css';
import Questions from './Questions';

export default function Messages({ chat, questionWritingArea }) {
    console.log("====", chat);
    if (chat.isQuestion === true && chat.isAnswer === false) {
        return (
            <div className={sSheet.askedQuestionCont}>
                <Questions chat={chat} questionWritingArea={questionWritingArea} />
            </div>
        )
    } else if (chat.isQuestion === false && chat.isAnswer === true) {
        return (
            <div className={sSheet.serverResponseCont}>
                <Answer chat={chat} />
            </div>
        )
    } else if (chat.isQuestion === false && chat.isAnswer === false) {
        return (
            <div className={sSheet.errorCont}>
                <ErrorMessage chat={chat} />
            </div>
        )
    } else return null;
}
