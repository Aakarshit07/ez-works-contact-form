import '../index.css';

/**
 * Card component.
 * Renders a card with title and description.
 * @param {Object} item - The card data.
 * @param {string} item.title - The title of the card.
 * @param {string} item.description - The description of the card.
 * @returns {JSX.Element} The rendered card component.
 */
const Card = ({ item }) => {
    return (
        <div key={item.id} className="card-container">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>
    );
};

export default Card;