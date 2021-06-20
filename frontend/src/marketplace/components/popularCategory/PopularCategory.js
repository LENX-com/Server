import React from 'react';
import SectionTitle from '../../marketplace/components/Typography/SectionTitle';
import CategoryCard from '../../marketplace/components/categoryCard/CategoryCard';

const PopularCategory = () => {
    return (
        <div>
            <SectionTitle>Popular Categories</SectionTitle>
            <CategoryCard />
        </div>
    );
};

export default PopularCategory;