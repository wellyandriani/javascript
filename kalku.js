function add(){
    val = document.getElementsByName('nilai')[0].value;
    document.getElementsByName('nilai')[0].value += "+";
  }
  function subtract(){
    val = document.getElementsByName('nilai')[0].value;
    document.getElementsByName('nilai')[0].value += "-";
  }
  function multiply(){
    val = document.getElementsByName('nilai')[0].value;
    document.getElementsByName('nilai')[0].value += "*";
  }
  function divide(){
    val = document.getElementsByName('nilai')[0].value;
    document.getElementsByName('nilai')[0].value += "/";
  }
  function enter(){
    val = document.getElementsByName('nilai')[0].value;
    document.getElementsByName('hasil')[0].value = eval(val);
  }