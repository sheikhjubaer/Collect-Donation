import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DonationDetails.css'
import { saveDonation } from "../../utility/localStorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    const { picture, title, category, color_card_bg, color_text, color_button_background, description, price } = donation;
    console.log(donation);

    const handleDonation = () => {
        // saveJobApplication(idInt);
        saveDonation(idInt);
        toast('Your donation received successfully!', {
            position: "top-center"
        })
    }

    return (
        <div>
            <div className="image-container rounded-lg mt-4">
                <img src={picture} alt="Your Image" />
                <div className="overlay">
                    <button onClick={handleDonation} style={{background: color_text}}>Donate ${price}</button>
                </div>
            </div>
            <div>
                <h1 className="mt-8 mb-4 text-2xl font-bold">{title}</h1>
                <p className="text-justify mb-10">{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;