export const modfiyData = (data) => {
  const newData = data.map((ele, ind) => {
    const cat = {
      id: ind,
      title: ele,
    };

    return cat;
  });

  return newData;
};
