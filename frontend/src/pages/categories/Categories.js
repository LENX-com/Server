import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoriesList from '../../marketplace/components/categoriesList/CategoriesList';
import CategoryCard from '../../marketplace/components/categoryCard/CategoryCard';
import ManufactureCard from '../../marketplace/components/manufactureCard/ManufactureCard';
import BrandSlider from '../../marketplace/components/brandSlider/BrandSlider';

const Categories = () => {
    return (
        <div>
            <CategoriesList></CategoriesList>
            <CategoryCard></CategoryCard>
            <ManufactureCard></ManufactureCard>
            <BrandSlider></BrandSlider>
        </div>
    );
};

export default Categories;
