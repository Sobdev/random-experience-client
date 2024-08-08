import { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./BtnUp.css";

const BtnUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <FaArrowAltCircleUp
                    className="btn-gradient-up"
                    onClick={scrollToTop}
                    role="button"
                    aria-label="Scroll to top"
                />
            )}
        </div>
    );
};

export default BtnUp;