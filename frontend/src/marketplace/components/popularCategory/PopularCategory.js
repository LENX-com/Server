import React from 'react';
import SectionTitle from '../Typography/SectionTitle';
import CategoryCard from '../categoryCard/CategoryCard';

const PopularCategory = () => {
    return (
        <div>
            <SectionTitle>Popular Categories</SectionTitle>
            <CategoryCard />
        </div>
    );
};

export default PopularCategory;