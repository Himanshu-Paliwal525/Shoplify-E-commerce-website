import "./NewsLetter.css";
const NewsLetter = () => {
    return (
        <div className="news-letter">
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our news letter and stay Updated</p>
            <form className="subscribe">
                <input type="email" placeholder="Enter your email" className="newsletter-inp"/>
                <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;
