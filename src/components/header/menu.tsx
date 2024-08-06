type props = {
    name:string,
    age:string,
    job:string,
}

export default function Menu({name,age,job}:props) {
    return (
        <div className="flex gap-3">
            Menu            
            <div>
            {name}
            </div>
            <div>
            {age}
            </div>
            <div>
            {job}
            </div>
        </div>
    );
}