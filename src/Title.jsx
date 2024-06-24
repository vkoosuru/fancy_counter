function Title({locked}){
    return <h1 className="title">{locked? <span>LIMIT! BUY PRO FOR &gt;5</span>:"Fancy Counter"  }</h1>;
}
export default Title;