import './page.css';
import Image from "next/image";
import Link from "next/link";
import PricingPlans from '../../components/PricingPlans';

const Pricing = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}plan-option-list`);
    const data = await res.json();

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
            <section className="w-full z-0 relative pt-24 pb-10">
                <div className="max-w-7xl mx-auto h-full">
                    <PricingPlans />
                </div>
            </section>

            {/* Pricing Compare Table */}
            <section className="w-full z-0 relative pt-10 pb-24">
                <div className="max-w-7xl mx-auto h-full">
                    <div className="pt-20 pb-16 flex items-center justify-center">
                        <span className="text-5xl font-bold text-center ">
                            Compare Plans and Features
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-xl rounded-xl overflow-hidden">
                            <thead className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                                <tr>
                                    <th className="py-3 px-6 text-left">Compare Features</th>
                                    <th className="py-3 px-6 text-center">Starter</th>
                                    <th className="py-3 px-6 text-center">Premium</th>
                                    <th className="py-3 px-6 text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.map((plan, index)=> (
                                    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-100"} key={index}>
                                        <td className="py-3 px-6 text-left">{plan.options}</td>
                                        <td className="py-3 px-6 text-center">{plan.subscriptions_ids.includes("1") ? "✔" : "✘" }</td>
                                        <td className="py-3 px-6 text-center">{plan.subscriptions_ids.includes("2") ? "✔" : "✘" }</td>
                                        <td className="py-3 px-6 text-center">{plan.subscriptions_ids.includes("3") ? "✔" : "✘" }</td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Pricing;