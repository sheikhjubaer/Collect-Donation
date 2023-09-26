import { Link } from "react-router-dom";

const DonationCart = ({ donation }) => {
    const { id, picture, title, category, color_card_bg, color_text, color_button_background, description, price } = donation;

    return (
        <Link to={`/donation/${id}`}>
            <div className="card card-compact rounded-lg" style={{ background: color_card_bg, cursor: "pointer" }}>
                <figure><img src={picture} alt="donationCategory" className="w-full" /></figure>
                <div className="card-body">
                    <div className="card-actions">
                        <button className="border-none px-4 py-1 rounded text-[16px] font-semibold" style={{ background: color_button_background, color: color_text }}>{title}</button>
                    </div>
                    <h2 className="card-title" style={{ color: color_text }}>{category}</h2>
                </div>
            </div>
        </Link>
    );
};

export default DonationCart;