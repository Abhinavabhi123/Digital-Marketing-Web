import { enquiryData } from "../Constants/adminData";

export const fetchData = async (page, pageSize) => {

    const startIndex = page  * pageSize;
    const endIndex = startIndex + pageSize;
    const data = enquiryData.slice(startIndex, endIndex);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return {
      data: data,
      total: enquiryData.length,
    };
  };