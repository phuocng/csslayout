const shuffe = (array: number[]) => {
    array.sort(() => Math.random() - 0.5);
    return array;
};

export default shuffe;
