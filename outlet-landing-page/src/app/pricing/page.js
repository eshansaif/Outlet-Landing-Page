import './page.css';
import Image from "next/image";
import Link from "next/link";
import PricingPlans from '../../components/PricingPlans';

const Pricing = () => {

    return (
        <div className="bg-gradient-to-r from-[#ffffff] via-[#f9f8f8] to-[#f9f6f6] w-full">
            <section className="w-full h-[50%] z-0 relative page-top-background pt-36 pb-20">
                <Image
                    className="absolute top-[50%] right-0"
                    src="/banner-shape-2.png" // Replace with your image path
                    alt="Logo"
                    height={100}
                    width={70}
                />
                <Image
                    className=" absolute bottom-0 left-0"
                    src="/banner-shape-1.png" // Replace with your image path
                    alt="Logo"
                    height={100}
                    width={70}
                />
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <span className="gradient-text font-medium text-xl">Our Pricing</span>
                        <span className="font-bold text-5xl mt-6">Pricing Plans That Suit You</span>
                        <p className="text-xl mt-6 text-center text-gray-500">Customize your pricing plan to fit your needs perfectly.<br /> Find the ideal option for your need and get started hassle-free.</p>
                    </div>
                </div>
            </section>
            
            {/* Pricing Plans  */}
            <section className="w-full z-0 relative pt-24 pb-16">
                <div className="max-w-7xl mx-auto h-full">
                    <PricingPlans />
                </div>
            </section>

            {/* Pricing Compare Table */}
            <section className="w-full z-0 relative pt-16 h-screen pb-24">
                <div className="max-w-7xl mx-auto h-full">
                    <div className="pt-20 pb-16 flex items-center justify-center">
                        <span className="text-5xl font-bold text-center ">
                            Compare Plans and Features
                        </span>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="min-w-full bg-white shadow-xl rounded-xl overflow-hidden">
                            <thead class="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                                <tr>
                                    <th class="py-3 px-6 text-left">Compare Features</th>
                                    <th class="py-3 px-6 text-center">Starter</th>
                                    <th class="py-3 px-6 text-center">Premium</th>
                                    <th class="py-3 px-6 text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-gray-100">
                                    <td class="py-3 px-6 text-left">Feature 1</td>
                                    <td class="py-3 px-6 text-center">✔</td>
                                    <td class="py-3 px-6 text-center">✔</td>
                                    <td class="py-3 px-6 text-center">✔</td>
                                </tr>
                                <tr class="bg-white">
                                    <td class="py-3 px-6 text-left">Feature 2</td>
                                    <td class="py-3 px-6 text-center">✘</td>
                                    <td class="py-3 px-6 text-center">✔</td>
                                    <td class="py-3 px-6 text-center">✔</td>
                                </tr>
                                <tr class="bg-gray-100">
                                    <td class="py-3 px-6 text-left">Feature 3</td>
                                    <td class="py-3 px-6 text-center">✘</td>
                                    <td class="py-3 px-6 text-center">✘</td>
                                    <td class="py-3 px-6 text-center">✔</td>
                                </tr>
                                <tr class="bg-white">
                                    <td class="py-3 px-6 text-left">Feature 4</td>
                                    <td class="py-3 px-6 text-center">✔</td>
                                    <td class="py-3 px-6 text-center">✔</td>
                                    <td class="py-3 px-6 text-center">✔</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Pricing;