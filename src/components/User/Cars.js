export const Cars = ({car}) => {
    const {brand,id, year}=car

    return (
        <div >
            {brand} {id} {year}
        </div>
    );
};