
const EventsComponent: React.FC = () => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }
    return (
        <div>
            <input type="text" name="test" id="test" onChange={handleChange} />
            <div draggable onDragStart={onDragStart}> Drag me !</div>
        </div>
    );
}

export default EventsComponent;