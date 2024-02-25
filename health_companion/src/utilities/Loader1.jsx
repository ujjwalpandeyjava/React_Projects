import sheet from './Loaders.module.css';

function Loader1() {
    return (
        <div className={sheet.loader1} id="waitingForResp">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Loader1