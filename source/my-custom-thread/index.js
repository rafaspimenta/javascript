
// microtask queue (nextTick queue -> promise queue) -> timer queue -> i/o queue (depends on IO poling) -> check queue -> close queue
// console.log("log 1");
// setTimeout(() => console.log("this is settimeout"), 0);
// process.nextTick(() => console.log("this is process.next 1"));
console.log("log 2");


// const https = require("node:https");
// const os = require('os');


// const MAX_CALL = 24;//numCPUCores;
// const numCPUCores = os.cpus().length;

// const start = Date.now();
// for (let i = 0; i < MAX_CALL; i++) {
//     https.request("https://www.google.com", (res) => {
//         res.on("data", () => {});
//         res.on("end", () => {
//             console.log(`Request: ${i + 1}`, Date.now() - start);
//         });
//     })
//     .end();
// }


// console.log("Number of CPU cores: " + numCPUCores);

// process.env.UV_THREADPOOL_SIZE = MAX_CALL;

// for (let i = 0; i < MAX_CALL; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i + 1}`, Date.now() - start);
//     });
// }


// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//     if (req.method == "GET") {
//         if (req.url === "/") {
//             res.writeHead(200, { "Content-Type": "text/plan" });
//             res.end("Home page");
//         } else if (req.url === "/about") {
//             res.writeHead(200, { "Content-Type": "text/plan" });
//             res.end("about page");
//         } else if (req.url === "/api") {
//             res.writeHead(200, { "Content-Type": "application/json" });
    
//             const superHero = {
//                 firstName: "Bruce",
//                 lastName: "Wayne",
//             };
//             res.end(JSON.stringify(superHero));
//         } else {
//             res.writeHead(404, { "Content-Type": "text/plan" });
//             res.end("Page not found");
//         }
//     }

    // res.writeHead(200, { "Content-Type": "text/html" });

    // const superHero = {
    //     firstName: "Bruce",
    //     lastName: "Wayne"
    // };
    // const { firstName } = superHero;

    // let html = fs.readFileSync(__dirname + "/index.html", "utf-8");
    // html = html.replace("{{name}}", firstName);

    // res.end(html);
//});

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2
// });

// const writeableGzipStream = fs.createWriteStream("./file2.txt.gz");

// readableStream.pipe(gzip).pipe(writeableGzipStream);

//const writeableStream = fs.createWriteStream("./file2.txt");

//readableStream.pipe(writeableStream);

// readableStream.on("data", (chunk) => {
//     console.log("chunk", chunk);
//     writeableStream.write(chunk);
// });

//console.log("end");

// const fs = require("node:fs/promises");

// async function readFile() {
//     try {
//         const data = await fs.readFile("./file.txt", "utf-8");
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFile();

// fs.readFile("./file.txt", "utf-8")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// const fs = require("node:fs");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.log("error: ", error);
//         return;
//     }

//     console.log(data);
// });

// console.log("end");

// fs.writeFile("./file.txt", "\nutf-82", { flag: "a" }, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("written");
// });
