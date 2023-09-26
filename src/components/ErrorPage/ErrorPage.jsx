import { Link } from "react-router-dom";

const ErrorPage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh', // You can adjust the height as needed
    };

    const textStyle = {
        fontSize: '3rem', // Adjust the font size as needed
        textAlign: 'center',
    };

    const buttonStyle = {
        marginTop: '1rem', // Adjust the margin-top as needed
    };

    return (
        <div>
            <div style={containerStyle}>
                <h1 className="font-bold" style={textStyle}>Oops! There is no such content</h1>
                <div style={buttonStyle}>
                    <Link to="/"><button className="btn btn-primary text-white font-bold">Go Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
