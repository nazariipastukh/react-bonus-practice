import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const jsonService = {
    getCars: () => apiService.get(urls.cars)
}