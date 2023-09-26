const DonationUnavaliable = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh', // You can adjust the height as needed
    };

    const textStyle = {
        fontSize: '3rem', // Adjust the font size as needed
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <h1 className="font-bold" style={textStyle}>No Donations Yet!</h1>
        </div>
    );
};

export default DonationUnavaliable;
