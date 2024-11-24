import axios from "axios";

// fetch all the services data.
export const getServices = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`);
        return res.data;
    } catch (error) {
        console.error(error);
        return [];        
    }
};


// fetch single service details.
export const getServiceDetails = async (id) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`);
        return res.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};