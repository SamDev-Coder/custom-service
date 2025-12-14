const states = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue",
  "Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu",
  "Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi",
  "Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo",
  "Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","FCT - Abuja"
];

const stateSelect=document.getElementById("state");
states.forEach(s=>{
  let o=document.createElement("option");
  o.value=s; 
  o.textContent=s;
  stateSelect.appendChild(o);
});

const form=document.getElementById("regForm");
form.addEventListener("submit",e=>{
  e.preventDefault();

  let data={
    fullname:fullname.value,
    passportNo:passportNo.value,
    nin:nin.value,
    state:state.value,
    lga:lga.value,
    nextOfKin:nok.value,
    email:email.value,
    address:address.value,
    qualification:qualification.value,
    marital:marital.value,
    status:"Pending"
  };

  let list=JSON.parse(localStorage.getItem("customs"))||[];
  list.push(data);
  localStorage.setItem("customs",JSON.stringify(list));

  const popup=document.getElementById("successPopup");
  popup.style.display="block";
  setTimeout(()=>popup.style.display="none",3000);

  form.reset();
});
