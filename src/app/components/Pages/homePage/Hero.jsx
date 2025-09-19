import Image from 'next/image'
import { MdOutlineAddIcCall } from 'react-icons/md'
import element1 from '../../../assets/image/elements/element1.png'
import element2 from '../../../assets/image/elements/element2.png'
import element3 from '../../../assets/image/elements/element3.png'
import element4 from '../../../assets/image/elements/element4.png'
import Button from '../../sheard/button/Button'
import Head from 'next/head'

export default function Hero() {
    return (
        <>
            <Head>
                <title>Notex – Trusted Software Development & Digital Partner</title>
                <meta
                    name="description"
                    content="Notex is your trusted partner for custom software, web, mobile apps, and AI-powered digital transformation solutions."
                />
                <meta
                    name="keywords"
                    content="Notex, software development, web development, mobile app development, AI solutions, digital transformation, Bangladesh tech company"
                />
                <meta name="author" content="Notex" />
                <meta name="robots" content="index, follow" />
            </Head>

            <div className="sm:pt-28 pt-20 pb-16">
                <Image
                    src={element1}
                    alt="Background abstract circle design on right side"
                    className="h-[50rem] w-[50rem] opacity-50 fixed -top-12 -right-96 z-[1]"
                />
                <Image
                    src={element1}
                    alt="Background abstract circle design on left side"
                    className="h-[50rem] w-[50rem] opacity-50 fixed top-48 -left-[26rem] z-[1]"
                />

                <div className="relative">
                    <Image
                        data-aos="fade-in"
                        src={element2}
                        alt="Top-left floating element graphic"
                        className="2xl:w-40 sm:w-32 w-20 absolute 2xl:-top-24 sm:-top-28 -top-[4.5rem]"
                    />
                    <Image
                        data-aos="fade-down"
                        src={element3}
                        alt="Right-side floating UI shape"
                        className="lg:w-32 w-20 absolute lg:top-28 sm:top-[8.5rem] top-[80%] lg:right-32 sm:right-40 right-12"
                    />
                    <Image
                        data-aos="fade-up"
                        src={element4}
                        alt="Bottom-side dotted abstract shape"
                        className="sm:w-24 w-16 absolute lg:-bottom-[18%] sm:-bottom-[8%] bottom-0 lg:left-[35%] sm:left-[25%] left-[10%]"
                    />

                    <h1
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="sm:text-6xl text-4xl text-white text-center lg:w-10/12 mx-auto sm:leading-[4rem]"
                    >
                        Notex – Your Trusted Software Development & Digital Transformation Partner
                    </h1>

                    <p
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="text-lg lg:w-2/4 mx-auto my-7 text-center text-gray-300"
                    >
                        At <span className="font-medium text-lime-400">Notex</span>, we go beyond just being a
                        <span className="font-medium text-lime-400"> software company</span>. We are your strategic
                        <span className="font-medium text-lime-400"> technology partner</span>, offering
                        <span className="font-medium text-lime-400"> web development</span>,
                        <span className="font-medium text-lime-400"> mobile apps</span>, and
                        <span className="font-medium text-lime-400"> AI-powered solutions</span> tailored to accelerate your digital growth.
                    </p>

                    <div className="flex justify-center mt-10">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <Button
                                type="button"
                                text="Get a Free Quote"
                                href="/contact"
                                isFill={false}
                                icon={<MdOutlineAddIcCall />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
