import "./NewsLetter.css";
const NewsLetter = () => {
    return (
        <div className="news-letter">
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our news letter and stay Updated</p>
            <div className="subscribe">
                <input type="email" placeholder="Enter your email"/>
                <button type="submit">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;
