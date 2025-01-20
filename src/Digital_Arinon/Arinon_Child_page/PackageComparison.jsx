import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const plans = [
    {
        name: 'Starter Package',
        price: '₹15,000/month',
        gst: '+GST',
        features: [
            {
                name: '3 posts per week (Reels, photos, captions)',
                // amount: '12 posts/month',
                included: true,
            },
            {
                name: '2 stories per week for audience interaction',
                // amount: '8 stories/month',
                included: true,
            },
            {
                name: 'Basic hashtag research for better reach',
                // amount: '1 research report/month',
                included: true,
            },
            {
                name: 'Up-To 500 followers every month',
                amount: 'Instagram',
                included: true,
            },
            {
                name: 'Monthly performance insights (followers and engagement)',
                // amount: '1 report/month',
                included: true,
            },
            { name: 'Trending Reels every week', amount: 'Not included', included: false },
            { name: 'Daily stories to boost engagement', amount: 'Not included', included: false },
            {
                name: 'Advanced analytics with growth strategies',
                amount: 'Not included',
                included: false,
            },
            {
                name: '1 x Free On-site shoot session',
                amount: 'Not included',
                included: false,
            },
        ],
    },
    {
        name: 'Growth Package',
        price: '₹22,000/month',
        gst: '+GST',
        highlighted: true,
        highlightedMessage: 'Most Popular',
        features: [
            {
                name: '4 posts per week (photos, Reels, captions)',
                // amount: '16 posts/month',
                included: true,
            },
            {
                name: '3 stories per week for stronger connections',
                // amount: '12 stories/month',
                included: true,
            },
            {
                name: '1 trending Reel every week',
                // amount: '4 trending Reels/month',
                included: true,
            },
            {
                name: 'Up-To 1000 followers every month',
                amount: 'Instagram',
                included: true,
            },
            {
                name: 'Advanced engagement insights in monthly reports',
                // amount: '1 advanced report/month',
                included: true,
            },
            { name: 'Daily stories to boost engagement', amount: 'Not included', included: false },
            {
                name: 'Comprehensive analytics with tailored growth strategies',
                amount: 'Not included',
                included: false,
            },
            {
                name: '1 x Free On-site shoot session',
                amount: 'Not included',
                included: false,
            },
        ],
    },
    {
        name: 'Premium Package',
        price: '₹30,000/month',
        gst: '+GST',
        features: [
            {
                name: 'Daily posts (mix of Reels, carousels, quotes, and photos)',
                // amount: '24 posts/month',
                included: true,
            },
            {
                name: 'Daily interactive stories',
                // amount: '30+ stories/month',
                included: true,
            },
            {
                name: '3 high-quality Reels ',
                // amount: '12 Reels/month',
                included: true,
            },
            {
                name: 'Up-To 2000 followers every month',
                amount: 'Instagram',
                included: true,
            },
            {
                name: 'Weekly analytics reports',
                // amount: '4 reports/month',
                included: true,
            },
            {
                name: 'Custom campaigns and seasonal promotions',
                // amount: '2 campaigns/month',
                included: true,
            },
            {
                name: 'Support with a dedicated account manager',
                // amount: 'Priority support available anytime',
                included: true,
            },
            {
                name: '1 x Free On-site shoot session',
                // amount: ' - month',
                included: true,
            },
        ],
    },

    {
        name: 'Custom Plan',
        price: null,
        features: [
            {
                name: 'Fully customizable posting schedules',
                included: true,
            },
            {
                name: 'Personalized content strategy and planning',
                included: true,
            },
            {
                name: 'Competitor analysis and industry benchmarking',
                included: true,
            },
            {
                name: 'Custom campaign development (festivals, launches, etc.)',
                included: true,
            },
            {
                name: 'Dynamic Reels and creative assets tailored to campaigns',
                included: true,
            },
            {
                name: 'Advanced analytics with growth strategy reports',
                included: true,
            },
            {
                name: 'Priority support for urgent updates and revisions',
                included: true,
            },
            {
                name: 'Custom branding assets (templates, highlight covers, etc.)',
                included: true,
            },
        ],
    },
];

