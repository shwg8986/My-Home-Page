import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { ResearchImages, ResearchImagesType } from "./Info";

const images: ResearchImagesType[] = [...ResearchImages]

export const ResearchDetailSlide = () => {
    return (
        <ImageGallery items={images} />
    )
}
