
import { useEffect, useState } from "react";
import axios from "axios";
import { SHEET_ID } from "../config";

export function useSheet<T>(tabName: string) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    axios.get(`https://opensheet.elk.sh/${SHEET_ID}/${tabName}`)
      .then(res => setData(res.data));
  }, [tabName]);

  return { data };
}
