const changetraining = (e) => {
  document.getElementById("completed-training").style.display = "none";
  document.getElementById("ongoing-training").style.display = "flex";
  document.getElementById("training").style.backgroundColor = "white";
  document.getElementById("completed").style.backgroundColor = "#e8e8e8";
};
const changecomplete = (e) => {
  document.getElementById("ongoing-training").style.display = "none";
  document.getElementById("completed-training").style.display = "flex";
  document.getElementById("completed").style.backgroundColor = "white";
  document.getElementById("training").style.backgroundColor = "#e8e8e8";
};
