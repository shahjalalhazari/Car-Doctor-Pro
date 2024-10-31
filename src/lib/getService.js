// fetch all the services data.
export const getServices = async () => {
    const res = await fetch("http://localhost:3000/services/api/get-all");
    const data = res.json();
    return data;
};


// fetch single service details.
export const getServiceDetails = async (id) => {
    const res = await fetch(`http://localhost:3000/services/api/${id}`);
    const data = res.json();
    return data;
};