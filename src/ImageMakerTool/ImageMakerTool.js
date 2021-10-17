import React, { useState } from "react";
import placeholder from "../images/placeholder.png";
import html2canvas from "html2canvas";
import "./ImageMakerTool.css";

const ImageMakerTool = () => {
  const [{ alt, src }, setImg] = useState({
    src: placeholder,
    alt: "Upload an Image",
  });

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };

  const [linea1, setlinea1] = useState("");
  const [linea2, setlinea2] = useState("");
  const [imagen, setImagen] = useState("");
  const [SelectImg, setSelectImg] = useState(false);

  const onChangeLinea1 = function (evento) {
    setlinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setlinea2(evento.target.value);
  };

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  const hadleSelectImg = () => {
    setSelectImg(true);
  };

  const hadleOfSelectImg = () => {
    setSelectImg(false);

  };

  return (
    <div className="App">
      <br />
      <div
        onChange={onChangeImagen}
        onClick={hadleSelectImg}
        className="classic"
      >
        <label className="LabelImg">
          <input type="radio" name="test" value="fire" />
          <img id="imgSelect" src={"/img/fire.jpg"} />
        </label>
        <label className="LabelImg">
          <input type="radio" name="test" value="futurama" />
          <img id="imgSelect" src={"/img/futurama.jpg"} />
        </label>
        <label className="LabelImg">
          <input type="radio" name="test" value="history" />
          <img id="imgSelect" src={"/img/history.jpg"} />
        </label>
        <label className="LabelImg">
          <input type="radio" name="test" value="matrix" />
          <img id="imgSelect" src={"/img/matrix.jpg"} />
        </label>
        <label className="LabelImg">
          <input type="radio" name="test" value="philosoraptor" />
          <img id="imgSelect" src={"/img/philosoraptor.jpg"} />
        </label>
        <label className="LabelImg">
          <input type="radio" name="test" value="smart" />
          <img id="imgSelect" src={"/img/smart.jpg"} />
        </label>
      </div>{" "}
      <button
        type="button"
        className="btn btn-secondary btn-lg"
        onClick={hadleOfSelectImg}
      >
        Sin imagen
      </button>
      <div className="InputText">
        <br />
        <input
          onChange={onChangeLinea1}
          type="text"
          className="form-control"
          placeholder="Texto Superior"
        />{" "}
        <br />
        <input
          onChange={onChangeLinea2}
          type="text"
          className="form-control"
          placeholder="Texto Inferior"
        />{" "}
        <br />
        <br />
      </div>
      <div className="canvas" id="meme">
        <div>
          <div className="FotoSuperior">
            <span id="textoSuperior">{linea1}</span>
            <img src={src} alt={alt} id="img1" className="form-img__img-preview" />
          </div>
          <div className="FotoInferior">
            <span id="textoInferior">{linea2}</span>
            {SelectImg && <img id="img2" src={"/img/" + imagen + ".jpg"} />}
          </div>
        </div>
      </div>
      <form encType="multipart/form-data">
        <div className="form__img-input-container">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            id="photo"
            className="visually-hidden"
            onChange={handleImg}
          />

          <button type="button" className="btn btn-primary btn-lg">
            <label htmlFor="photo" className="form-img__file-label">
              <svg
                width="60"
                height="50"
                viewBox="0 0 1792 1792"
                fill="#ffffff"
              >
                <path d="M928 832q0-14-9-23t-23-9q-66 0-113 47t-47 113q0 14 9 23t23 9 23-9 9-23q0-40 28-68t68-28q14 0 23-9t9-23zm224 130q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-1024 574h1536v-128h-1536v128zm1152-574q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm-1024-642h384v-128h-384v128zm-128 192h1536v-256h-828l-64 128h-644v128zm1664-256v1280q0 53-37.5 90.5t-90.5 37.5h-1536q-53 0-90.5-37.5t-37.5-90.5v-1280q0-53 37.5-90.5t90.5-37.5h1536q53 0 90.5 37.5t37.5 90.5z " />
              </svg>
              Elegir imagen de archivo
            </label>
          </button>
        </div>
      </form>
      <br />
      <button
        type="button"
        role="button"
        className="btn btn-lg btn-warning"
        onClick={onClickExportar}
      >
        Descargar Meme
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ImageMakerTool;
