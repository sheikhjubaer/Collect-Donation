const getSavedDonation = () => {
    const savedDonation = localStorage.getItem('save-donations');
    if(savedDonation) {
        return JSON.parse(savedDonation);
    }
    return [];
}


const saveDonation = id => {
    const savedDonations = getSavedDonation();
    const exists = savedDonations.find(donationId => donationId === id);
    if(!exists) {
        savedDonations.push(id);
        localStorage.setItem('save-donations', JSON.stringify(savedDonations));
    }
}

export { saveDonation, getSavedDonation }