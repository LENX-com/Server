import React from 'react'
import Stories from '../stories/Stories'
import Card from '../../../components/Cards/Card'
import Blogs from '../../../components/Blogs/Blogs'
import SectionTitle from '../../../components/Typography/SectionTitle'

const AboutManufacturer = () => {
    return (
        <div>
            <div className="my-2">
                <Stories />
            </div>
            <Card className="mt-4">
                <div className="mb-auto max-w-lg mt-2">
                    <h1 className="text-lg uppercase font-bold"> Manufacturer Name</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                </div>
            </Card>
            <div className="my-4">
                <div className="text-center">
                <SectionTitle> Blogs </SectionTitle>                
                </div>
            <Blogs />
            </div>
        </div>
    )
}

export default AboutManufacturer
