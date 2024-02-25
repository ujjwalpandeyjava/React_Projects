import sheet from './ErrorMessage.module.css';


function ErrorMessage({ chat }) {
    return (
        <div className={[sheet.errorResponse, sheet.error].join(" ")}>
            <div className={sheet.oneNewSectionForHeadAndRead}>
                <div className={sheet.contentToReadLoud} dangerouslySetInnerHTML={{ __html: chat.text }}></div>
                <div className={sheet.responseHead} aria-hidden={true}></div>
            </div>
        </div>
    )
}

export default ErrorMessage