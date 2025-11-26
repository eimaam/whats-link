interface SectionProps {
    label1: string;
    label2: string;
    detail: string;
    btnLabel: string;
}

const Section:React.FC<SectionProps> = (props: SectionProps) => {
    return(
        <section>
            <div id="section">
                <div>
                    <h2>{props?.label1}</h2>
                    <h2>{props?.label2}</h2>
                    <p>{props?.detail}</p>
                </div>
                <button>{props?.btnLabel}</button>
            </div>
        </section>
    )
}
export default Section;