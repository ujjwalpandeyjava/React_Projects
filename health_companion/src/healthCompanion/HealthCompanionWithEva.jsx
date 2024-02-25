import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BsFillSendFill } from "react-icons/bs";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbRefresh } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { ADD_AI_INITIAL_MESSAGE, CONVERSATION_ENDED, RESOLVE_QUERY } from "../actions/CompanionChat";
import { SET_VIDEO_REF } from "../actions/reduxReducers/RefCompSlice";
import companionVideo from '../assets/videos/Absolute_Reality_Nurse_2_Leo_noBG_Lipsing_muted.mp4';
import Loader1 from '../utilities/Loader1';
import FreshChatHints from "./FreshChatHints";
import sSheet from "./HealthCompanion.module.css";
import QuestionExamples from "./QuestionExamples";
import Messages from './messages/Messages';
import FullScreenButtonToggle from "./miniComponents/ToggleFullScreen";

function HealthCompanion() {
    document.title = "Companion";
    const dispatch = useDispatch()
    const questionWritingArea = useRef();
    const lispingVideoRef = useRef();
    const elementToFullScreenRef = useFullScreenHandle();

    const [showChatButton, setShowChatButton] = useState(null)
    const [showLoader, setShowLoader] = useState(true);
    const companionChatObj = useSelector(allStoreReducers => allStoreReducers.companionChatSlice_Reducer)
    const { isMicrophoneAvailable, transcript, listening, resetTranscript, browserSupportsSpeechRecognition, interimTranscript, finalTranscript } = useSpeechRecognition();

    // Initial message and component unload
    useEffect(() => {
        setTimeout(() => {
            if (companionChatObj.chatHistory.length < 1)
                dispatch(ADD_AI_INITIAL_MESSAGE())
        }, 100);

        // Set is the video available 
        dispatch(SET_VIDEO_REF({ videoCompAvailable: !!lispingVideoRef }));

        // On unloadSend conversation ended
        return () => {
            letServerKnow_ConversationEndsHere();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const refComponents = useSelector(all => all.RefCompSlice_Reducer);
    useEffect(() => {
        if (refComponents.companionVideoEle.play === true) {
            lispingVideoRef.current.play()
        } else {
            lispingVideoRef.current.currentTime = 0
            lispingVideoRef.current.pause()
        }
    }, [refComponents])


    useEffect(() => {
        if (listening) {
            // console.log("Listen related");
        } else {
            // console.log("Listening stop related");
        }
        // questionWritingArea.current.innerHTML = finalTranscript;
        questionWritingArea.current.innerHTML = transcript;
    }, [listening, interimTranscript, finalTranscript, transcript]);

    // Show loaders
    useEffect(() => {
        if (companionChatObj.chatHistory.length < 1) // no chat
            setShowLoader(true);
        else if (companionChatObj.chatHistory.at(-1).isAnswer === true || (companionChatObj.chatHistory.at(-1).isQuestion === false && companionChatObj.chatHistory.at(-1).isAnswer === false))
            setShowLoader(false);
        else if (companionChatObj.chatHistory.at(-1).isQuestion === true)
            setShowLoader(true);
    }, [companionChatObj]);

    function startMic() {
        if (browserSupportsSpeechRecognition) {
            if (isMicrophoneAvailable) {
                resetTranscript()
                SpeechRecognition.startListening({ continuous: true });
            } else alert("Please allow mic access!")
        } else alert(`Browser does'nt support speech recognition`);
    }
    function stopMic() {
        SpeechRecognition.stopListening();
    }
    function questionAreaOnFocus() {
        stopMic()
    }
    function showHideExampleQues() {
        console.log("showHideExampleQues");
    }
    function letServerKnow_ConversationEndsHere() {
        dispatch(CONVERSATION_ENDED());
    }
    function sendReqToChapGPT(textToSend = null) {
        if (showLoader === true)
            return;
        let queryToSend;
        if (textToSend && typeof textToSend === "string")
            queryToSend = textToSend;
        else
            queryToSend = questionWritingArea.current.textContent;
        if (queryToSend) {
            stopMic()
            resetTranscript()
            dispatch(RESOLVE_QUERY(queryToSend.trim()));
            setTimeout(() => {
                questionWritingArea.current.innerHTML = "";
            }, 30);
        } else console.warn("No text to send!");
    }
    function checkEnterAndSend(e) {
        console.log(questionWritingArea.current.textContent, e.key);
        if ((e.key === 'Enter' || e.keyCode === 13) && !e.shiftKey) {
            sendReqToChapGPT()
        }
    }
    function holdMousedown(event) {
        event.stopPropagation();
    }

    return (
        <FullScreen handle={elementToFullScreenRef}>
            <div id={sSheet.companionContainer}>
                <div className={sSheet.chatBoxContainer}>
                    {/* Don't move these two away from each other */}
                    <Draggable axis="both" handle=".handle" onMouseDown={holdMousedown}>
                        <video ref={lispingVideoRef} id={sSheet.sironaAvatar} className={[sSheet.sironaAvatar, "handle"].join(" ")}
                            loop={true} src={companionVideo} onContextMenu={() => console.log('Hmm')} ></video>
                    </Draggable>
                    <div className={sSheet.chatBox}  >
                        <div className={sSheet.sectionChatResponse}>
                            <div className={sSheet.chatResponseText}>
                                <div id={sSheet.fullChatEffectingActions} aria-hidden="true">
                                    <button title="Idea of what you can ask" id={sSheet.examplesBtn} onClick={() => showHideExampleQues()}>Examples</button>
                                    <button title="Start a new conversation" onClick={() => letServerKnow_ConversationEndsHere()}>Reset <TbRefresh id="transcriptResetAction" /></button>
                                    <FullScreenButtonToggle elementFullScreenHandle={elementToFullScreenRef} />
                                </div>
                                <div id={sSheet.chatResponseTextText}>
                                    {companionChatObj.chatHistory.length < 1 ?
                                        <FreshChatHints /> :
                                        <Messages chatList={companionChatObj.chatHistory} questionWritingArea={questionWritingArea} />}
                                    {/* <LoaderChatResponse /> */}
                                    {showLoader ? <Loader1 /> : null}
                                </div>
                                <div className={sSheet.sectionChatQuestion}>
                                    <div className={sSheet.chatQuestionText} name="chatQuestionText" id="chatQuestionText" rows="1"
                                        onFocus={questionAreaOnFocus} ref={questionWritingArea} onKeyDown={(event => checkEnterAndSend(event))}
                                        contentEditable="true" suppressContentEditableWarning={true} ></div>
                                    <div className={sSheet.chatQuestionTextActions} aria-hidden="true">
                                        <button>
                                            {listening ?
                                                <FaMicrophone className={[sSheet.micListeningTrue, sSheet.chatActionButtons].join(" ")} onClick={stopMic} /> :
                                                <FaMicrophoneSlash className={[sSheet.micListeningFalse, sSheet.chatActionButtons].join(" ")} onClick={startMic} />}
                                        </button>
                                        <button>
                                            <BsFillSendFill onClick={sendReqToChapGPT} className={[sSheet.chatActionButtons].join(" ")} />
                                        </button>
                                    </div>
                                </div>
                                <div id={sSheet.msgOnHScreen} >
                                    <div>
                                        Welcome to
                                        {companionChatObj.details.company.imagUrl ?
                                            <img alt={companionChatObj.details.company.imageAltText} id={sSheet.companyLogo} src={companionChatObj.details.company.imagUrl} /> :
                                            companionChatObj.details.company.name}
                                    </div>
                                    <span id={sSheet.tagLine}>{companionChatObj.details.company.tagLine}</span>
                                </div>
                            </div>
                            <div className={sSheet.chatResponseImportant}>
                                {showChatButton ? <FaArrowLeftLong onClick={() => setShowChatButton(false)} /> : null}
                                <div className={sSheet.leftSideShowings}>
                                    <QuestionExamples setTextBackRef={questionWritingArea} />
                                </div>
                            </div>
                        </div>
                        {/* Add Chat but not chat related */}
                    </div>
                </div>
                {/* Add other elements here */}
                {/* Like: Add video call, notifications */}
            </div>
        </ FullScreen >
    )
}

export default HealthCompanion;