import './App.css';

function Show({image,id,
title, instructor,duration}){


    <section className="book">
        <div className="image" style={{backgroundImage: URL({image})}}></div>
        <div className="inf">
            <h2>{title}</h2>
            <h3>{id}</h3>
            <h4>{duration}</h4>
            <h5>{instructor}</h5>


        </div>


    </section>
}
export default Show;