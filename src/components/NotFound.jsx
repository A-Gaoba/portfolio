
const NotFound = () => {
    return (
        <div className="error-container">
            <h1 className="error-heading">404</h1>
            <p className="error-message">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
            <p className="error-message">Let&apos;s get you back to the <a href="/">homepage</a>.</p>
        </div>
    );
};

export default NotFound;
