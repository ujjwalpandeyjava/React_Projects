import React from 'react'


const ProductDetails = (props) => {
    const colorOptions = props.pdata.colorOptions.map((item, pos) => {
        const classoption = ['dot'];
        if (pos === props.currentPreviewImagePos)
            classoption.push('selectedProductIcon');
        return (
            <img className={classoption.join(" ")} key={pos} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
        );
    });
    const featureOptions = props.pdata.featureList.map((item, pos) => {
        const classoption = ['btn'];
        if (pos === props.currentFeaturePos)
            classoption.push('selectedFeatureBtn');
        return (
            <button key={pos} className={classoption.join(" ")} onClick={() => { props.onFeaturesOptionClick(pos) }} >{item}</button>
        );
    });
    return (
        <div className='flexColumn watchDataCss'>
            <h1>{props.pdata.title}</h1>
            <div>{props.pdata.description}</div>
            <div>
                <h3>Select Color</h3>
                <div className='dotParent'>
                    {colorOptions}
                </div>
            </div>
            <div>
                <h3>Features</h3>
                <div>{featureOptions}</div>
            </div>
            <div>
                <button className='btn buyNow'>Buy Now</button>
            </div>
        </div>
    );
}


export default ProductDetails