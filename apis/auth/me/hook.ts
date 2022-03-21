import { useQuery } from "react-query";
import { me } from "./api";

export const useMe = () => useQuery(["me"], me);
