import { ChildAsFc } from "./Child"

const Parent = () => {
    return (
        <div>
            <ChildAsFc color="green" onClick={() => console.log("Clicked !!")} >
                <h1>Childrens </h1>
            </ChildAsFc>
        </div>
    );
}

export default Parent;