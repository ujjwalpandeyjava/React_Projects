import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { SET_USER_COMPANY_DETAILS } from "./actions/CompanionChat";
import { SET__USER_COMPANY_ID } from "./actions/reduxReducers/CompanionChatSlice";

export default function AppInstance() {
	const companionChatObj = useSelector(allStoreReducers => allStoreReducers.companionChatSlice_Reducer)
	let [searchParams] = useSearchParams();
	const dispatch = useDispatch();
	// const navigate = useNavigate();

	useEffect(() => {
		window["mustForChat"]["userName"] = searchParams.get("userName") || "";
		window["mustForChat"]["orgId"] = searchParams.get("orgId") || "";
		window["mustForChat"]["userId"] = searchParams.get("userId") || "";
		window["mustForChat"]["companyName"] = searchParams.get("companyName") || "";
		// Remove above code once we have the auth api
		window["mustForChat"]["companion_UserId"] = searchParams.get("companion_UserId") || "";

		dispatch(SET__USER_COMPANY_ID(searchParams.get("companion_UserId") || "Not Found"));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams])

	useEffect(() => {
		// if (companionChatObj.details.user.companion_UserId) dispatch(SET_USER_COMPANY_DETAILS(companionChatObj.details.user.companion_UserId));
	}, [companionChatObj.details.user.companion_UserId]);

	useEffect(() => {
		/*if (companionChatObj.details.issUserAuthenticate === true) {
			//  Go to page '/'
		} else if (companionChatObj.details.issUserAuthenticate === false) {
			//  Go to page '/Home'
			// navigate("/home", { replace: true })
			navigate("/home", { replace: false })
		}*/
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [companionChatObj.details.issUserAuthenticate])
	return (
		<Outlet />
	)
}