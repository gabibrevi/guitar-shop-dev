import image from "../../public/img/nosotros.jpg";
import styles from "../styles/about-us.css";

export function meta() {
    return [
        {
            title: "Guitar LA - About us",
            description: "Guitar shop - Blog - Photos",
        },
    ];
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "preload",
            href: image,
            as: "image",
        },
    ];
}
const AboutUs = () => {
    return (
        <main className="container about-us">
            <h2 className="heading"> About Us</h2>
            <div className="content">
                <img src={image} alt="Image about us" />
                <div>
                    <p>
                        Nullam sed purus ac est pulvinar laoreet nec eget purus.
                        Aliquam erat volutpat. Etiam id risus id turpis dictum
                        ultricies. Sed dictum lorem non urna cursus, id euismod
                        nisl pretium. Morbi sed bibendum magna, non rhoncus sem.
                        Proin nec augue pharetra, volutpat ex et, imperdiet
                        lacus. In dapibus libero non urna tincidunt convallis.
                        Aenean sit amet odio elit. Duis varius nisi in elementum
                        iaculis. Sed et semper nunc. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia curae; Nullam dignissim et felis quis imperdiet.
                    </p>
                    <p>
                        Sed et semper nunc. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia curae;
                        Nullam dignissim et felis quis imperdiet. Vivamus sit
                        amet fermentum elit. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis
                        egestas. In feugiat interdum pulvinar. Nam non dictum
                        nibh. Donec porttitor justo tortor, id mattis quam
                        posuere non. Ut convallis vel velit fringilla varius.
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Nulla sodales diam
                        eu mauris dapibus, sit amet pretium orci ornare.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;
