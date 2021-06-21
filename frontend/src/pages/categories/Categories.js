import React from 'react';
import CategoriesList from '../../marketplace/components/categoriesList/CategoriesList';
import CategoryCard from '../../marketplace/components/categoryCard/CategoryCard';
import ManufactureCard from '../../marketplace/components/manufactureCard/ManufactureCard';
import BrandSlider from '../../marketplace/components/brandSlider/BrandSlider';
import SectionTitle from '../../marketplace/components/Typography/SectionTitle';
import Main from '../../marketplace/containers/Layout'

const Categories = () => {
    return (
        <Main>
            <SectionTitle>Browse by Category</SectionTitle>
            <CategoriesList />
            <CategoryCard />
            <SectionTitle>Browse by Manufacturer</SectionTitle>
            <ManufactureCard />
            <BrandSlider />
        </Main>
    );
};

export default Categories;
