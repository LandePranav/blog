
export default function Header() {
    return(
        <div className=" justify-between flex align-middle" >
            <div className="flex-grow">
                Coztheta
            </div>
            <div className="flex justify-evenly gap-3 ">
                <button type="button" >Latest</button>
                <button type="button" >Toggle</button>
            </div>
        </div>
    ) ;
}