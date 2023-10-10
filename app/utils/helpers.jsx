export const dateFormat = (date) => {
    const formatDate = new Date(date);

    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
    };
    return formatDate.toLocaleDateString("es-ES", options);
};
