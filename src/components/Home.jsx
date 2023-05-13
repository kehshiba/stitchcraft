import Nav from "./Nav";
import * as Scroll from 'react-scroll';

import { Link, Element } from 'react-scroll'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
export default function Home() {
    const products = [
        {
            id: 1,
            name: 'Casual Shirt - Rajasthan Made',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80',
            imageAlt: "Shirt",
            price: '₹999',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Jaipur Salwaar',
            href: '#',
            imageSrc: ' https://images.unsplash.com/photo-1597983073512-90bd150e19f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            imageAlt: "Salwaar",
            price: '₹1299',
            color: 'Orange',
        },
        {
            id: 3,
            name: 'Embroidered Lehenga',
            href: '#',
            imageSrc: 'https://images.unsplash.com/photo-1602210666042-4d76a62d6fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVoZW5nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
            imageAlt: 'Lehenga',
            price: '₹2499',
            color: 'White',
        },

    ]
    return (
        <div className="bg-white">
            <Nav />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#d8b4fe] to-[#3b0764] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <Fade duration={2000}>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                         StitchCraft
                        </h1>
                        </Fade>
                        <Fade duration={2000} delay={1000}>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                             Precision tailoring for the busy citizens of today.
                        </p>
                        </Fade>
<Zoom delay={2000} duration={1000}>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/schedule"
                                className="rounded-md bg-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >

                                Schedule an Appointment
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>

                                Explore the world of handcrafted fabrics <span aria-hidden="true">→</span>
                                </Link>
                            </a>
                        </div>
</Zoom>
                </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className="relative overflow-hidden">
                    <Fade delay={3000}>
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                    <Element name="test1" className="element">

                    <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
               Turn heads with handcrafted clothing, personalized for you.
                </h1>
                    </Element>
                <p className="mt-4 text-xl text-gray-500">
                Bold ? Feeling Formal ? Our tailors have meticulously crafted the best clothing from raw indian materials, sourced from our local farms.
                </p>
                </div>
                <div>
                <div className="mt-10">
                <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                <img
                src="https://images.unsplash.com/photo-1624623729048-84fd0869891e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
                />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                src="https://images.unsplash.com/photo-1503160865267-af4660ce7bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
                />
                </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                src="https://images.unsplash.com/photo-1622780432053-767528938f34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
                />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                src="https://images.unsplash.com/photo-1620730388398-63ebafa14481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
                />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
                />
                </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                src="https://images.unsplash.com/photo-1624378440070-950d99e25830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1328&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
                />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                alt=""
                className="h-full w-full object-cover object-center"
                />
                </div>
                </div>
                </div>
                </div>
                </div>

                <a href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                    <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500}>

                    Shop Collection
                    </Link>
                </a>
                </div>
                </div>
                </div>
                </div>
                    </Fade>
                </div>

                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Purchase Collections</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>

                                        <h3 className="text-sm text-gray-700">
                                            <Element name="test2" className="element">

                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                            </Element>

                                        </h3>

                                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
