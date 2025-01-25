export let BASE_URL: string;

if (process.env.NODE_ENV == "production") {
    BASE_URL = "https://afashionstore.vercel.app";
} else {
    BASE_URL = "http://localhost:3000";
}
