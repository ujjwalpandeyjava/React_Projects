import { useState } from "react";
import { LuCheckCircle, LuClipboardCopy } from "react-icons/lu";
import { RiEdit2Fill } from "react-icons/ri";
import sheet from './Questions.module.css';


function Questions({ chat, questionWritingArea }) {
    const [allowTextCopy, setAllowTextCopy] = useState(true);
    // console.log(chat);
    function copyContent(text) {
        navigator.clipboard.writeText(text);
        setAllowTextCopy(false);
        setTimeout(() => {
            setAllowTextCopy(true);
        }, 2000);
    }

    function editTest(text) {
        questionWritingArea.current.innerHTML = text;
        // questionWritingArea.current.focus();
    }
    return (
        <div className={[sheet.askedQuestion, sheet.regular].join(" ")}>
            <div className={sheet.oneNewSectionForHeadAndRead}>
                <div className={sheet.contentToReadLoud} >{chat.text}</div>
                <div className={sheet.responseHead} aria-hidden={true}>
                    <RiEdit2Fill className={sheet.editText} onClick={() => editTest(chat.text)} title="Edit" />
                    {allowTextCopy ?
                        <LuClipboardCopy title="Copy text" className={sheet.copyContent} onClick={() => copyContent(chat.text)} /> :
                        <LuCheckCircle className={sheet.contentCopied} onClick={() => setAllowTextCopy(true)} />}
                </div>
            </div>
        </div>
    )
}

export default Questions