import React from 'react';
import SectionTitle from '../Typography/SectionTitle';
import ManufactureCard from '../manufactureCard/ManufactureCard';

const TopManufacturer = () => {
    return (
        <div>
            <SectionTitle>Top Selling</SectionTitle>
            <ManufactureCard />
        </div>
    );
};

export default TopManufacturer;