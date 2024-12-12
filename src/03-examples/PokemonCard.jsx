import PropTypes from "prop-types";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize text-info">
        #{id} {name}
      </h2>
      <div>
        {sprites.map((sp) => (
          <img key={sp} alt={name} src={sp} />
        ))}
      </div>
    </section>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
};
