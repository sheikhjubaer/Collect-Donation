import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    const bannerStyle = {
        backgroundImage: "url('https://i.ibb.co/XJxwkdp/community.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: "400px",
    };

    const overlayStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

    const h1Style = {
        color: "black", // Set the h1 text color to black
    };

    const [category, setCategory] = useState("");

    // Event handler to update the category state when the input value changes
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <div style={bannerStyle}>
            <div style={overlayStyle}></div>
            <div className="flex flex-col justify-center items-center h-full text-center relative z-10 p-8">
                <h1
                    style={h1Style}
                    className="text-3xl md:text-4xl font-bold text-white"
                >
                    I Grow By Helping People in Need
                </h1>
                <div className="flex flex-col md:flex-row mx-auto my-8">
                    <input
                        type="text"
                        onChange={handleCategoryChange}
                        placeholder="Search here..."
                        className="py-2 px-4 border border-gray-300 rounded-lg md:rounded-l-full focus:outline-none focus:ring focus:border-blue-300 flex-grow md:w-64"
                    />
                    <Link to={`/searchedDonation/${category}`}>
                        <button
                            type="button"
                            className="mt-2 md:mt-0 bg-[#FF444A] hover:bg-[#5044f0] text-white py-2 px-6 rounded-lg md:rounded-r-full font-semibold"
                        >
                            Search
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;







// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Banner = () => {
//     const bannerStyle = {
//         backgroundImage: "url('https://i.ibb.co/XJxwkdp/community.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//         height: "400px", 
//     };

//     const overlayStyle = {
//         backgroundColor: "rgba(255, 255, 255, 0.7)", 
//         position: "absolute",
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//     };

//     const h1Style = {
//         color: "black", // Set the h1 text color to black
//     };

//     const [category, setCategory] = useState('');

//     // Event handler to update the category state when the input value changes
//     const handleCategoryChange = (e) => {
//         setCategory(e.target.value);
//     };

//     return (
//         <div style={bannerStyle}>
//             <div style={overlayStyle}></div>
//             <div className="flex flex-col justify-center items-center h-full text-center relative z-10 p-8">
//                 <h1 style={h1Style} className="text-4xl font-bold text-white">
//                     I Grow By Helping People in Need
//                 </h1>
//                 <div className="flex flex-col md:flex-row mx-auto my-8">
//                     <input
//                         type="text"
//                         onChange={handleCategoryChange}
//                         placeholder="Search here..."
//                         className="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//                     />
//                     <Link to={`/searchedDonation/${category}`}>
//                         <button
//                             type="button"
//                             className="bg-[#FF444A] hover:bg-[#5044f0] text-white py-2 px-6 rounded-r-md font-semibold"
//                         >
//                             Search
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;
