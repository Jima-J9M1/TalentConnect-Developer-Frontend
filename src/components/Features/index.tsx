import SectionTitle from '../common/SectionTitle';
import featuresData from './FeaturesData';
import SingleFeature from './SingleFeature';

const Features = () => {
    return (
        <section className="pb-8 sm:pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px] mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="container">
                <SectionTitle
                    title="Main Features"
                    paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                />

                <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
                    {featuresData.map((feature, i) => (
                        <SingleFeature key={i} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
