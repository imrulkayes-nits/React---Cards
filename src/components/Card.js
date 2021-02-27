
const todoTitle = "hello I am finea liquet congue est. Vestibulum vita";
const todoDesc = " convallis vitae magna in, bibendum posuere risus. Cras odio nunc, facilisis ac neque at, aliquet congue est. Vestibulum vitae ultricies sem, sit amet cursus risus.";

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

function Card(){
  return <div className="card">
  <h3 className="cardTitle">{todoTitle}</h3>
  <p className="cardDesc">{todoDesc}</p>
  <p className="cardFooter">{dateName + "/" + monthName + "/" + currentYear}</p>
</div>
}


export default Card;