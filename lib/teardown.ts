import fs from "fs";

const tearDown = async () => fs.unlinkSync("./lib/login.json");

export default tearDown;
