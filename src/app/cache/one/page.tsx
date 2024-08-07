import Link from "next/link";

export default function One() {
    function randoNum(){
        return Math.floor((Math.random() * (1000-100)) + 100);
    }
    return (
        <div>
            <p>{randoNum()}</p>
            <Link href={'/cache/two'}>Two</Link>
        </div>
    );
}