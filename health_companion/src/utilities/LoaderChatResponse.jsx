import { PulseLoader } from "react-spinners";
import sheet from './Loaders.module.css';

function LoaderChatResponse() {
    return (
        <div className={sheet.pulseLoader}>
            <PulseLoader color="white" />
        </div>
    )
}

export default LoaderChatResponse