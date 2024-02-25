import { useState } from 'react';
import { LuCheckCircle, LuClipboardCopy } from 'react-icons/lu';
import sheet from './Answer.module.css';
import TextToSpeechComp from './textToSpeech/TextToSpeechComp';


function Answer({ chat }) {
    const [allowTextCopy, setAllowTextCopy] = useState(true);
    function copyContent(text) {
        navigator.clipboard.writeText(text);
        setAllowTextCopy(false);
        setTimeout(() => {
            setAllowTextCopy(true);
        }, 2000);
    }
    return (
        <div className={[sheet.serverResponse, sheet.regular].join(" ")}>
            <div className={sheet.oneNewSectionForHeadAndRead}>
                <div className={sheet.contentToReadLoud} dangerouslySetInnerHTML={{ __html: chat.text }}></div>
                <div className={sheet.responseHead} aria-hidden={true}>
                    <TextToSpeechComp elementAsString={chat.text} highlightText={true} />
                    {allowTextCopy ?
                        <LuClipboardCopy className={sheet.copyContent} onClick={() => copyContent(chat.text)} /> :
                        <LuCheckCircle className={sheet.contentCopied} onClick={() => setAllowTextCopy(true)} />}
                </div>
            </div>
        </div>
    )
}

export default Answer