import { TbSend } from "react-icons/tb";
import sSheet from "./QuestionExamples.module.css";
import questionExamplesJSON from './QuestionExamplesJSON.json';

export default function QuestionExamples({ setTextBackRef }) {
    return (
        <div className={sSheet.entry}>
            <div className={sSheet.heading}>List of questions...</div>
            {questionExamplesJSON.length < 1 ?
                <h1>No Examples given</h1> :
                <div className={sSheet.listOfTopics}>
                    {questionExamplesJSON.map((eachQGroup, index) => {
                        return <div key={`topic${index + 1}`} className={sSheet.eachGroup}>
                            <div className={sSheet.eachGroupHeading}>
                                {eachQGroup.heading || "No heading"}
                            </div>
                            <div className={sSheet.eachGroupQuestions}>
                                {!(eachQGroup.questions.length > 0) ?
                                    <div className={sSheet.noQuestionInTopic}>No questions on this topic</div> :
                                    eachQGroup.questions.map((eachQ, indexQ) => {
                                        return (
                                            <div key={`eachQ${indexQ}`} className={sSheet.eachQ}>
                                                <span>{eachQ || "---"}</span>
                                                <TbSend title="Send" className={sSheet.eachQIcon1} onClick={() => {
                                                    setTextBackRef.current.innerHTML = eachQ
                                                }} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    })}
                </div>
            }
        </div>
    )
}