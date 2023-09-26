import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSavedDonation } from "../../utility/localStorage";
import DonationDisplay from "../DonationDisplay/DonationDisplay";
import DonationUnavaliable from "./DonationUnavaliable";

const Donation = () => {
    const donations = useLoaderData();

    const [savedDonation, setSavedDonation] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    const [showButton, setShowButton] = useState(true); // Initialize showButton as true

    useEffect(() => {
        const storedDonationId = getSavedDonation();
        if (donations.length > 0) {
            const donationsSaved = [];
            for (const id of storedDonationId) {
                const donation = donations.find((donation) => donation.id === id);
                if (donation) {
                    donationsSaved.push(donation);
                }
            }
            setSavedDonation(donationsSaved);
        }
    }, []);

    const handleDonationsFilter = () => {
        setDataLength(savedDonation.length);
        setShowButton(false); // Set showButton to false after the button is clicked
    };

    return (
        <div>
            {/* <h2>Total Donations: {savedDonation.length}</h2> */}
            <div>
                {
                    savedDonation.length === 0 && <DonationUnavaliable></DonationUnavaliable>
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">
                {
                    savedDonation.slice(0, dataLength).map((displayDonation) => (
                    <DonationDisplay key={displayDonation.id} displayDonation={displayDonation}></DonationDisplay>))
                }
            </div>
            <div className="justify-center text-center">
                {/* Conditionally render the button */}
                {savedDonation.length > 4 && showButton && (
                    <button
                        onClick={() => {
                            handleDonationsFilter();
                            setShowButton(false); // Hide the button after clicking it
                        }}
                        className="bg-green-600 px-4 py-2 rounded-lg text-white mb-10"
                    >
                        See More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Donation;
