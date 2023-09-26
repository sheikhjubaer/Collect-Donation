const DonationDisplay = ({displayDonation}) => {
    const { id, picture, title, category, color_card_bg, color_text, color_button_background, description, price } = displayDonation;

    return (
        <div className="card card-side" style={{background: color_card_bg}}>
            <figure><img src={picture} alt="Movie" className="h-full w-[210px]"/></figure>
            <div className="card-body">
                    <div className="card-actions">
                        <button className="border-none px-4 py-1 rounded text-[16px] cursor-not-allowed hover:cursor-default font-bold" style={{ background: color_button_background, color: color_text, cursor: null }}>{title}</button>
                    </div>
                <h2 className="card-title font-extrabold">{category}</h2>
                <p className="font-bold" style={{color: color_text}}>${price}</p>
                <div className="card-actions">
                    <button className="btn text-white" style={{background: color_text}}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationDisplay;