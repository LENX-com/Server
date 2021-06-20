import React from 'react';
import SectionTitle from '../../marketplace/components/Typography/SectionTitle';
import ManufactureCard from './manufacture/ManufactureCard';

const TopManufacturer = () => {
    return (
        <div>
            <SectionTitle>Top Selling</SectionTitle>
            <ManufactureCard />
        </div>
    );
};

export default TopManufacturer;