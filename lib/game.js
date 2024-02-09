const updatePosition = () => {
  window.addEventListener("keyup", (event) => {
    const key = event.key; // 'j'
    // Elements track 1 & track 2
    const firstPlace1 = document.querySelector("#player1-race").firstElementChild;
    const currentPos1 = document.querySelector("#player1-race > .active");
    const nextPos1 = currentPos1.nextElementSibling;
    const firstPlace2 = document.querySelector("#player2-race").firstElementChild;
    const currentPos2 = document.querySelector("#player2-race > .active");
    const nextPos2 = currentPos2.nextElementSibling;
    // Finish elements
    const lastTr1 = document.querySelector("#player1-race > .finish");
    const lastTr2 = document.querySelector("#player2-race > .finish");
    // Track 1 (if) & track 2 (else if)
    if (currentPos1 === lastTr1) {
      alert("Gandalf wins!");
      currentPos1.classList.remove("active");
      currentPos2.classList.remove("active");
      firstPlace1.classList.add("active");
      firstPlace2.classList.add("active");
    } else if (currentPos2 === lastTr2) {
      alert("Gollum (or Smeagol?) wins!");
    } else if (key === "a" && nextPos1 !== undefined) {
      currentPos1.classList.remove("active");
      nextPos1.classList.add("active");
    } else if (key === 'b' && nextPos2 !== undefined) {
      currentPos2.classList.remove("active");
      nextPos2.classList.add("active");
    }
  });
};

updatePosition();
