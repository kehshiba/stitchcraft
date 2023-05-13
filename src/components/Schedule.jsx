import Nav from "./Nav";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebaseConfig from "../dbConnect";


export default function Schedule(){

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const getFormData = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};

        for (let [name, value] of formData) {
            if (form.elements[name].tagName === 'SELECT') {
                value = form.elements[name].value;
            }
            data[name] = value;
        }

        console.log(data);
        try {
            // Send the form data to Firestore
            await addDoc(collection(db, 'bookings'), data);
            toast.success(`Request Sent Successfully!`, {
                position: 'top-right',
                autoClose: 12000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        } catch (error) {
            console.error('Error sending form data to Firestore:', error);
        }
    };
    return(
        <form onSubmit={getFormData}>
            <Nav />

        <section className="bg-white py-24 sm:py-20">
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

            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-black">Schedule a Date</h2>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                Name</label>
                            <input type="text" name="name" id="name"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 light:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="Full Name" required="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="type"
                                   className="block mb-2 text-sm font-medium text-gray-900 light:text-black">Type of Clothing</label>
                            <input type="text" name="type" id="type"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-primary-500 light:focus:border-primary-500"
                                   placeholder="Shirt,Tee,Pants etc." required="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="date"
                                   className="block mb-2 text-sm font-medium text-gray-900 light:text-black">Choose Date</label>
                            <input type="date" name="date" id="date"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-primary-500 light:focus:border-primary-500"
                                    required=""/>
                        </div>
                        <div>
                            <label htmlFor="item-size"
                                   className="block mb-2 text-sm font-medium text-gray-900 light:text-black">Size</label>
                            <input type="text" name="item-size" id="item-size"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-primary-500 light:focus:border-primary-500"
                                   placeholder="XS,S,M etc.." required="" />
                        </div>
                        <div>
                            <label htmlFor="item-quantity"
                                   className="block mb-2 text-sm font-medium text-gray-900 light:text-black">Quantity</label>
                            <input type="number" name="item-quantity" id="item-quantity"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-primary-500 light:focus:border-primary-500"
                                   placeholder="2" required="" />
                        </div>
                        <div>
                            <label htmlFor="item-description"
                                   className="block mb-2 text-sm font-medium text-gray-900 light:text-black">Description</label>
                            <input type="textarea" name="item-description" id="item-description"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-primary-500 light:focus:border-primary-500"
                                   placeholder="Add some notes Here" required="" />
                        </div>
                    </div>

                    <button type="submit"
                            className="mt-2 rounded-md bg-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Schedule Date
                    </button>
            </div>
            </div>
            <ToastContainer />

        </section>
        </form>

    )
}