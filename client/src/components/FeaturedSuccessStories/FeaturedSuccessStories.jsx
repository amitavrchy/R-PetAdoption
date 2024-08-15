import React from 'react';
const successStories = [
    {
        id: 1,
        title: "Bella's Journey",
        image: "https://i.ibb.co/ccvjMjw/Brown-Chihuahua.jpg",
        description: "Bella was rescued from a neglectful situation and nursed back to health. Today, she lives happily with her forever family."
    },
    {
        id: 2,
        title: "Max's Transformation",
        image: "https://i.ibb.co/2y7spmR/kitty-cat-kitten-pet-45201.jpg",
        description: "Max was found injured and alone. After extensive medical care and rehabilitation, he's now thriving in his new home."
    },
    {
        id: 3,
        title: "Luna's New Life",
        image: "https://i.ibb.co/RNs3RDD/pexels-smoothclick0z1-3828097.jpg",
        description: "Luna's life was transformed after being rescued. She's now a beloved companion, bringing joy to her new family."
    }
];
const FeaturedSuccessStories = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-secondary">Our Success Stories</h2>
                <p className="text-lg mb-8 text-gray-600">
                    Thanks to the generous support of donors like you, we've been able to transform the lives of countless animals. 
                    Here are just a few heartwarming stories of success.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {successStories.map(story => (
                    <div key={story.id} className="bg-white shadow-lg rounded-lg p-6">
                        <img src={story.image} alt={story.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                        <p className="text-gray-700">{story.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedSuccessStories;
