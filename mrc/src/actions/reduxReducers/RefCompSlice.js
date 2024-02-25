import { createSlice } from "@reduxjs/toolkit";

const refComponents = createSlice({
    name: "refComponents",
    initialState: {
        companionVideoEle: {
            videoCompAvailable: false,
            play: false,
            text: ""
        },
        companionModelEle: {
            modelCompAvailable: false,
            play: false,
            text: ""
        }
    },
    reducers: {
        SET_VIDEO_REF: (state, action) => {
            state.companionVideoEle.videoCompAvailable = action.payload.videoCompAvailable;
        },
        TOGGLE_COMPANION_PLAY: (state, action) => {
            if (state.companionVideoEle.videoCompAvailable === true) {
                state.companionVideoEle.play = action.payload.play;
                state.companionVideoEle.text = action.payload.text;
            }
        },
        SET_MODEL_REF: (state, action) => {
            state.companionModelEle.modelCompAvailable = action.payload.modelCompAvailable;
        }
    }
})

export const { SET_VIDEO_REF, TOGGLE_COMPANION_PLAY, SET_MODEL_REF } = refComponents.actions;
export default refComponents.reducer;