function PackageComparison() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex justify-center items-center my-6'>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className='shadow-lg hover:shadow-xl px-6 py-3 rounded-lg w-3/4 font-semibold text-black transition-colors duration-200'
            >
                See full comparison
            </button>

            {/* Modal Backdrop */}
            {isOpen && (
                <div
                    className='z-40 fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300'
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Modal */}
            <div
                className={`fixed inset-0 z-50 overflow-y-auto ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } transition-opacity duration-300`}
            >
                <div className='flex justify-center items-center p-4 min-h-full'>
                    <div
                        className={`bg-white/80 backdrop-blur-xl rounded-xl shadow-2xl transform transition-all duration-300 max-w-8xl w-full ${
                            isOpen ? 'scale-100' : 'scale-95'
                        }`}
                    >
                        {/* Modal Header */}
                        <div className='flex justify-between items-center border-gray-200 px-6 py-4 border-b'>
                            <div>
                                <h2 className='font-bold text-2xl text-gray-900'>
                                    Choose your plan
                                </h2>
                                <p className='mt-1 text-gray-500 text-sm'>
                                    Select the perfect plan for your needs
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className='text-gray-400 hover:text-gray-500 focus:outline-none'
                            >
                                <X className='w-6 h-6' />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className='px-6 py-8'>
                            <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                                {plans.map((plan) => (
                                    <div
                                        key={plan.name}
                                        className={`rounded-lg border ${
                                            plan.highlighted
                                                ? 'border-blue-custom shadow-lg transform scale-105'
                                                : 'border-gray-300'
                                        }`}
                                    >
                                        <p className='-top-[1px] -right-[1px] absolute bg-gradient-to-r from-purple-custom to-blue-custom px-5 border border-blue-custom rounded-tr-lg rounded-bl-md text-center text-sm text-white'>
                                            {plan.highlightedMessage}
                                        </p>
                                        <div className='flex flex-col justify-between p-6 h-full'>
                                            <div>
                                                <h3 className='font-semibold text-gray-900 text-xl'>
                                                    {plan.name}
                                                </h3>
                                                <p className='mt-4 font-bold text-3xl text-gray-900'>
                                                    {plan.price}
                                                    <span className='font-normal text-gray-500 text-xs'>{plan.gst}</span>
                                                </p>
                                                <ul className='space-y-4 mt-6'>
                                                    {plan.features.map((feature) => (
                                                        <li
                                                            key={feature.name}
                                                            className={`flex items-center space-x-3 ${
                                                                feature.included ? '' : 'opacity-50'
                                                            }`}
                                                        >
                                                            {feature.included ? (
                                                                <Check className='flex-shrink-0 w-5 h-5 text-green-500' />
                                                            ) : (
                                                                <X className='flex-shrink-0 w-5 h-5 text-red-500' />
                                                            )}
                                                            <div>
                                                                <span
                                                                    className={`text-sm ${
                                                                        feature.included
                                                                            ? 'text-gray-600'
                                                                            : 'line-through text-gray-500'
                                                                    }`}
                                                                >
                                                                    {feature.name}
                                                                </span>
                                                                <p className='text-gray-500 text-xs'>
                                                                    {feature.amount}
                                                                </p>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <a href='#contact' onClick={() => setIsOpen(false)}>
                                                <button
                                                    className={`mt-8 w-full px-4 py-2 rounded-md font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                                        plan.highlighted
                                                            ? 'bg-blue-custom text-white hover:bg-blue-custom focus:ring-blue-custom/60'
                                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500'
                                                    }`}
                                                >
                                                    Get Started
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className='border-gray-200 bg-gray-50 px-6 py-4 border-t rounded-b-xl'>
                            <div className='flex justify-end'>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className='px-4 py-2 font-medium text-gray-700 text-sm hover:text-gray-500'
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PackageComparison;
