import React from 'react'
import heartRateOnWatchLink from './images_used/heartRateGIF.gif'



const ProductPreview = (props) => {
    console.log("This log to check for the detail passed to th eproduct Preview page.---", props);
    let onWatch = (props.currentFeaturePos === 1) ? <img src={heartRateOnWatchLink} alt='Heart Rate' /> : new Date().toLocaleTimeString();
    return (
        <div className='watchImage'>
            < img src={props.currentPreviewImage}
                width='100%' alt="Click side color to change the watch color" />
            <div className="wathcAbsoImg">{onWatch}</div>
        </div >
    );
}

export default ProductPreview