function CardShimmer(){
    return(
    <div className="shimmerj">
        <article>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="shimmer"></div>
        </article>
    </div>
    )
}
const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {new Array(20).fill(0).map((element, index) => {
          return <CardShimmer key={index} />;
        })}
      </div>
    );
  };




export default Shimmer;