import React from 'react'
import './bodyCSS.css';
import ProductData from './ProductData';
import ProductPreview from './productPreview';
import ProductDetails from './productDetails';

class Body extends React.Component {

    state = {
        productDetails: ProductData,
        currentFeaturePos: 0,
        currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
        currentPreviewImagePos: 0
    }
    onColorOptionClick = (pos) => {
        const updatedImage = this.state.productDetails.colorOptions[pos].imageUrl
        this.setState({ currentPreviewImage: updatedImage, currentPreviewImagePos: pos });
    }
    onFeaturesOptionClick = (pos) => {
        this.setState({ currentFeaturePos: pos })
    }
    render() {

        return (
            <div className='MainBodyCSS'>
                <div className='panels'>
                    <ProductPreview currentPreviewImage={this.state.currentPreviewImage} currentPreviewImagePos={this.state.currentPreviewImagePos} currentFeaturePos={this.state.currentFeaturePos} />
                </div>

                <div className='panels'>
                    <ProductDetails pdata={this.state.productDetails} currentPreviewImagePos={this.state.currentPreviewImagePos} onColorOptionClick={this.onColorOptionClick} onFeaturesOptionClick={this.onFeaturesOptionClick} currentFeaturePos={this.state.currentFeaturePos} />
                </div>
            </div>
        );
    }
}


export default Body;