type ProductData = {
  [k: string]: FormDataEntryValue;
};

export const dataServices = async (data: ProductData) => {
  console.log(data);
};
