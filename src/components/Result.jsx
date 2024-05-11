const Result = (props) => {
    const { value } = props;
    return (<>
        <div style={{ backgroundColor: "aqua", color: "black", width: "100px", height: "100px" }}>
            <p>{value}</p>
        </div></>)
}

export default Result;