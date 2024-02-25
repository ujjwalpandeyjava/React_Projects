import { useEffect, useState } from "react";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { ImSpinner } from "react-icons/im";
import utilityStyle from "../../utilities/Utilities.module.css";
import sheet from "./ToggleFullScreen.module.css";
// import { checkForMobile } from '../../utilities/Utilities';

export default function FullScreenButtonToggle({ elementFullScreenHandle }) {
	const [fullScreenIcon, setFullScreenIcon] = useState(null)

	useEffect(() => {
		if (document.fullscreenElement)
			setFullScreenIcon(1);
		else
			setFullScreenIcon(2);
	}, [])

	function enterFullScreen() {
		elementFullScreenHandle.enter();
		setFullScreenIcon(1)
	}
	function exitFullScreen() {
		if (document.fullscreenElement) {
			elementFullScreenHandle.exit();
			setFullScreenIcon(2)
		}
	}
	function toggleFullscreen() {
		if (document.fullscreenElement)
			exitFullScreen()
		else
			enterFullScreen()
	}

	switch (fullScreenIcon) {
		case 1:
			return <button title="Exit full screen view" onClick={() => exitFullScreen()}>
				<AiOutlineFullscreenExit className={[utilityStyle.user_NoSelection].join(" ")} />
			</button>
		case 2:
			return <button title="Enter full screen view" onClick={() => enterFullScreen()}>
				<AiOutlineFullscreen className={[utilityStyle.user_NoSelection].join(" ")} />
			</button>
		default:
			return <button title="Switch screen view" className={sheet.spinInfinite}>
				<ImSpinner onClick={() => toggleFullscreen()} />;
			</button>
	}
}
