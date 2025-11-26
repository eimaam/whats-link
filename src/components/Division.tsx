interface DivisionProps {
    imageFirst: boolean;
    image: string;
    title: string;
    content: string;
    showButton: boolean;
    btnLabel: string;
}

const Division: React.FC<DivisionProps> = (props: DivisionProps) => {
    const image_first = props.imageFirst;
    if (image_first) {
        return (
            <div id="division">
                <div>
                    <div>
                        <img src={props.image} alt="" />
                    </div>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.content}</p>
                        {props.showButton && <button>{props.btnLabel}</button>}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div id="division">
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    {props.showButton && <button>{props.btnLabel}</button>}
                </div>
                <div>
                    <img src={props.image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Division;