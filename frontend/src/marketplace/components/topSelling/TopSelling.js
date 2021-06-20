import React from 'react';
import SectionTitle from '../../marketplace/components/Typography/SectionTitle';
import CategoryCard from '../../marketplace/components/categoryCard/CategoryCard';

const TopSelling = () => {
    return (
        <div>
            <SectionTitle>Top Selling</SectionTitle>
            <CategoryCard></CategoryCard>
        </div>
    );
};

export default TopSelling;