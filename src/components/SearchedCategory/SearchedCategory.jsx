import { useLoaderData, useParams } from "react-router-dom";
import DisplaySearchedCategory from "./DisplaySearchedCategory";

const SearchedCategory = () => {

    const searchedDonations = useLoaderData();
    const { title } = useParams();
    // console.log("HII: ",typeof title);
    // console.log("HII3: ",title);
    // const searchedDonation = searchedDonations.find(donations => donations.title === title);

    const donationsToDisplay = [];

    console.log(searchedDonations.length);
    for(const data of searchedDonations) {
        if (data.title == title) {
            console.log("Given: ",title);
            const searchedDonation = searchedDonations.find(donations => donations.title === title);
            donationsToDisplay.push(searchedDonation);
        }
    }
    console.log(donationsToDisplay);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {/* <h2>Donation: {donationsToDisplay.length}</h2> */}
            {
                donationsToDisplay.map(data => <DisplaySearchedCategory key={data.id} data={data}></DisplaySearchedCategory>)
                // donations.map(donation => <DonationCart key={donations.id} donation={donation}></DonationCart>)
            }
        </div>
    );
    
};

export default SearchedCategory;