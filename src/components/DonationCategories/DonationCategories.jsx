import { useEffect, useState } from "react";
import DonationCart from "../DonationCart/DonationCart";

const DonationCategories = () => {
    const [donations, setDonations] = useState([]);

    useEffect( () => {
        fetch('donationsCategory.json')
            .then(res => res.json())
            .then(data => setDonations(data));
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-12">
            {
                donations.map(donation => <DonationCart key={donations.id} donation={donation}></DonationCart>)
            }
        </div>
    );
};

export default DonationCategories;