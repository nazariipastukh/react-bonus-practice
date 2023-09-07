import {useEffect, useState} from 'react';
import {jsonService} from "../../services";
import {Cars} from "./Cars";

export const CarsComponent = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        jsonService.getCars()
            .then(response => setCars(response.data))
    }, [])

    return (
        <div>
            {
                cars?.map(car => <Cars key={car.id} car={car}/>)
            }
        </div>
    );
};