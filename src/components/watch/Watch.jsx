const Watch = ({watch}) => {
    const {name, price} = watch
    return (
        <div>
            <h4>watch: {name} </h4>
            <p>price {price} </p>
        </div>
    );
};

export default Watch;