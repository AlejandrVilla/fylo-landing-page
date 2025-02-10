import iconAccessAnywhere from "assets/icon-access-anywhere.svg";
import iconSecurity from "assets/icon-security.svg";
import iconCollaboration from "assets/icon-collaboration.svg";
import iconAnyFile from "assets/icon-any-file.svg";

const testimonials = [
    {
        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image: "/profile-1.jpg",
        name: "Satish Patel",
        job: "Founder & CEO, Huddle"
    },
    {
        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image: "/profile-2.jpg",
        name: "Bruce McKenzie",
        job: "Founder & CEO, Huddle"
    },
    {
        description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        image: "/profile-3.jpg",
        name: "Iva Boyd",
        job: "Founder & CEO, Huddle"
    }
]

const features = [
    {
        icon: iconAccessAnywhere,
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
        icon: iconSecurity,
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
        icon: iconCollaboration,
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
        icon: iconAnyFile,
        title: "Store any type of file",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
];

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export { testimonials, features, emailPattern };