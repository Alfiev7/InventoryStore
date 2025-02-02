import SHA256 from "crypto-js/sha256";

export const hashEmail = (email) => SHA256(email).toString();
