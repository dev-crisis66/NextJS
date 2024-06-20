import {sql} from "@vercel/postgres";

export default async function Home() {
    const {rows} = await sql`SELECT * FROM CARS;`;
    return (
        <>
            {rows.map((row, index) => {
                return (
                    <ul>

                        <li>{row.brand}</li>
                        <li>{row.model}</li>
                        <li>{row.year}</li>
                    </ul>
                )
            })}
            <h1>Home Page</h1>
        </>
    );
}