import ReactHtmlParser from 'html-react-parser';
import { useEffect } from 'react';
import { FaPause, FaPlay, FaStop } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useTts } from 'tts-react';
import { TOGGLE_COMPANION_PLAY } from '../../../actions/reduxReducers/RefCompSlice';
import sheet from './TextToSpeechComp.module.css';

export default function TextToSpeechComp(props) {
    return (
        <CustomTTSComponent highlightText={props.highlightText}>
            <p style={{ display: 'none' }} aria-hidden="true">{removeElementsNotToSpeak(props.elementAsString)}</p>
        </CustomTTSComponent>
    )
}

// If sending a node, send its innerHTML
function removeElementsNotToSpeak(stringToParse) {
    let stringToSpeak = "";
    if (typeof stringToParse === "string")
        stringToParse = ReactHtmlParser(stringToParse);
    for (let index = 0; index < stringToParse.length; index++) {
        if (typeof stringToParse[index] === 'string')
            stringToSpeak += stringToParse[index];
        // else if (stringToParse[index].type && !['table'].includes(stringToParse[index].type))
        // stringToSpeak += stringToSpeak.textContent;
    }

    return stringToSpeak || "  ";
}

function CustomTTSComponent({ children, highlightText = false }) {
    const dispatch = useDispatch()

    const { ttsChildren, state, play, stop, pause } = useTts({
        children,
        markTextAsSpoken: highlightText
    });

    useEffect(() => {
        dispatch(TOGGLE_COMPANION_PLAY({ play: state.isPlaying }));
        // eslint-disable-next-line
    }, [state.isPlaying])

    return (
        <div className={sheet.main}>
            {!state.isPlaying ?
                <FaPlay className={sheet.speakContent} onClick={play} /> :
                <>
                    <FaStop className={sheet.stopContent} onClick={stop} />
                    <FaPause title='Start from ' className={sheet.pauseContent} onClick={pause} />
                </>
            }
            {ttsChildren}
        </div>
    )
}