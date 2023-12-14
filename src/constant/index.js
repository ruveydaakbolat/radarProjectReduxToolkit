export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.452628",
    bl_lng: "24.931129",
    tr_lat: "43.868068",
    tr_lng: "44.696435",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "b9c62e627amsh1f711f5429861eep17f6dejsnabd624c5e57e",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const options2 = {
  headers: {
    "X-RapidAPI-Key": "b9c62e627amsh1f711f5429861eep17f6dejsnabd624c5e57e",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
