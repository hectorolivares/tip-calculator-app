(() => {

  // html references

  const iptBill = document.getElementById("billValue");
  const btnTip = document.querySelectorAll(".tip__btn");
  const btnCustom = document.getElementById("customBtn");
  const iptPeople = document.getElementById("peopleValue");
  const peopleTextError = document.getElementById("peopleError");
  const totalTip = document.getElementById("totalTip");
  const totalPerson = document.getElementById("totalPerson");
  const reset = document.getElementById("reset");

  // event listeners

  let bill;
  iptBill.addEventListener("change", () => {
    bill = Number(iptBill.value);
    getTip(tip);
  });

  let tip;
  btnTip.forEach( ( tipElement ) => {
    tipElement.addEventListener("click", () => { 
      removeFocus();
      tipElement.classList.add('tipActive');
      tip = Number( tipElement.value );
      getTip(tip);
    });
  });
  
  btnCustom.addEventListener("change", () => {
    removeFocus();
    tip = Number(btnCustom.value) * 0.01;
    getTip(tip);
  });

  let people;
  iptPeople.addEventListener("change", () => {
    people = Number(iptPeople.value);
    getTip(tip);
  });

  reset.addEventListener("click", () => {
    doReset();
  });

  // functions

  const getTip = (tip) => {
    iptPeople.addEventListener("change", () => {
      if (people === 0 || people === undefined) {
        iptPeople.style.border = ".2rem solid var(--red)";
        peopleTextError.style.visibility = "visible";
      } else {
        iptPeople.style.border = "";
        peopleTextError.style.visibility = "";
      }
    });

    if (people !== 0 && people !== undefined && tip !== undefined && bill !== undefined) {
      let tipAmount = (bill / people) * tip;
      totalTip.innerHTML = tipAmount.toFixed(2);
      getTotal(tipAmount);
    }
  };

  const getTotal = (tipAmount) => {
    let total = bill / people + tipAmount;
    totalPerson.innerHTML = total.toFixed(2);

    reset.style.pointerEvents = "auto";
    reset.style.opacity = "100%";
  };

  const removeFocus = () => {
    btnTip.forEach( tipElement => {
      tipElement.classList.remove('tipActive');
    });
  }

  const doReset = () => {
    bill = 0;
    tip = 0;
    people = 0;
    totalPerson.innerHTML = "0.00";
    totalTip.innerHTML = "0.00";
    reset.style.pointerEvents = "";
    reset.style.opacity = "";
    iptBill.value = "";
    btnCustom.value = "";
    iptPeople.value = "";
  };
})();
