import Nav from "./Nav";

const links = [
    { name: 'Job Opportunities', href: '#' },
    { name: 'Whitepaper', href: '#' },
    ,
]
const stats = [
    { name: 'Industry Clients', value: '63' },
    { name: 'Happy Customers', value: '100+' },
]

export default function History() {
return(
    <>

        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <Nav />

            <img
        src="https://images.unsplash.com/photo-1618587194716-40490bdba417?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
        >
        <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{
        clipPath:
        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    }}
        />
        </div>
        <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
        >
        <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style={{
        clipPath:
        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    }}
        />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Handcrafted by Humans. Automated by Machines .</h2>
        <p className="mt-6 text-lg leading-8 text-gray-50">
        Dive deep into our rich cultural and technical history.
        </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-violet-300 sm:grid-cols-2 md:flex lg:gap-x-10">
    {links.map((link) => (
        <a key={link.name} href={link.href}>
    {link.name} <span aria-hidden="true">&rarr;</span>
        </a>
        ))}
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat) => (
        <div key={stat.name} className="flex flex-col-reverse">
        <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
        </div>
        ))}
        </dl>
        </div>
        </div>
        </div>
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
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
                    <div className="w-full px-4 lg:w-1/2 xl:w-1/2">
                        <div className="mt-10 lg:mt-20">

                            <h2 className="text-dark mb-8 text-3xl font-bold sm:text-5xl">
                                About StitchCraft
                            </h2>
                            <p className="text-body-color mb-10 text-base">
                                StitchCraft is not just an ordinary tailoring app; it is a revolution in the world of fashion. We bring together the finest elements of traditional craftsmanship and cutting-edge technology to create a seamless and convenient experience for our customers. Our mission is simple yet profound: to connect local tailors with discerning customers in a way that is as effortless as ordering food through Swiggy.

                                We deeply value the artistry and skill of tailoring, passed down through generations of artisans. We are committed to preserving this rich heritage by providing a platform for talented local tailors to showcase their expertise and craftsmanship. Through our app, we empower these skilled artisans, giving them the opportunity to reach a wider audience and flourish in their trade.
                            </p>
                            <p className="text-body-color mb-12 text-base">
                                Personalized fashion is the heart and soul of StitchCraft. We understand that every individual has their own unique style and preferences, and we believe in bringing these ideas to life. Our app allows you to connect with local tailors who not only understand your vision but also have the skill and passion to turn it into reality. Whether it's a custom-made suit, a traditional outfit, or a one-of-a-kind ensemble, StitchCraft ensures that your fashion dreams become a tangible and exquisite reality.

                                We are not just a platform; we are a community that supports and celebrates local businesses. By choosing StitchCraft, you are making a conscious decision to contribute to your local economy and uplift talented tailors in your community. Through our app, you can discover hidden gems in your neighborhood, support small-scale entrepreneurs, and witness the magic that happens when traditional craftsmanship meets modern innovation.

                                Join us on this transformative journey as we redefine the way tailoring is experienced and enjoyed. StitchCraft is not just an app; it's a movement that celebrates the fusion of tradition and technology, creating a world where personalized fashion is accessible to all. Embrace your style, embrace local talent, and let StitchCraft be your guide to sartorial excellence.                            </p>

                        </div>
                    </div>
            </div>

        </section>


    </>
)
}
