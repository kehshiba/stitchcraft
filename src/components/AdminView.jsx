import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {useEffect, useState} from "react";
import Nav from "./Nav";
import Zoom from "react-reveal/Zoom";
import firebaseConfig from "../dbConnect";
import {toast} from "react-toastify";

export default function Admin() {




    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            initializeApp(firebaseConfig);
            const db = getFirestore()

            try {
                const querySnapshot = await getDocs(collection(db, 'bookings'));
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching Firestore data:', error);
                toast.error(`Not connected to DB`, {
                    position: 'top-right',
                    autoClose: 12000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        };

        fetchData();
    }, []);
    const calculateDaysFromToday = (date) => {
        const today = new Date();
        const targetDate = new Date(date);
        const timeDiff = Math.abs(targetDate.getTime() - today.getTime());
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return daysDiff;
    };
    return (
        <section className="bg-gradient-to-br from-neutral-50 to-violet-200 py-24 sm:py-40">
            <Nav />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8">Bookings</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((item) => (
                        <Zoom duration={3000}>

                        <div key={item.id} className="h-full w-full bg-indigo-50 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-50 border border-gray-100 shadow-lg p-10">
                            <table className="w-full">
                                <tbody>
                                <tr>
                                    <th className="text-left py-2">Name</th>
                                    <td className={"px-5"}>{item['name']}</td>
                                </tr>
                                <tr>
                                    <th className="text-left py-2">Type</th>
                                    <td className={"px-5"}>{item['type']}</td>
                                </tr>
                                <tr>
                                    <th className="text-left py-2">Date</th>
                                    <td className={"px-5"}>{item['date']}</td>
                                </tr>
                                <tr>
                                    <th className="text-left py-2">Days left</th>
                                    <td className={"px-5"}>{calculateDaysFromToday(item['date'])} days</td>
                                </tr>
                                <tr>
                                    <th className="text-left py-2">Size</th>
                                    <td className={"px-5"}>{item['item-size']}</td>
                                </tr>
                                <tr>
                                    <th className="text-left py-2">Quantity</th>
                                    <td className={"px-5"}>{item['item-quantity']}</td>
                                </tr>
                                <tr>
                                    <th className="text-left py-2">Description</th>
                                    <td className={"px-5"}>{item['item-description']}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        </Zoom>
                    ))}
            </div>
            </div>
        </section>

    );
}

