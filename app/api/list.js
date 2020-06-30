import client from "./client";

const getList = () => client.get("./list");

export default {
  getListings,
};
