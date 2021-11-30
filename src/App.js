import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  var UserStep = 3;
  var OptName = "Atbash";
  var OtherSymbols = [' ', ',', '.', ':', ';', '!', '?', '-', '_', '=', '+', '(', ')', '[', ']', '@', '`', "'", '"', '<', '>', '|', '/', '%', '$', '^', '&', '*', '~'];
  var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var RusAlfUp = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
  var RusAlfLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
  var EngAlfUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var EngAlfLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var RusAlfUpEncrypt = Array(33);
  var RusAlfLowerEncrypt = Array(33);
  var EngAlfUpEncrypt = Array(26);
  var EngAlfLowerEncrypt = Array(26);
  var NumbersEncrypt = Array(10);

  const [UserText, setText] = React.useState();
  const [result, setResult] = React.useState();
  React.useEffect(() => {
    initEncrypt()
  }, []);

  function initEncrypt() {
    RusAlfUpEncrypt = CezarEncrypt(UserStep, RusAlfUp);
    RusAlfLowerEncrypt = CezarEncrypt(UserStep, RusAlfLower);
    NumbersEncrypt = CezarEncrypt(UserStep, Numbers);
    EngAlfUpEncrypt = CezarEncrypt(UserStep, EngAlfUp);
    EngAlfLowerEncrypt = CezarEncrypt(UserStep, EngAlfLower);
  }

  function CezarEncrypt(stap, arr) {
    var CopyAlf = arr.slice();
    var i = 0;

    while (i + stap < CopyAlf.length) {
      var buff = CopyAlf[i];
      CopyAlf[i] = CopyAlf[i + stap];
      CopyAlf[i + stap] = buff;
      i++;
    }
    return CopyAlf;
  }
  var pos

  function contains(symb, arr) {
    var letter = symb;
    pos = 0;
    for (var i = 0; i < arr.length; i++) {
      if (letter === arr[i]) {
        pos = i;
        return true;
        break;
      }
    }
  }

  function encrypt(text) {
    initEncrypt()
    console.log(EngAlfLowerEncrypt)
    var result = "";
    for (var i = 0; i <= text.length; i++) {
      var symbol = text[i];
      if (contains(symbol, OtherSymbols)) {
        result += symbol;
      }
      if (contains(symbol, Numbers)) {
        symbol = NumbersEncrypt[pos];
        result += symbol;
      }
      if (contains(symbol, RusAlfUp)) {
        symbol = RusAlfUpEncrypt[pos];
        result += symbol;
      }
      if (contains(symbol, RusAlfLower)) {
        symbol = RusAlfLowerEncrypt[pos];
        result += symbol;
      }
      if (contains(symbol, EngAlfUp)) {
        symbol = EngAlfUpEncrypt[pos];
        result += symbol;
      }
      if (contains(symbol, EngAlfLower)) {
        symbol = EngAlfLowerEncrypt[pos];
        console.log(pos)
        result += symbol;
      }
    }
    return result;
  }

  function enAtbash(mensage) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
    var tebahpla1 = "zyxwvutsrqponmlkjihgfedcba";
    var decoded_string = "";

    for (var i = 0; i < mensage.length; i++) {
      var coded_letra = mensage.charAt(i);

      if (/[^a-zA-Z]/.test(mensage[i])) {
        decoded_string = decoded_string + mensage[i];
      } else if (mensage[i] === mensage[i].toUpperCase()) {
        var letraPosMayus = alphabet.indexOf(coded_letra);
        var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
        decoded_string = decoded_string + tebLetraPosMayus;
      } else {
        var letraPosMinus1 = alphabet1.indexOf(coded_letra);
        var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
        decoded_string = decoded_string + tebLetraPosMinus1;
      }
    }
    return decoded_string;
  }

  function Atbash() {
    setResult(enAtbash(UserText));
  }

  function Caesar() {
    console.log(UserText)
    setResult(encrypt(UserText));
  }

  return (
    <>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div class="container">
        <form>
          <div>
            <div class="row justify-content-around">
              <div class="col-md-6">
                <div id="encrypt-block">
                  <h3 class="title">Enter text: </h3>
                  <div class="form__group field">
                    <input
                      name="user-text"
                      id="text-to-work"
                      class="form__field"
                      placeholder="Text"
                      name="name"
                      id="name"
                      required
                      onChange={(event) => setText(event.target.value)}
                    ></input>
                  </div>

                  <div onClick={Atbash} class="button2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Atbash
                  </div>
                  <div onClick={Caesar} class="button2">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Caesar
                  </div>
                </div>
                <div class="col-md-6">
                  <h3 class="title">Result:</h3>
                  <div class="title" id="output">
                    <h3>{result}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div class="drops">
          <div class="drop drop-1"></div>
          <div class="drop drop-2"></div>
          <div class="drop drop-3"></div>
          <div class="drop drop-4"></div>
          <div class="drop drop-5"></div>
        </div>
      </div>
    </>
  );
}

export default App;
