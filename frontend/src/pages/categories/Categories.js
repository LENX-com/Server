import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoriesList from '../../marketplace/components/categoriesList/CategoriesList';
import CategoryCard from '../../marketplace/components/categoryCard/CategoryCard';
import ManufactureCard from '../../marketplace/components/manufactureCard/ManufactureCard';
import BrandSlider from '../../marketplace/components/brandSlider/BrandSlider';
import SectionTitle from '../../marketplace/components/Typography/SectionTitle';

const Categories = () => {
    return (
        <div>
            <SectionTitle>Browse by Category</SectionTitle>
            <CategoriesList />
            <CategoryCard />
            <ManufactureCard />
            <BrandSlider />
        </div>
    );
};

export default Categories;
