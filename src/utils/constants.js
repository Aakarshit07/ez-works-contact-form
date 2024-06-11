//Data for Card
export const data = [
    {
        id: 1,
        title: "Presentation Design",
        description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." 
    },
    {
        
        id: 2,
        title: "Audio-Visual Production",
        description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." 
    },
    {
        id: 3,
        title: "Translation Services",
        description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." 
    },
    {
        id: 4,
        title: "Graphic Design",
        description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." 
    },
    {
        id: 5,
        title: "Research & Analytics",
        description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." 
    },
    {
        id: 6,
        title: "Data Processing",
        description: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." 
    },

]

//Validate Email
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};