import { SET_VIDEO_REF } from "./reduxReducers/RefCompSlice";


const SET_VIDEO_REF_FUN = (videoEle) => (dispatch) => {
    dispatch(SET_VIDEO_REF({ videoEle: videoEle }));
}



export { SET_VIDEO_REF_FUN };